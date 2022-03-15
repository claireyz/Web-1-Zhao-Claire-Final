import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { projectsData } from '../projectsData.js';

const P3 = () => {

    const thisService = projectsData.services.find((serv) => serv.id === 3);

    return (
        <P1Styled className='P3'>
            <h2>{ thisService.title }</h2>
            <img src={ thisService.image } alt={ thisService.image } /> 
            <p> Project details coming soon!</p>

        </P1Styled>
    );
}

export default P3;

const P1Styled = styled.div`
    img {
        max-width: 100%;
    }
`;