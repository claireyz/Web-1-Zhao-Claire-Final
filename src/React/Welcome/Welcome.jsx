import React from 'react';
import styled from 'styled-components';

import Tabbed from './Tabbed/Tabbed.jsx';

const Welcome = () => {

    return (
        <WelcomeStyled className='Welcome'>  
            <Tabbed />
        </WelcomeStyled>
    );
}

export default Welcome;

const WelcomeStyled = styled.div`
    
`;