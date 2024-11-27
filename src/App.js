import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";
import './index.css'

export default function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <br></br> {/* Remove this eventually and replace with margin */}
      <Interests />
      <Footer />
      <div className="test">

      </div>
    </div>
  );
}