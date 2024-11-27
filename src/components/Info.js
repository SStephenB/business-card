import GradPhoto from "../images/grad_photo.jpg"
import Mail from "../images/mail-icon.svg"

export default function Info() {
    return (
        <div>
            <div className="headings">
                <div className="img-contain"><img src={GradPhoto}></img></div>
                <h1 className="center-text">Stephen Bassilios</h1>
                <h2 className="center-text">3A Systems Design Engineering</h2>
                <h3 className="center-text">[Website Link here]</h3>
            </div>
            <div className="d-flex buttons">
                <button className="email"><div className="btn-icon-text"><img src={Mail} className="icon"></img><h5>Email</h5></div></button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}