import React from "react";
import myPhoto from "../../assets/About/me.PNG";

export default function About() {
    return (
        <div className="port-section">
                <div className="about">
                    <div className="about-information">
                        <img src={myPhoto} alt="me" className='about-photo' />
                        <div className="about-description">
                            <p>Before becoming a software engineer, I achieved a Bachelor’s and Master’s degrees in Nursing and Auditing. Realizing I had an interest in programming as well, I joined Flatiron school software engineering bootcamp. There, I worked on team projects and discovered the opportunity to create something new and solve problems was the real experience I loved. I am looking forward to exploring front-end roles so that I can help build web applications that can give people better experiences solving their own problems.</p>
                            <p>
                                At this time, I am open to any junior, internship, or apprenticeship opportunities in frontend developerment and software engineering.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}