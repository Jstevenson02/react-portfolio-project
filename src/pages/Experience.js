import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2010 - Present"
                    iconStyle={{
                        background: '#3e497a',
                        color: '#fff',
                    }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        Self Teaching
                    </h3>
                    <p>
                        From writing Scratch programs with the help of my dad,
                        to pursuing certifications through FreeCodeCamp and
                        Udemy. With the advancement rate of technology I will
                        never stop learning.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2016 - May 2020"
                    iconStyle={{
                        background: '#3e497a',
                        color: '#fff',
                    }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        IT - Southside High school
                    </h3>
                    <p>High School Diploma</p>
                    <p>
                        Worked to handle day to day operations. Work consisted
                        of repairing staff and student computers and tablets;
                        configuring networking settings and remedy wifi
                        connectivity issues, managing the registration and
                        distribution of technology around Southside High.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2020 - December 2020"
                    iconStyle={{
                        background: '#3e497a',
                        color: '#fff',
                    }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        IT - Dog House Computers
                    </h3>
                    <p>
                        Worked on end-user computers and servers. Fixed
                        hardware, software and firmware issues. Meanwhile, I
                        gained experience on Mac OS and Windows 10.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2021 - December 2021"
                    iconStyle={{
                        background: '#3e497a',
                        color: '#fff',
                    }}
                    icon={<WorkIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        IT - Stuller Inc.
                    </h3>
                    <p>
                        Answered internal phone calls, troubleshoot user issues
                        using remote software. Repaired, deployed and designed
                        hardware and software solutions for internal users and
                        departments.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="August 2021 - May 2023"
                    iconStyle={{
                        background: '#3e497a',
                        color: '#fff',
                    }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">
                        South Louisiana Community College
                    </h3>
                    <p>
                        Pursing an Associates degree in Applied Sciences,
                        through the Application Software Development Program at
                        SLCC.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
