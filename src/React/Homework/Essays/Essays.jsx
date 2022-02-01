import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
            <li><b>Git:</b> Version control system, manage and edit code on their local system. Free. Merge branches in once approved. </li>
            <li><b>Github:</b> A place for our git repository, remote server - leveraging git. Teamwork, code review, sharing. </li>
            <li><b>Heroku:</b> Cloud based web app server with the ability to deploy apps without having a DevOps degree. </li>

            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
            <li><b>HTML:</b> A mark up language for tag based hierarchy and semantic definition </li>
            <li><b>CSS:</b> The skin (appearance/visual aesthetics), CSS Selectors - to select html elements </li>
            <li><b>Javascript:</b> Programming language for interactive features of the site (behavior) slideshows, scrolling</li>

            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
            <li>SPAs do not have to reload like multi-page (less repetition) </li>
            <li>Faster load times, more efficient. </li>

            </Essay>
            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?' >
            <li><b>Web Designer/UX Designer:</b>Focus on designing the look of the website, mock ups, features for the Web Developer to translate</li>
            <li><b>Front End Developer:</b> Programmer: User interaction (HTML, JS CSS), User interface, colors, responsive - for all devices.</li>
            <li><b>Back End Developer:</b>Programmer: Server side: Data, Database (SQL), (Node.js, Python, PHP, JAVA )</li>
            </Essay>

            <Essay q='S6.  Distinguish the difference between Site Relative, Document Relative, and Absolute Paths.' >
            <p>Answer goes here.</p>
            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;