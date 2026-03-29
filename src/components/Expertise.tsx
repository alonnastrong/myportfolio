import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBrain, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Figma",
    "FigJam",
    "Adobe Creative Suite (Illustrator, Photoshop)",
    "Framer",
    "Miro",
    "WAVE Accessibility Tool",
    "axe DevTools",
    "Zeplin",
    "Notion",
    "Jira",
];

const labelsSecond = [
    "Python",
    "NumPy",
    "pandas",
    "scikit-learn",
    "PyTorch",
    "Hugging Face Transformers",
    "Docker",
    "Streamlit",
    "Jupyter Notebooks",
    "Git/GitHub",
    "Linux",
    "OpenCV",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBriefcase} size="3x"/>
                    <h3>UI/UX Design</h3>
                    <p>Through coursework in human–computer interaction and visual design, as well as building full-stack interactive interfaces independently, I design aesthetically pleasing user interfaces and end-to-end user experiences. My process includes user journey mapping, wireframing and prototyping, accessibility best practices (WCAG), and usability testing methodologies such as heuristic evaluation and iterative user testing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Applied ML</h3>
                    <p>Experience applying machine learning techniques to real-world projects, prioritizing functionality, iteration, and deployment. Familiar with core ML concepts such as supervised learning, data preprocessing, and evaluation, and comfortable using models as abstractions within larger systems to build and ship working solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
