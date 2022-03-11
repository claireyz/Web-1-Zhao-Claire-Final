import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

/* Components ---------------------------*/
import Lightbox from 'React/common/Lightbox/Lightbox.jsx';

const Project = ({project}) => {

    const ActiveContent = () => {
        return (
            <>
                <img src={ project.image } alt={ project.name } />
                <h3>{ project.name }</h3>
            </>
        )
    }

    const ModalContent = () => {
        return <img src={ project.image } alt={ project.name } />;
    }

    return (
        <ProjectStyled className='Project'>
            <Lightbox
                title={ project.name }
                activeContent={ <ActiveContent /> }
                modalContent={ <ModalContent /> }
            />
        </ProjectStyled>
    );
}

export default Project;

const ProjectStyled = styled.div`
    width: 45%;
    margin: 5px;

    @media ${defaultMediaQueries.mdUp} {
        width: 30%;
        margin: 15px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 20%;
        margin: 20px;
    }

    img{
        width: 100%;
        display: block;
    }

    h3 {
        color: white;
        background-color: maroon;
        margin: 0px;
        padding: 5px 10px;
    }
`;