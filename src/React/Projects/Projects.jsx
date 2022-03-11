import React, { useState } from 'react';
import styled from 'styled-components';


/* Scripts ---------------------------*/
import { projectsData } from './projectsData.js';

/* Components ---------------------------*/
import ServiceGallery from './ServiceGallery/ServiceGallery.jsx';
import ServiceMenu from './ServiceMenu/ServiceMenu.jsx';


const Projects = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');

    console.log('ChosenCategory', chosenCategory);

    return (
        <ProjectsStyled className='Projects'>
            <h1>Projects</h1>
            <ServiceMenu categories={ projectsData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
            <ServiceGallery services={ projectsData.services } chosenCategory={ chosenCategory } />
        </ProjectsStyled>
    );
}

export default Projects;

const ProjectsStyled = styled.div`
    
`;