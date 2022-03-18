import React from 'react';
import styled from 'styled-components';
import Lightbox from 'React/common/Lightbox/Lightbox.jsx';

import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const ProjectLightbox = () => {

    const ActiveContent = () => {
        
        return (
            <>
                <img src='/assets/img/Projects/ananda.png' alt='Ananda.org' />
                <h3>Ananda.org Project</h3>
            </>
        );
    }
    const ModalContent = () => {
        return (
            <>
                <img src='/assets/img/Projects/ananda.png' alt='Ananda.org' />
                <h4>A website user portal redesign.</h4>
            </>

        );
    }

    return (
        <ProjectLightboxStyled className='ProjectLightbox'>
            <h1> Projects in Progress </h1>
            <Lightbox
                title='Ananda.org'
                activeContent={ <ActiveContent /> }
                modalContent={ <ModalContent /> }
            />
        </ProjectLightboxStyled>
    );
}

export default ProjectLightbox;

const ProjectLightboxStyled = styled.div`

    .ActiveArea {
        width: 90%;
        padding: 15px;
        position: relative;

        @media ${defaultMediaQueries.mdUp} {
            width: 33%;
            padding: 5px;
        }

        @media ${defaultMediaQueries.lgUp} {
            width: 25%;
            padding: 5px;
        }
    }

    .ActiveArea {
        img {
            width: 100%;
            padding: 10px; 
            margin: 10px 10px 10px 10px;
        }

        h3 {
            background-color: #c6c6ea;
            width: 100%;
            margin: 0px;
            padding: 10px;

            font-size: 14px;

            position: absolute; 
            left: 15px;
            right: 15px;
            bottom: 15px;

            @media ${defaultMediaQueries.mdUp} {
                font-size: 16px;
            }

            @media ${defaultMediaQueries.lgUp} {
                font-size: 18px;
            }
        }
    }
    
    .Light {
        img {
            width: 100%;
            display: block;
        }
        ul {
            padding: 35px;
            margin: 0px 0px 10px;
        }
    }

`;