export default function Interests(props) {
    return (
        <div className="interests text-margin">
            <h4>Interests & Skills</h4>
            <p>{props.firstPar}</p>
            <p>{props.secondPar}</p>
            <p>{props.thirdPar}</p>
            <p>{props.fourthPar}</p>
        </div>
    )
}