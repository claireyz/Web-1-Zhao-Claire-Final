import React, { useState } from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { projectsData } from '../projectsData.js';

/* Components ---------------------------*/
import ProjectGallery from './ProjectGallery.jsx';
import ProjectMenu from './ProjectMenu/ProjectMenu.jsx';

const ProjectMain = () => {

    const [chosenCategory, chosenCategoryUpdate] = useState('All');

    console.log('ChosenCategory', chosenCategory);

    return (
        <ProjectMainStyled className='ProjectMain'>
            <ProjectMenu categories={ projectsData.categories } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
            <ProjectGallery services={ projectsData.services } chosenCategory={ chosenCategory } />
        </ProjectMainStyled>
    );
}

export default ProjectMain;

const ProjectMainStyled = styled.div`
    
`;