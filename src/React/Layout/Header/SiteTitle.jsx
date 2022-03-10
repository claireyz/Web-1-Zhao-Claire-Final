import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Claire Zhao</h2>
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: #63638f;
    text-align: left;

    h2 {
        margin: 0px;
        font-size: 40px;
    }
    h3 {
        margin: 0px;
        font-size: 20px;
    }
    
`;