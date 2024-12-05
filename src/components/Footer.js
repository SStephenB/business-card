import YouTube from "../images/youtube-icon.svg";
import GitHub from "../images/github-icon.svg";
import FaceBook from "../images/facebook-icon.svg";


export default function Footer() {
    return (
        <div className="footer d-flex mx-auto">
            <a href="https://www.youtube.com/playlist?list=PLk2dAQempTvXYZ1E89KczCvs4btcM19AZ"><img src={YouTube} className="footer-icon"></img></a>
            <a href="https://github.com/SStephenB"><img src={GitHub} className="footer-icon"></img></a>
        </div>
    )
}