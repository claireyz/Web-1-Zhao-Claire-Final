import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { defaultMediaQueries } from 'React/common/useMediaQuery.js';

const ProjectGalleryItem = ({service}) => {

    return (
        <ProjectGalleryItemStyled className='ProjectGalleryItem'>
            <NavLink to={ `/projects/P${service.id}` }>
                <img src={ service.image } alt={ service.title } />
                <h3>{ service.title } : { service.category }</h3>
            </NavLink>
        </ProjectGalleryItemStyled>
    );
}

export default ProjectGalleryItem;

const ProjectGalleryItemStyled = styled.div`
    width: 500%;
    padding: 20px;
    position: relative;

    outline: solid 1px black;

    @media ${defaultMediaQueries.mdUp} {
        width: 33%;
        padding: 55px;
        margin: 40px 40px 40px 40px;
    }

    @media ${defaultMediaQueries.lgUp} {
        width: 25%;
        padding: 5px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    img {
        width: 100%;
        padding: 10px; 
        margin: 10px 10px 10px 0px;
    
    }

    h3 {
        background-color: #c6c6ea;
        margin: 0px;
        padding: 10px;

        font-size: 14px;

        position: absolute; 
        left: 25px;
        right: 25px;
        bottom: 15px;

        @media ${defaultMediaQueries.mdUp} {
            font-size: 16px;
        }

        @media ${defaultMediaQueries.lgUp} {
            font-size: 18px;
        }
    }
    

`;