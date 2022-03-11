import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { projectsData } from './projectsData.js';

/* Components ---------------------------*/
import Project from './Project.jsx';

const Projects = () => {

    return (
        <ProjectsStyled className='Projects'>
            <h3>Projects</h3> 
            <div className="wrapper">
            {
                projectsData.map((project, idx) => {
                    return <Project key={ idx } project={ project } />
                })
            }
            </div>
        </ProjectsStyled>
    );
}

export default Projects;

const ProjectsStyled = styled.div`
    background-color: teal;
    padding: 20px;
    margin: 20px 0px;

    .wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;