// const React = require('react');

// const SuperTokens = require("supertokens-auth-react");
// const ThirdPartyPasswordless = require("supertokens-auth-react/recipe/thirdpartypasswordless");
// const Session = require("supertokens-auth-react/recipe/session");

// SuperTokens.init({
//     appInfo: {
//         appName: "AM 3-d  Jobs",
//         apiDomain: "http://localhost:3001",
//         websiteDomain: "http://localhost:3000",
//         apiBasePath: "/auth",
//         websiteBasePath: "/auth"
//     },
//     recipeList: [
//         ThirdPartyPasswordless.init({
//             contactMethod: "EMAIL_OR_PHONE",
//             signInUpFeature: {
//                 providers: [
//                     ThirdPartyPasswordless.Github.init(),
//                     ThirdPartyPasswordless.Google.init(),
//                     ThirdPartyPasswordless.Facebook.init(),
//                     ThirdPartyPasswordless.Apple.init(),
//                 ],
//             }
//         }),
//         Session.init()
//     ]
// });


/* Your App */
// class App extends React.Component {
//     render() {
//         return (
//             <SuperTokensWrapper>
//                 {/*Your app components*/}
//             </SuperTokensWrapper>
//         );
//     }
// }