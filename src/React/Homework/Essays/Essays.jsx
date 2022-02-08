import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
                <ul>
                    <li><b>Git:</b> Version control system, manage and edit code on their local system. Free. Merge branches in once approved. </li>
                    <li><b>Github:</b> A place for our git repository, remote server - leveraging git. Teamwork, code review, sharing. </li>
                    <li><b>Heroku:</b> Cloud based web app server with the ability to deploy apps without having a DevOps degree. </li>
                </ul>
            </Essay>

            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
                <ul>
                    <li><b>HTML:</b> A mark up language for tag based hierarchy and semantic definition </li>
                    <li><b>CSS:</b> The skin (appearance/visual aesthetics), CSS Selectors - to select html elements </li>
                    <li><b>Javascript:</b> Programming language for interactive features of the site (behavior) slideshows, scrolling</li>
                </ul>
            </Essay>

            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
                <ul>
                    <li>SPAs do not have to reload like multi-page (less repetition) </li>
                    <li>Faster load times, more efficient. </li>
                </ul>
            </Essay>

            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?' >
                <ul>
                    <li><b>Web Designer/UX Designer:</b> Focus on designing the look of the website, mock ups, features for the Web Developer to translate</li>
                    <li><b>Front End Developer:</b> Programmer: User interaction (HTML, JS CSS), User interface, colors, responsive - for all devices.</li>
                    <li><b>Back End Developer:</b> Programmer: Server side: Data, Database (SQL), (Node.js, Python, PHP, JAVA )</li>
                </ul>
            </Essay>

            <Essay q='S6.  Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.' >
                <ul>
                    <li><b>Site Relative Path:</b> URL relates from the rest of the root of a website </li>
                    <li><b>Document Relative Path:</b> Link resources relative to the document writing the link </li>
                    <li><b>Absolute Path:</b> Fully resolved URL to a resource </li>
                </ul>
            </Essay>

            <Essay q='S7.  What is the difference between jpg, gif, png and SVG images?' >
                <ul>
                    <li><b>JPG:</b> Joint Photographic Experts Group: Lossy compression, Millions of colors, can make for small files at the expense of quality.  </li>
                    <li><b>GIF:</b> Indexed Color: Logos, graphics - Graphic Interface Format: 256 total colors, animation is supported, transparency.  </li>
                    <li><b>PNG:</b> Millions of Colors and Indexed Color: Lossless Compression, Portable Network Graphics: Transparency. </li>
                    <li><b>SVG:</b> Scalable Vector Graphics: Animation, lighter files due to vector, can also add images if necessary, without images scale without loss of quality. </li>
                </ul>
            </Essay>

            <Essay q='S8.  Define the following roles: Project Manager, Business Analyst, Scrum Master, UX designer, Web Developer/Engineer, Quality Assurance Tester, and Dev Ops.' >
                <ul>
                    <li><b>Project Manager:</b> A professional who organizes, plans, and executes projects while working within restraints like budgets and schedules. Project managers are in charge of leading teams, defining goals, communicating with stakeholders, and seeing a project through to its completion. The project manager is responsible for the success or failure of the project. </li>
                    <li><b>Business Analyst:</b> Business analysts use data to form business insights and recommend changes in businesses and other organizations. Business analysts can identify issues in virtually any part of an organization, including IT processes, organizational structures, or staff development. </li>
                    <li><b>Scrum Master:</b> A professional who leads a team through a project using Agile project management techniques. Scrum is an Agile framework for developing complex projects, most often software. The Agile project management methodology uses short development cycles, called sprints, that result in the continuous improvement of a product or service. Scrum master focuses on the team, taking steps to ensure the team and individual team members achieve success.</li>
                    <li><b>UX Designer:</b> The UX designer makes a product or service usable, enjoyable, and accessible. While many companies design user experiences, the term is most often associated with digital design for websites and apps. UX Designers usually conduct user research, understand the company’s brands and needs, understand the user and their needs, design, conduct user testing, and deliver it to the developers to complete. </li>
                    <li><b>Web Developer/Engineer:</b> A web developer’s job is to create websites. While their primary role is to ensure the website is visually appealing and easy to navigate, many web developers are also responsible for the website’s performance and capacity. Web developers usually fall under one of three categories: back-end developers, front-end developers, and full-stack developers. Web developer responsibilities include: Writing and reviewing code for sites, typically HTML, XML, or JavaScript, testing web applications, troubleshooting problems with performance or user experience, etc. </li>
                    <li><b>Quality Assurance Tester:</b> QA Testers conduct software testing to resolve issues and ensure standards and guidelines are being adhered to. QA testers try to break software by performing manual or automated tests that take the website or software through every scenario to find where the website malfunctions.They record defect details, conduct database testing, create automated test plans, and develop quality assurance reports. Besides that, they also work with developers in designing better software processes. </li>
                    <li><b>DevOps:</b> It is a combination of the terms development and operations and means a collaborative approach to the tasks performed by a company's application development and IT operations teams. DevOps describes the adoption of iterative software development, automation, and programmable infrastructure deployment and maintenance. They go through these steps: plan, code, build, test, release, deploy, operate, monitor and -- through feedback -- plan, which resets the loop. Ideally, DevOps means that an IT team writes software that perfectly meets user requirements, deploys without any wasted time and runs optimally on the first try. Organizations use a combination of culture and technology to pursue this goal.</li>
                </ul>
            </Essay>

            <Essay q='S9.  What is considered the right size for an image or video asset?' >
                <ul>
                    <li><b>Answer goes here</b> </li>
                </ul>
            </Essay>

        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;