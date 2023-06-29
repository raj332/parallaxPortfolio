import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Pofile/Profile";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Portfolio/>
      <Education/>
      <Profile/>
      <Contact/>
    </div>
  );
}

export default App;
