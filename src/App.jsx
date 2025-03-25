import './App.css'
import Navbar from "./components/Navbar"
import VideoIntro from "./components/Videointro"
import Presentation from "./components/Presentation"
import ProjectsGrid from "./components/ProjectsGrid"


function App() {
  return (
    <div>
      <Navbar />
      <VideoIntro />
      <Presentation />
      <ProjectsGrid />
    </div>
  );
}

export default App;
