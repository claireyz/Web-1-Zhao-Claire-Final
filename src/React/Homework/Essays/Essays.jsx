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
                    <li><b>JPG:</b>JPGs are optimized for photographs because they are lossy raster files. This means they lose a small amount of information every time the JPG is saved. However, reducing the file size also results in reducing the image quality.  JPGs compress color so they are suitable for photographs and print.  </li>
                    <li><b>GIF:</b>GIFs are in a bitmap format which supports up to 8 bits per pixel. This limits its color palette to 256px which is not optimized for photographs. GIFs are used most commonly in animated memes and not good for designs.  </li>
                    <li><b>PNG:</b> PNGs are raster graphics that are designed to use on the web. It is the most largely used image compression format on the internet and is not optimized for printing professional graphic images. PNGs are good with line art images, icons, and graphics but can result in large file sizes. PNGs also have alpha transparency which means that each pixel has its own opacity level. PNGs come in 2 types: PNG-8 (the file has only 8 bits/pixel) and PNG-24 (24 bits/pixel). </li>
                    <li><b>SVG:</b>SVGs are vector graphics that support animation. Their behaviors are defined in XML files for they can be searched, indexed, scripted, and compressed. SVGs are food for logos and line art because they’re not made from pixels and can be resized without losing quality. SVGs are the best in creating icons, line art, and high resolution art. </li>
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