import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import Alert from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test Alert' }} />
            <Routes>
              <Route path="/github-api-react" element={<Home />} />
              <Route path="/github-api-react/about" element={<About />} />
              <Route path="/github-api-react/profile/:name" element={<Profile />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
