const { VoiceServer } = require("@fonoster/voice");

const serverConfig = {
  pathToFiles: `${process.cwd()}/sounds`,
};

new VoiceServer(serverConfig).listen(
  async (req, res) => {
    console.log(req);
    await res.answer();
    await res.play(`sound:${req.selfEndpoint}/sounds/hello-world.sln16`);
    await res.hangup();
  }
);