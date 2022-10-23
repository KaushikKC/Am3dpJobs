// import supertokens from "supertokens-node";
// import Session from "supertokens-node/recipe/session";
// import ThirdPartyEmailPassword from"supertokens-node/recipe/thirdpartyemailpassword";
// import {middleware} from "supertokens-node/framework/express";
// import { errorHandler } from "supertokens-node/framework/express";
let Dashboard = require("supertokens-node/recipe/dashboard");
let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let ThirdPartyEmailPassword = require("supertokens-node/recipe/thirdpartyemailpassword");
let {errorHandler} = require('supertokens-node/framework/express')
let {middleware} = require('supertokens-node/framework/express')
let { Google } = ThirdPartyEmailPassword;
const express = require('express');
const cors = require('cors');
const app = express();
supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.com
        connectionURI: "https://79b812c1521911edb08d8f5f16736e96-us-east-1.aws.supertokens.io:3570",
        apiKey: "W-oDkU-LTzrJ4jjpsMOMJAujloHUqR",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "AM 3-d  Jobs",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                // We have provided you with development keys which you can use for testing.
                // IMPORTANT: Please replace them with your own OAuth keys for production use.
                Google({
                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                    clientSecret: "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"
                })
            ]
        }),
        Dashboard.init({
            apiKey: "authdashboard",
          }),
        Session.init() // initializes session features
    ]
})

app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));
app.use(middleware());

app.use(errorHandler())

app.use((err,req,res,next) => {
    res.status(500).send("Internet error: " + err.message);
})

app.listen(3001, () => console.log(`API server listening on port ${3001}`))
// IMPORTANT: CORS should be before the below line.

