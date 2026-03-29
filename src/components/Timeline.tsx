import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sophomore Year (Present)"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fintech Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Greenwood Project – Synchronous</h4>
            <p>
              Selected for a highly competitive year-long FinTech Academy with weekly engagements to enhance understanding of financial technology & digital transformation in financial services
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Summer 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine Learning Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Auburn University CASE REU – Auburn, AL</h4>
            <p>
              Contributed to research paper titled "Humanoid Robot Hazard Analysis & Risk Assessment Using Agentic AI," proposing an AI-driven framework leveraging vision-language models (VLMs) for physical hazard detection in robotic CAD designs, mapping safety insights to ISO standards
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Freshman Year"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SEO First-Year Developer Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Synchronous</h4>
            <p>
              Completed 50+ hours of live instruction in software engineering best practices—including debugging, testing, Git/GitHub source control, deployment & monitoring
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Freshman Year"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI4ALL IGNITE Fellow</h3>
            <h4 className="vertical-timeline-element-subtitle">Synchronous</h4>
            <p>
              Completed 80+ hours of project-based instruction, gaining hands-on experience in data preprocessing, supervised learning, model evaluation, & deploying ML systems, culminating in capstone project
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
