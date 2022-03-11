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
                    <li> A testing environment is: Space developers deploy their work for testing their work. </li>
                    <li> <b>Local:</b> Developer's Machine - to build and test your own code on your computer. </li>
                    <li> <b>Dev:</b> Dev Testing Server: Dev Paired Code reviews. </li>
                    <li> <b>QA:</b> Quality Assurance Testing Server for QA team. </li>
                    <li> <b>UAT:</b> User Acceptance Test Server for Customer to test. </li>
                    <li> <b>Production:</b> Live website for users to access - public domain. </li>
                </ul>
            </Essay>

            <Essay q='S12. Function vs Form: When are web images considered part of the content (HTML) as opposed to part of the appearance (CSS)?' >
                <ul>
                    <li> Printable is good in HTML, CSS by default is off - as background image. </li>
                    <li> HTML if image is related to content. </li>
                </ul>
            </Essay>

            <Essay q='S13. What is the difference between IDs, Classes and Tags? How does Specificity play a role in the selection of HTML elements (both in CSS and JS)?' >
                <ul>
                    <li><b>ID:</b> Label: Uses pound sign (#) in CSS, singular - should only label one item on a page.</li>
                    <li><b> Classes:</b> Label: We use the period (.) in CSS and JS, defines a series; multiple HTML elements. </li>
                    <li><b>Tag:</b> Any HTML tag in the HTML language. </li>
                    <li><b> Specificity:</b> Determines which selector and rule applies to an element. </li>
                </ul>
            </Essay>

            <Essay q='S14. What is a CSS Preprocessor? What are some examples? In React, what are styled components? How do Styled Components violate separation of concerns?' >
                <ul>
                    <li><b>CSS Preprocessor:</b> Turns CSS into Programming language to parsing variables and functions - etc. </li>
                    <li><b> What are some examples?:</b> SASS, LESS, and Stylus. </li>
                    <li> <b> Styled-components in React:</b> React Library - can add styles directly in components. The evolution of CS Preprocessors. Backticks - template string. </li>
                    <li> <b> How do Styled Components violate separation of concerns?</b> Separation of concerns means: CSS for Appearance, JS for Behavior, and HTML for content. </li>
                </ul>
            </Essay>

            <Essay q='S15. Final Project Essay:' >
                <ul>
                    <li> I plan on designing a personal portfolio as my final project. I will be the client and I want my focus to be showcasing my User Experience Design projects. I am currently enrolled in the UCLA User Experience Design professional certificate program. I am halfway done with the program and I would like to get started with developing my portfolio. I understand that my main pages will be a home/welcome page, a projects page, a resume page, and possibly a contact page. </li>
                    <li> The purpose of my portfolio is to showcase my work. I want it to have those Lightbox and gallery features. I would like to display my projects in an image gallery style that users would click into and bring them to a new page. It would be like Tumblr or Pinterest style where it’s big square hero image and a short description. I would like my page to be clean, simple, modern, and have some splashes of personal color and style. </li>
                    <li> I would like to demonstrate how I am different from other designers and show how I can start and finish things from scratch. I am hoping that by building my own portfolio website, it can become another one of my own personal projects that I can talk about with recruiters and interested professionals.</li>
                </ul>
            </Essay>

            <Essay q='S16. What is the difference between Web Hosts, Domains, and FTP?' >
                <ul>
                    <li> <b> Web Hosts:</b> Web hosting is a service that gives you a space to exist and be found by other users on the web. This place is on a server and you store all of your website files there. Without this hosting space, your website is not visible or accessible to other users. You can get web hosting services through a service provider. </li>
                    <li> <b> Domains:</b> Commonly known as your URL, is a unique website address that can be searched for and found on the internet. You have to pay for your own unique domain, usually at an annual rate or for multiple years. </li>
                    <li> <b> FTP:</b> A File Transfer Protocol is a tool that lets web developers download and upload your website's files to your hosting account. An FTP is accessed by a username and password which are created by your web hosting provider. </li>
                </ul>
            </Essay>

            <Essay q='S17. What is a Package Manager (e.g. NPM, Composer)? How does it play a role in software development?' >
                <ul>
                    <li> <b> Package Manager:</b> A package manager keeps track of what software is installed on your computer. It lets you install new software, upgrade software to newer versions, or remove software that you previously installed. Package managers deal with packages: collections of files that are bundled together and can be installed and removed as a group. Some package managers are dependent on you installing other packages first in order to work. </li>
                    <li> <b> NPM:</b> NPM is the world’s largest registry for free open source node package managers. Software developers use NPM to share and upload packages for free. </li>
                    <li> <b> Composer:</b> Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. Composer challenges PHP’s traditional single-script server usage by allowing package imports. Furthermore, Composer allows imports to be used traditionally from a server endpoint or simply from running scripts via the command line interchangeably. </li>
                    <li> <b> Role in software development:</b> A package manager is a programming language’s tool to create project environments and easily import external dependencies. You don’t have to reinvent the wheel and are able to make the most of the tools at your disposal. </li>
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