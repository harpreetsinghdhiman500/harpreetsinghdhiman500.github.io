import { Component } from "react";
import profile from "../profile.json";

export default class About extends Component {
    render() {
        const calculateAge = function calculateAge(birthday){
            //milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
            let today = new Date(),
                //birthay has 'Dec 25 1998'
                dob = new Date(birthday),
                //difference in milliseconds
                diff = today.getTime() - dob.getTime(),
                //convert milliseconds into years
                years = Math.floor(diff / 31556736000),
                //1 day has 86400000 milliseconds
                days_diff= Math.floor((diff % 31556736000) / 86400000),
                //1 month has 30.4167 days
                months = Math.floor(days_diff / 30.4167),
                days = Math.floor(days_diff % 30.4167);
               
               //console.log(`${years} years ${months} months ${days} days`);
               return `${years}`;
        }

        return (
            <div className="container">
                <div className="resume-container">
                    <div className="shadow-1-strong bg-white my-5 p-5" id="about">
                        <div className="about-section">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="h2 fw-light mb-4">About Me</h2>
                                    <div dangerouslySetInnerHTML={{__html: profile.bio}} />
                                </div>
                                <div className="col-md-5 offset-lg-1">
                                    <div className="row mt-2">
                                        <h2 className="h2 fw-light mb-4">&nbsp;</h2>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="far fa-calendar-alt pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Age</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">
                                                {calculateAge(profile.dob)}
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="far fa-envelope pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Email</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.email}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fab fa-skype pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Skype</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.skype}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-phone pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Phone</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.mobile}</div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="pb-2 fw-bolder"><i className="fas fa-map-marker-alt pe-2 text-muted"
                                                style={{ width: "24px", opacity: "0.85" }}></i> Address</div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="pb-2">{profile.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}