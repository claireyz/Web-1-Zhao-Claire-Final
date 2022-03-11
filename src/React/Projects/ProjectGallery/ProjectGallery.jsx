import React from 'react';
import styled from 'styled-components';

import ProjectGalleryItem from './ProjectGalleryItem.jsx';

const ProjectGallery = ({services, chosenCategory}) => {

    return (
        <ProjectGalleryStyled className='ProjectGallery'>
            {
                services
                .filter((service) => {
                    return (chosenCategory === 'All' || service.category === chosenCategory);
                })
                .map((service, idx) => {
                    return <ProjectGalleryItem key ={ idx } service={ service}/>
                })
            }
        </ProjectGalleryStyled>
    );
}

export default ProjectGallery;

const ProjectGalleryStyled = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;