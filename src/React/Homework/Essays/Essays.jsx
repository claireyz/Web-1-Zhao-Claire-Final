import React from 'react';
import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <Essay q='S2. What is the difference between Git, Github and Heroku?' >
            <p>Git is a free open source version control system that is known for its ease in collaboration, speed, and data integrity. Git tracks the changes you make in any file so that you have a record of what you did. It helps developers maintain version control because it lets them refer back to older files in case a new update creates problems. Git allows for easy collaboration because multiple people at once can be on the same file and make their respective changes and merge into one source. Git runs locally so all of your files and history are saved to your computer. You can access Git by using the Terminal on your computer, or by installing desktop apps such as Visual Studio. </p>
<p>A Git repository hosts all of your local project files and revision history. You can take any regular folder on your computer and tell git to turn it into a repository and it will create a .git folder.
In order to record our changes, we need to stage and commit the changes by telling Git. “Staging” means choosing the files we want to commit using the “add” command. “Commit” means you have told Git to track your changes. </p>

<p>GitHub is an online hosting provider that lets you upload and maintain your Git project remotely. It is used in software development and version control by using Git. You can upload your own changes on GitHub and download feedback from others. GitHub lets you collaborate with other developers more easily. After you set up your remote repository, you “push” your changes (files and track history) to GitHub, and you can “pull” changes back to your local repository (download the changes another user made to your file back onto your computer). This way, GitHub allows developers to store and manage their code as well as track and accept changes to their code from other parties. </p>

<p>Heroku is a cloud platform that allows apps to be easily developed and deployed. Developers like to use Heroku because it lets them write in a variety of code languages and has integrated data services to use. Some features that sets Heroku apart from its competitors are for its polymorphism and scalability. Scalability refers to being able to increase the number of dynos (application containers) or changing the type of dyno. Once you create a project in Heroku, your project is bound to a repository in GitHub. The integration of Heroku with GitHub allows you to automatically deploy pushes to your app with the most up to date version of code. </p>

            </Essay>
            <Essay q='S3. Explain the difference between HTML, CSS and JS.' >
            <p>HTML is the site framework that the code lives upon while CSS and Javascript enhance it. HTML stands for HyperText Markup Language and is different from other programming languages because it uses tags (“elements”) to identify content. HTML sets up elements such as when something is a heading, a paragraph, body text, an image, a new line, create links, tables, etc. </p>

<p>Using CSS means creating the aesthetics of the site such as controlling the presentation, layout, and formatting. CSS stands for Cascading Style Sheets and commands how the HTML content should appear on the front end of the website. Using CSS is like using rules that can be assigned to different properties of HTML elements to affect the content specifically, individually, or globally. The term “cascading” refers to overriding your default style sheet set up in your browser. Every browser has a default style sheet and they can be overrode by another designer applying their specific CSS. If you visited a site with no specific CSS, your browser’s default style sheet would display the site as it is. Visiting a page like Twitter, your browser instantly changes to a different colored background, different size font, font style, etc. This is because Twitter has a specific CSS that overrides your browser’s default style sheet. </p>

<p>JavaScript creates the interaction and behaviors between elements of the site. Javascript is a programming language that can behave differently in response to a user’s actions on a site. For example, when you hover over a Youtube video, the video will automatically start playing a bit to give you an idea of the video. This hovering interaction and video autoplay is done through Javascript. Call to action boxes that pop up on your screen, animations, security and saving information are all actions you can create through Javascript. </p>

            </Essay>
            <Essay q='S4. What are Single Page Apps (SPAs)? How do they differ from traditional multi-page Web Sites?' >
            <p>A single page application (SPA) is one page that has a lot of information. Most information stays the same and only some of the content needs to be changed or updated at a time. One example of a single page app is your email. As you scroll through your email inbox, the navigation and placement of things all stay the same. The only thing that is changing is how far down or deep into your inbox you go. The SPA only sends the necessary information from what you click and your browser will only re-render that specific information. Many use SPAs now because of its user friendly functionalities such as: fancy UI, Javascript development, and API. </p>

<p>This is different from traditional multi-page web sites where the server re-renders the whole page to present the change. Using SPAs are more cost efficient and quicker for users to access the content they’re looking for because it reduces the amount of information the server has to render. By transferring the page rendering from the server to the user, the web page can be dynamically rewritten instead of having to reload the entire page. SPAs are good to use in responsive design because it improves app performance and consistency, and reduces costs and development time. </p>

<p>Traditional multi-page web pages are used when the user’s requirements are simple, read-only, or need to function in browsers without Javascript. You would build a traditional multi-page web site if there is little user side behavior with the site. Using a search engine is simple for the user and requires little interaction on their end. They type in their search and the browser displays their results. </p>

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