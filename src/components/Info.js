import GradPhoto from "../images/grad_photo.jpg"
import Mail from "../images/mail-icon.svg"
import Linkedin from "../images/linkedin-icon.svg"

export default function Info() {
    return (
        <div className="">
            <div className="headings">
                <div className="img-contain"><img src={GradPhoto}></img></div>
                <h1 className="center-text">Stephen Bassilios</h1>
                <h2 className="center-text">3A Systems Design Engineering</h2>
                <h3 className="center-text">Frontend Developer</h3>
            </div>
            <div className="d-flex buttons">
                <a href="mailto:sbassili@uwaterloo.ca" target="_blank" className="email"><div className="btn-icon-text"><img src={Mail} className="icon"></img><h5>Email</h5></div></a>
                <a href="www.linkedin.com/in/stephenbassilios" target="_blank" className="linkedin"><div className="btn-icon-text"><img src={Linkedin} className="icon"></img><h5>LinkedIn</h5></div></a>
            </div>
        </div>
    )
}