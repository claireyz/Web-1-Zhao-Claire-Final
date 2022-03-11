import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow/Slideshow.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';
import Projects from './Projects/Projects.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>  
            <Slideshow />
            <Tabbed />
            <Projects />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;