// import supertokens from "supertokens-node";
import {middleware} from "supertokens-node/framework/express"; 
import { errorHandler } from "supertokens-node/framework/express";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from"supertokens-node/recipe/thirdpartyemailpassword";
const express = require('expresss')
const cors = require('cors')
let { Google, Facebook } = ThirdPartyEmailPassword;


supertokens.init({
    framework: "express",
    supertokens: {
        // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "https://try.supertokens.com",
        // apiKey: "IF YOU HAVE AN API KEY FOR THE CORE, ADD IT HERE",
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "AM 3-d Jobs",
        apiDomain: "http://localhost:3000/",
        websiteDomain: "http://localhost:3000/",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                // We have provided you with development keys which you can use for testing.
                // IMPORTANT: Please replace them with your own OAuth keys for production use.
                Google({
                    clientId: process.env.GoogleClientID,
                    clientSecret: process.env.GoogleClientSecrets
                }),
                // Github({
                //     clientId: "467101b197249757c71f",
                //     clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
                // }),
                
                Facebook({
                    clientSecret: "971029887020128",
                    clientId: "bf3bcb33c3d53c107bf5530ee90629f9"
                })
            ]
        }),
        Session.init() // initializes session features
    ]
});


let app = express();

app.use(cors({
    origin: "<YOUR_WEBSITE_DOMAIN>",
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

