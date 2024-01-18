import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyNetwork from "./pages/myNetwork/MyNetwork";
import Jobs from "./pages/jobs/Jobs";
import Messaging from "./pages/messaging/Messaging";
import Notifications from "./pages/notifications/Notifications";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/message" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
