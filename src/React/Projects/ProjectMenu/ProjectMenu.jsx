import React from 'react';
import styled from 'styled-components';

import ProjectMenuItem from './ProjectMenuItem.jsx';

const ProjectMenu = ({categories, chosenCategory, chosenCategoryUpdate}) => {

    return (
        <ProjectMenuStyled className='ProjectMenu'>
            {
                categories.map((category, idx) => { 
                    return <ProjectMenuItem key={ idx } category={ category } chosenCategory={ chosenCategory } chosenCategoryUpdate={ chosenCategoryUpdate } />
                })
            }
        </ProjectMenuStyled>
    );
}

export default ProjectMenu;

const ProjectMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;