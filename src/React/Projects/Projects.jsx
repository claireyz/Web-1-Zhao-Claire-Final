import React, { useState } from 'react';
import styled from 'styled-components';


/* Scripts ---------------------------*/
import { projectsData } from './projectsData.js';

/* Components ---------------------------*/
import ProjectGallery from './ProjectGallery/ProjectGallery.jsx';
import ProjectMenu from './ProjectMenu/ProjectMenu.jsx';


const Projects = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');

    console.log('ChosenCategory', chosenCategory);

    return (
        <ProjectsStyled className='Projects'>
            <h1>Projects</h1>
            <ProjectMenu categories={ projectsData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
            <ProjectGallery services={ projectsData.services } chosenCategory={ chosenCategory } />
        </ProjectsStyled>
    );
}

export default Projects;

const ProjectsStyled = styled.div`
    
`;