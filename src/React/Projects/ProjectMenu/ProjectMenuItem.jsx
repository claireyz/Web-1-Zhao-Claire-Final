import React from 'react';
import styled from 'styled-components';

const ProjectMenuItem = ({category, chosenCategory, chosenCategoryUpdate}) => {

    const clickHandler = () => {
        chosenCategoryUpdate(category);
    }

    const theClassName = (chosenCategory === category) ? 'ProjectMenuItem active':'ProjectMenuItem';


    return (
        <ProjectMenuItemStyled className={ theClassName } onClick={ clickHandler }>
            { category }
        </ProjectMenuItemStyled>
    );
}

export default ProjectMenuItem;

const ProjectMenuItemStyled = styled.div`
    width: 150px;
    font-size: 18px;
    border-bottom: solid 5px #63638f;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c6c6ea;
    }

    &.active {
        background-color: #63638f;
        color: white;
    }
`;