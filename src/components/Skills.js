import { Component } from "react";
import profile from "../profile.json"

export default class Skills extends Component {
    render() {
        const skill = profile.skills.map((value, key) => {
            return (
                <div className="col-md-6" key={key.toString()}>
                    <div className="mb-3">
                        <span className="fw-bolder">{value.name}</span>
                        <div className="progress my-2 rounded" style={{height: "20px"}}>
                            <div className="progress-bar bg-info" role="progressbar" style={{width: `${value.precentage}%`}} aria-valuenow={`${value.precentage}`} aria-valuemin="0" aria-valuemax="100">{value.level}</div>
                        </div>
                    </div>
                </div>
            )
        }) 
        return (
            <div className="container">
                <div className="resume-container">
                    <div className="shadow-1-strong bg-white my-5 p-5" id="skills">
                        <div className="skills-section">
                            <h2 className="h2 fw-light mb-4">Professional Skills</h2>
                            <div className="row">
                                {skill}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}