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
                    <li><b>Site Relative Path:</b> A relative URL only includes the path. The path is everything that comes after the domain, including the directory and slug. If you use a site relative path URL, the server is assuming that the URL uses the same protocol, subdomain and domain as the page it’s on. It is recommended that when you link to a page of your own website to use the short absolute path or use the site relative path. This speeds up page load time because you have told the web server that the path is on the same server. Using the short path also guarantees no broken links in case you ever change the domain name of your site. </li>
                    <li><b>Document Relative Path:</b>Document relative paths are used for local links in most websites. It is most useful when the current document and linked document are within the same folder. The document relative path is like a site relative path because it omits the domain. The URL only provides the portion of the path that differs. 
                    <br> Each forward slash (/) represents moving down one level in the folder hierarchy. </br> 
                    <br>Each ../ represents moving up one level the folder hierarchy.</br></li>
                    <li><b>Absolute Path:</b>An absolute URL is the full URL. This includes: protocol (http/https), the optional subdomain (e.g. www), domain (example.com), and path (which includes the directory and slug). Absolute URLs provide all the available information to find the location of a page. When you link to another page from another website you can only use the full absolute path URL. </li>
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