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
                    <li><b>Project Manager:</b> Responsible for the entire project. Scope/Goals, and orchestrating the team to meet deadlines. </li>
                    <li><b>Business Analyst:</b> Works with client to define deliverables, understanding the client. They make the promises. </li>
                    <li><b>Scrum Master:</b> Manages the agile process, unblocking the teams and keeping the ball moving forward. </li>
                    <li><b>UX Designer:</b> User Experience Designer: Design User Stories, Characters to visually implement the site. </li>
                    <li><b>Web Developer/Engineer:</b> Build and mantains the website. Translates UX designs.  </li>
                    <li><b>Quality Assurance Tester:</b> Test and find bugs in the app, working with developers to resolve before release. Automated testing. </li>
                    <li><b>DevOps:</b> Managing hardware and deployment of software.</li>
                </ul>
            </Essay>

            <Essay q='S9.  What is considered the right size for an image or video asset?' >
                <ul>
                    <li> Trick question, whatever size will give us the fastest download without compromising quality. </li>
                </ul>
            </Essay>

            <Essay q='S10.  What does it mean for a company to be Agile? What are the pros and cons of being agile?' >
                <ul>
                    <li> Methodology allowing companies to be more flexible and do rapid sprints -- using an iterative process. 
                        Adjust and change requirements as they shift in real time. </li>
                    <li> Pros and Cons: Turnaround and flexibility. More predictable. Requires a consistent team -- managing process -- keeping an eye on sprints and deadlines.</li>
                </ul>
            </Essay>

            <Essay q='S11.  What are testing environments? What is the difference between Local, Dev, QA and Production?' >
                <ul>
                    <li> A test environment is a server that lets you run the test cases you have defined. The test environment includes the server to run the tests on, the hardware, and network configuration. Test environments let you create identical environments every time you need to test your product. Doing so provides accurate feedback and gives the testing engineer confidence in their quality and behavior of the application.  </li>
                    <li> Developers create and debug their initial code on their local computers. Developers work in their local environment and may create “stubs” to simulate other parts of the software. This allows them to experiment without affecting the work of others. </li>
                    <li> The “development” environment is the shared location for all developers to check their code against all the changes. It is also known a integration testing and is common practice to automate these tests after the updates have been made to the repository. </li>
                    <li> The QA environment is where the stable versions of the program are finalized. The bulk of the application testing effort occurs in the QA environment, and the bugs logged refer to issues found in this environment. It is an important step on the path towards the software release readiness, and a separate and controlled environment is critical. </li>
                    <li> The preproduction environment is where the program is tested and pushed to its limits to see when it breaks. The production environment is where the users get to enjoy the finalized released versions of the program. The production environment must run smoothly and have no issues in order to create a good user experience for its front end customers. </li>
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