import React, { useState } from 'react'
import { Cignal } from "../lib/Cignal.js";
import { getUrlParam } from "../utils/getUrlVars.js";
import { Logger } from "../lib/Logger.js"

function Call() {
const logger = new Logger("index");
let peerNamePrompt = window.prompt("What's your name?", "Peer");
const peerId = undefined;
const peerName = peerNamePrompt === null ? "Peer" : peerNamePrompt;
const roomId = getUrlParam("roomId", null);
const url = `https://${window.location.host}/`;
const mediaConstraints = {
  audio: true,
  video: {
    width: { min: 320, ideal: 1280, max: 1280 },
    height: { min: 240, ideal: 720, max: 720 },
    aspectRatio: 1.777777778,
    frameRate: { min: 15, max: 30 },
  },
};
let cignal;

// const [other, setOther] = useState('true');
// const [clientLinkHelperText, setClientLinkHelperText] = useState('')

document.getElementById("otherElements").hidden = true;
const usernameShow = document.querySelector("#showLocalUserName");
const showAllUsers = document.querySelector("#allUsers");
const remoteUsernameShow = document.querySelector("#showRemoteUserName");
const callBtn = document.querySelector("#callBtn");
const hangUpBtn = document.querySelector("#hangUpBtn");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const copyBtn = document.querySelector("#copyBtn");
const informPeerBtn = document.querySelector("#informPeerBtn");

window.addEventListener("load", async function () {
  logger.debug("All assets are loaded");
  logger.debug(window.location);

  cignal = await Cignal.createRoom({
    url,
    peerId,
    roomId,
    peerName,
    mediaConstraints,
  });
  logger.debug("cignal is:%O", cignal);
  usernameShow.innerHTML = `Hello,  ${cignal.data.myDisplayName}`;
  cignal.on("remoteStream", (remoteStream) => {
    logger.debug("got remote stream");
    remoteVideo.srcObject = remoteStream;
    remoteUsernameShow.innerHTML = cignal.data.remoteDisplayName;
  });

  cignal.on("localStream", (localStream) => {
    logger.debug("got local stream");
    localVideo.srcObject = localStream;
    document.getElementById("myName").hidden = true;
    document.getElementById("otherElements").hidden = false;
    // setOther(false)

    document.getElementById("clientLinkHelperText").hidden = true;
    if (!roomId) {
      showAllUsers.innerHTML = `Other user in cignal room(${cignal.id}): None`;
      document.getElementById("clientLink").style.display = "flex";
      const clientLink = `${url}?roomId=${cignal.id}`;
      document.getElementById("clientLinkToCopy").innerHTML = clientLink;
    }
  });

  cignal.on("peerJoined", (name) => {
    showAllUsers.innerHTML = `Other user in cignal room(${cignal.id}): ${name}`;
  });

  cignal.on("offerReceived", () => {
    document.getElementById("callInitiator").style.display = "none";
    document.getElementById("callOngoing").style.display = "block";
  });

  cignal.on("clientError", ({ reason, error }) => {
    alert(`${reason}`);
    logger.debug("Client side error:%O", error);
  });

  cignal.on("serverError", ({ reason, error }) => {
    alert(`${reason.message}`);
    logger.debug("Server side error:%O", error);
  });

  cignal.on("peerHangUp", () => {
    hangUp();
  });
  cignal.on("information", (data) => {
    alert(`Message received from peer is-: ${data.chatMessage} `);
    logger.debug("Message received from peer is:%o", data.chatMessage);
    // this can be used for any arbitrary data transfer like chatmessages, audio mute / unmute messages etc.
  });
});

/* START: Initiate call to any user i.e. send message to server */
callBtn.addEventListener("click", async function () {
  logger.debug("inside call button");

  let res = await cignal.joinRoom();
  if (res.success) {
    document.getElementById("callOngoing").style.display = "block";
    document.getElementById("callInitiator").style.display = "none";
    document.getElementById("clientLink").style.display = "none";
  }
});
copyBtn.addEventListener("click", async () => {
  logger.debug("inside copy button");
  cignal.copyLink(`${url}?roomId=${cignal.id}`);
});
//hang up
hangUpBtn.addEventListener("click", async function () {
  let res = await cignal.leaveRoom();
  if (res.success) hangUp();
});

informPeerBtn.addEventListener("click", async () => {
  logger.debug("inside inform peer button");
  cignal.inform({ chatMessage: "Hello world!" });
});

async function hangUp() {
  usernameShow.innerHTML = "";
  showAllUsers.innerHTML = "";
  document.getElementById("myName").hidden = false;
  document.getElementById("otherElements").hidden = true;
  document.getElementById("callOngoing").style.display = "none";
  document.getElementById("allUsers").style.display = "none";
  document.getElementById("clientLink").style.display = "none";
  document.getElementById("callInitiator").style.display = "block";
  document.getElementById("thankYou").style.display = "flex";
  remoteVideo.removeAttribute("src");
  remoteVideo.removeAttribute("srcObject");
  localVideo.removeAttribute("src");
  remoteVideo.removeAttribute("srcObject");
}
  return (
    <div>
         <div id="clientLink" style={{display:"none", justifyContent:"center", marginTop: "10px"}}>
      <div>
        <h5>Share the below link with other person to join this room.</h5>
      <span id="clientLinkToCopy" style={{minWidth:"350px", border:"1px solid", margin:"5px", padding:"5px"}}></span>
     


      <input type="button" id="copyBtn" value="Copy"></input>
      </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", marginTop: "30px"}}>
       <span id="clientLinkHelperText" >Generating the link. Please wait...</span>
    </div>
    {/* <div id="myName" style="display:flex; justify-content:center;">
    
      <input type="text" id="usernameInput" placeholder="My name">

      <input type="button" id="loginBtn" value="Save"></input>
    </div>  */}
     <div id="thankYou" style={{display:"none", flexDirection: "column", alignItems: "center", justifyContent:"center", marginTop: "10px"}}>
        <h5>Thank you for using Cignal video call demo. </h5>
        <h5> You can refresh this page to start another call.</h5>
        <h5> You can close the this page, if you have received a call from someone else.</h5>

    </div>
    <div>
      <h3><span id="allUsers"></span></h3>
    </div>
    <div >   {/*className={`${!other && 'hiddend'}`} */}
      <b><span id="showLocalUserName"></span></b>
      <video
        id="localVideo"
        autoplay
        muted
        style={{
          width: "20%",
          height: "auto",
          backgroundColor: "darkgray",
          borderRadius: "15px"
        }}
      ></video>
      
      <video
        id="remoteVideo"
        autoplay
        style={{
          width: '60%',
          height: 'auto',
          backgroundColor: 'darkgray',
          borderRadius: "15px"}}
        
      ></video>
      <b><span id="showRemoteUserName"></span></b>
      <br />
      <div id="callInitiator">
        {/* <!-- <input id = "callToUsernameInput" 
          type = "text" placeholder = "username to call"/> 
          <br/> --> */}
        <button id="callBtn" class="btn-success btn">Call</button>
        {/* <!-- <button id = "hangUpBtn" class = "btn-danger btn">Hang Up</button>  --> */}
      </div>
      <div id="callOngoing" style={{display: "none"}}>
        <button id="hangUpBtn" class="btn-danger btn">Hang Up</button>
      </div>
      <div id="informPeerBlock" style={{display: "block",marginTop: "10px;"}}>
        <button id="informPeerBtn" class="btn-success btn">Inform Peer</button>
      </div>
      {/* <!-- <input type="button" id="start" onclick="start(true)" value="Start Video"></input>
      <input type="button" id="Stop" onclick="stop(true)" value="Stop Video"></input> --> */}
    </div>
    </div>
  )
}

export default Call