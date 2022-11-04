const express = require("express");
const cors = require("cors");
// const morgan = require("morgan");
// const helmet = require("helmet");
let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let { verifySession } = require("supertokens-node/recipe/session/framework/express");
let { middleware, errorHandler } = require("supertokens-node/framework/express");
// import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";..
let ThirdPartyPasswordless = require("supertokens-node/recipe/thirdpartypasswordless");
let EmailVerification = require("supertokens-node/recipe/emailverification");
let Dashboard = require("supertokens-node/recipe/dashboard");
// import Passwordless from "supertokens-node/recipe/passwordless";
// import UserMetadata from "supertokens-node/recipe/usermetadata";
// import { SecondFactorClaim } from "./secondFactorClaim";
// let { Google, Github, Apple } = ThirdPartyPasswordless;

require("dotenv").config();

const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiDomain = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
const websiteDomain = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;

supertokens.init({
    framework: "express",
    supertokens: {
        // TODO: This is a core hosted for demo purposes. You can use this, but make sure to change it to your core instance URI eventually.
        connectionURI: "https://79b812c1521911edb08d8f5f16736e96-us-east-1.aws.supertokens.io:3570",
        apiKey: "W-oDkU-LTzrJ4jjpsMOMJAujloHUqR",
    },
    appInfo: {
        appName: "AM 3-d  Jobs",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        EmailVerification.init({
            mode: "REQUIRED",
        }),
        ThirdPartyPasswordless.init({
            providers: [
                // We have provided you with development keys which you can use for testing.
                // IMPORTANT: Please replace them with your own OAuth keys for production use.
                ThirdPartyPasswordless.Google({
                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                    clientSecret: "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"
                }),
                ThirdPartyPasswordless.Github({
                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
                    clientId: "467101b197249757c71f",
                }),
                Dashboard.init({
                    apiKey: "authdashboard",
                  }),
                
            ],
            contactMethod: "EMAIL_OR_PHONE",
            flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
        }),
        
        Session.init()
    ]
        
});

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "PUT", "POST", "DELETE"],
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        credentials: true,
    })
);
// app.use(morgan("dev"));
// app.use(
//     helmet({
//         contentSecurityPolicy: false,
//     })
// );
app.use(middleware());

// An example API that requires session verification
// app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
//     let session = req.session!;
//     res.send({
//         sessionHandle: session.getHandle(),
//         userId: session.getUserId(),
//         accessTokenPayload: session.getAccessTokenPayload(),
//     });
// });

app.use(errorHandler());

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("Internal error: " + err.message);
});

app.listen(3001, () => console.log(`API Server listening on port ${3001}`));
