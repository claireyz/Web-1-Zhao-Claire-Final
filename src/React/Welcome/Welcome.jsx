import React from 'react';
import styled from 'styled-components';

import Tabbed from './Tabbed/Tabbed.jsx';
import ProjectLightbox from './ProjectLightbox.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>  
            <Tabbed />
            <ProjectLightbox />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;