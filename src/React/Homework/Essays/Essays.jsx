import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
            <li>Git: Version control system, manage and edit code on their local system. Free. Merge branches in once approved. </li>
            <li>Github: A place for our git repository, remote server - leveraging git. Teamwork, code review, sharing. </li>
            <li>Heroku: Cloud based web app server with the ability to deploy apps without having a DevOps degree. </li>

            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
            <li>HTML: A mark up language for tag based hierarchy and semantic definition </li>
            <li>CSS: The skin (appearance/visual aesthetics), CSS Selectors - to select html elements </li>
            <li>Javascript: Programming language for interactive features of the site (behavior) slideshows, scrolling</li>

            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
            <li>SPAs do not have to reload like multi-page (less repetition) </li>
            <li>Faster load times, more efficient. </li>

            </Essay>
            <Essay q='S5. What is the difference between Web Designer, Front End Developer and Back End Developer?' >
            <p>Web Designer, Front End Developer, and Back End Developer are all web development roles. They interact with each other to ensure the delivery of their product (the website or product) is visually aesthetic, user friendly, and functional. </p>

<p>A Web Designer works on the appearance of a web site. They work on the visuals, determine the layout, and sometimes the content that goes into it. Web designers make sure the website is aesthetically pleasing and simple to use and look at. They usually do not write code or help develop the web page such as front or back end developers. But they should have an understanding of basic code and know if a design will work or not. A web designer usually has more graphic design skills such as Photoshop, DreamWeaver, Flash, etc. A web designer can test the usability or reception of their design by wireframing and prototyping their ideas. They then hand it off to the front and back end developers. </p>


<p>The front end is the part of the website the user interacts with directly. The front end involves the user experience and user interface such as the colors, text styles, backgrounds, tables, buttons, graphs, animations, etc. Front End Developers use HTML, CSS, and JavaScript languages to affect the structure, aesthetic, and behavior of the web page. Front End developers focus on responsiveness and performance of the product to make sure it behaves normally across all platform or display sizes. </p>

<p>The back end is the part of the website the user cannot see. A Back End Developer works with creating and maintaining the web’s servers that store and arrange the data. Tasks such as writing APIs, creating libraries, and system components are all part of the back end. Back End Developers use languages such as PHP, C++, Java, Python, Javascript, and Node.js. </p>

            </Essay>
        </EssaysStyled>
    )
}

export default Essays;

const EssaysStyled = styled.div`
    background-color: white;
    padding: 20px;
`;