import React from "react";
import alonnaPoster from '../assets/images/AlonnaPoster.png';
import p5js from '../assets/images/p5js.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div style={{maxWidth: "400px", margin: "0 auto"}}>
                    <div style={{position: "relative", paddingBottom: "62.5%", height: 0}}>
                        <iframe
                            src="https://www.loom.com/embed/ad263eee8c864da4a1237650ace992e0"
                            frameBorder={0}
                            allowFullScreen
                            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                        />
                    </div>
                </div>
                <h2>Coconut Bonk</h2>
                <p>In this first-person game, you find yourself stranded on a deserted island, relying on coconuts as your primary resource to fend off two relentless enemies. Beware—being knocked into the beach water results in life loss!</p>
            </div>
            <div className="project">
                <div style={{maxWidth: "150px", margin: "0 auto"}}>
                    <div style={{position: "relative", paddingBottom: "216.48%", height: 0}}>
                        <iframe
                            src="https://www.loom.com/embed/a9b68025b0194f14b239b6fcf79f53ef"
                            frameBorder={0}
                            allowFullScreen
                            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                        />
                    </div>
                </div>
                <h2>EcoEats</h2>
                <p>An iOS app that utilizes Xcode's CoreML to scan food items placed in front of the camera and provides personalized recipe recommendations based on the identified ingredients. For the KWK X Deloitte Alumni Challenge.</p>
            </div>
            <div className="project">
                <img src={alonnaPoster} className="zoom" alt="Auburn CASE REU Research Poster" width="100%"/>
                <h2>Humanoid Robot Hazard Analysis & Risk Assessment Using Agentic AI</h2>
                <p>Contributed to a research paper titled "Humanoid Robot Hazard Analysis & Risk Assessment Using Agentic AI." Conducted an extensive literature review to inform backend architecture design, with a focus on recent advances in transformer models, computer vision, and image segmentation to enhance the system's hazard detection capabilities.</p>
            </div>
            <div className="project">
                <div style={{maxWidth: "400px", margin: "0 auto"}}>
                    <div style={{position: "relative", paddingBottom: "62.5%", height: 0}}>
                        <iframe
                            src="https://www.loom.com/embed/92159c8d6a434ff5897546a38eb180aa"
                            frameBorder={0}
                            allowFullScreen
                            style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                        />
                    </div>
                </div>
                <h2>NUConnect</h2>
                <p>NUConnect is a map-based campus engagement app that helps returning Northeastern students rediscover Boston by finding nearby events, viewing details, saving and managing plans, and socially coordinating through invitations, attendee lists, and in-app messaging.</p>
            </div>
            <div className="project">
                <img src={p5js} className="zoom" alt="P5JS Self Portrait" width="100%"/>
                <h2>P5JS Self Portrait</h2>
                <p>This project is a generative self-portrait created using p5.js for my Prototyping With Code course. The composition is built entirely from code using custom shapes, Bézier curves, and ellipses to form facial features, hair textures, and clothing. The portrait explores contrast and duality through asymmetrical hair styling and a vertical dividing line that splits the canvas. Repeating floral forms and soft pastel colors frame the figure, adding balance and visual rhythm. Typography is incorporated directly into the canvas to reinforce the theme of personal identity.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
