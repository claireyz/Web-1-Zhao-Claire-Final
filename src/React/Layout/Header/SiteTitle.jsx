import React from 'react';
import styled from 'styled-components';

const SiteTitle = () => {

    return (
        <SiteTitleStyled className='SiteTitle'>
            <h2>Claire Zhao: </h2>
            <h4>User Experience Designer </h4> 
            <img src='assets/img/sitetitleicon.png' alt='colors' />
        </SiteTitleStyled>
    );
}

export default SiteTitle;

const SiteTitleStyled = styled.div`
    color: #63638f;
    text-align: center;

    h2 {
        margin: 0px;
        font-size: 40px;
    }
    h3 {
        margin: 0px;
        font-size: 20px;
    }
    h4 {
        margin: 20px;
        text-align: center;
    }
    
`;