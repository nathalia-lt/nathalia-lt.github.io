import React from "react";
import myPhoto from "../../assets/About/me.PNG";

export default function About() {
    return (
        <div className="port-section">
                <div className="about">
                    <div className="about-information">
                        <img src={myPhoto} alt="me" className='about-photo' />
                        <div className="about-description">
                            <p>
                                At this time, I am open to any internship or apprenticeship opportunities in software engineering.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}