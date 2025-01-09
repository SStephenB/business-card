import Info from "./components/Info.js"
import About from "./components/About.js"
import Interests from "./components/Interests.js";
import Footer from "./components/Footer.js";
import './index.css'

export default function App() {
  return (
    <div className="card">
      <Info />
      <About
        about="I am a driven Systems Design Engineering student at the University of Waterloo with a passion for programming and web development. I thrive on creating innovative solutions that address real-world challenges and I am committed to continually enhancing my skills to tackle complex problems."
      />
      <br></br>
      <Interests
        firstPar="🖥️ 4 years of programming experience in C++, JavaScript, Python, Java, HTML, & CSS, with a focus on web development."
        secondPar="🎥 5 years of video editing experience in DaVinci Resolve, Sony Vegas Pro, Adobe Premiere Pro & After Effects."
        thirdPar="📷 5 years of photo editing experience in Adobe Photoshop."
        fourthPar="🧩 I enjoy the challenge of problem solving and exploring solutions. Collaborated with teams in various settings to tackle problems."
      />
      <Footer />
      <div className="test">

      </div>
    </div>
  );
}