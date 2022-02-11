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
                    <li>For optimal website performance, images should be as large as needed to fill their “containers”, based on your page layout. 
                        For example, slideshow images are usually wider; blog images are medium-sized (at a width equal to the page width minus the sidebar); thumbnails are smaller, etc.
                        It’s crucial to determine image dimensions first, to know how wide your content area is on your site. You can use a “page ruler” browser extension that helps you take the measurements, or if you have experience, use the developer tools built into your web browser: right-click on any page element and click “Inspect”. 
                    </li>
                    <li>
                        So for any images that span the entire width of the browser, images should be 2560 pixels in width, and any height you prefer.
                        Gallery images ( images that open up in lightbox view): since these images will open up in a full-screen view, I recommend sizing them to at least 1500 pixels (on the longest edge).
                        Vertical/portrait images can be even smaller, with a maximum height of 1200px (like 800×1200 pixels for a 2:3 vertical image, or 900×1200 pixels for a 3:4 vertical image)..
                        For thumbnail and static images, you would determine the image dimensions first by the content area it is on the site. Knowing that it gets displayed at 260×174 pixels in width based on your page layout, you’d upload images at twice that size: 520×348 pixels.
                    </li>
                    <li>
                        We export all videos in HD sizes of 720 and/or 1080. To fill the entire screen, the image should be as close to these dimensions as possible: 1280×720 (for 720) or 1920×1080 (for 1080).
                    </li>
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