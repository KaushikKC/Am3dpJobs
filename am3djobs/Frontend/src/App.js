
import {
  Routes,
  // Switch,
  Route,
  // Link
  useLocation
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import { useAuth0 } from "@auth0/auth0-react";
// import Footer from './components/Footer';
// import MainContent from './components/MainContent';
// import Navbar from './components/Navbar';
// import PostingJob from './components/PostingJob';
import Jobs from './pages/Jobs.js';
import Talent from './pages/Talent.js';
// import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";

// import Session from "supertokens-auth-react/recipe/session";
// import EmailVerification from "supertokens-auth-react/recipe/emailverification";
// import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import CompanyCard from './components/CompanyCard';
import CandidateCard from './components/CandidateCard';
import CandidateProfile from './components/CandidateProfile';
import CompanyProfile from './components/CompanyProfile';
import Home from './pages/Home';
import Call from './pages/Call.js'
import { AnimatePresence } from "framer-motion"
import UserProfile from './components/UserProfile';
import CompanyUserProfile from './components/CompanyUserProfile';


// SuperTokens.init({
//   appInfo: {
//       appName: "AM 3-d  Jobs",
//       apiDomain: "http://localhost:3001",
//       websiteDomain: "http://localhost:3000",
//       apiBasePath: "/auth",
//       websiteBasePath: "/auth"
//   },
//   recipeList: [
//     EmailVerification.init({
//       mode: "REQUIRED",
//   }),
//       ThirdPartyPasswordless.init({
//           contactMethod: "EMAIL_OR_PHONE",
//           signInUpFeature: {
//               providers: [
//                   ThirdPartyPasswordless.Github.init(),
//                   ThirdPartyPasswordless.Google.init(),
//                   ThirdPartyPasswordless.Facebook.init(),
//                   ThirdPartyPasswordless.Apple.init(),
//               ],
//           }
//       }),
//       Session.init()
//   ]
// });



function App() {
  const location = useLocation();
  const {user} = useAuth0()
  return (

    <div className=" bg-[url('https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000')] dark:bg-[url('https://images.pling.com/img/00/00/62/67/35/1584405/577c4dc30402a8dfa3915867a59e64a89b7b3498e9f327bcfb0bcc7dfcbf99908e32.jpg')] bg-cover -z-2">
      <AnimatePresence>
     <Routes  location={location} key={location.pathname}>
          <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="job" element={<Jobs />} />
          <Route path="talent" element={<Talent />} />
          <Route path='/call' element = {<Call />} />
          <Route path="/company/:id" element={<CompanyCard />} />
          <Route path="/candidate/:id" element={<CandidateCard />} />
          <Route path="/CreateProfile/CompanyProfile" element={<CompanyProfile userprofile={user}/>} />
          <Route path="/CreateProfile/CandidateProfile" element={<CandidateProfile userprofile={user}/>} />
          <Route path="/userprofile/:id" element={<UserProfile/>} />
          <Route path="/companyprofile/:id" element={<CompanyUserProfile/>} />
        </Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
