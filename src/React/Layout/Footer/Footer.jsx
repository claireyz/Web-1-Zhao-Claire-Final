import React from 'react';
import styled from 'styled-components';

import SiteTitle from './SiteTitle.jsx';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            <SiteTitle /> 
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    background-color: transparent;
    text-align: center;
    padding: 20px 0px;
`;