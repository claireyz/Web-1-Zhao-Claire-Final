import React from 'react';
import styled from 'styled-components';

import SiteTitle from './SiteTitle.jsx';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <div className="row">
                <SiteTitle /> 
            </div>
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.header`
    background-color: white;
    padding: 50px 0px;
    display: flex;
    justify-content: center;

    .row {
        display: flex;
        width: 600px;
        align-items: center;

        .SiteTitle {
            flex: 3;
        }
    }
`;