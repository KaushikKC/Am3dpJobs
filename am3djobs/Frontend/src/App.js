
import {
  Routes,
  // Switch,
  Route,
  // Link
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import Navbar from './components/Navbar';
// import PostingJob from './components/PostingJob';
import Jobs from './pages/Jobs.js';
import Talent from './pages/Talent.js';
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import ThirdPartyEmailPassword, { Google, Facebook} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
        appName: "AM 3-D Jobs",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000/",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [
                    // Github.init(),
                    Google.init(),
                    Facebook.init()
                    // Apple.init(),
                ]
            }
        }),
        Session.init()
    ]
});




function App() {
  return (
    <div className="">
      {/* <Navbar />
      <hr />
      <PostingJob />
      <MainContent />
      <Footer/> */}

     <Routes>
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          <Route path="/" element={<Navbar />}>
          <Route index element={<Jobs />} />
          <Route path="talent" element={<Talent />} />
          {/* <Route path="/">
            <Home />
          </Route> */}
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
