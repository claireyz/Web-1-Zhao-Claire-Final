import React from 'react';
import styled from 'styled-components';

const Content = ({ chosenTab }) => {

    return (
        <ContentStyled className='Content'>
            <div className="left">
                <img src={ chosenTab.image } alt={ chosenTab.title } />
            </div>
            <div className="right">
                <h2>{ chosenTab.title }</h2>
                <div dangerouslySetInnerHTML={ { __html:chosenTab.text } } />
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display: flex;
    padding: 50px;
    background-color: #c6c6ea;

    .left {
        flex: 1;
        img {
            width: 100%;
            padding: 10px;
        }
    }

    .right {
        flex: 4;
        margin-left: 40px;
    }
`;