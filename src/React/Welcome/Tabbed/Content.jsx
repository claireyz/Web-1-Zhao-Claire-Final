import React from 'react';
import styled from 'styled-components';
import { YouTubeEmbed } from 'react-social-media-embed';

const Content = ({ chosenTab }) => {

    return (
        <ContentStyled className='Content'>
            <div className="left">
                <img src={ chosenTab.image } alt={ chosenTab.title } />
            </div>
            <div className="right">
                <h2>{ chosenTab.title }</h2>
                <div dangerouslySetInnerHTML={ { __html:chosenTab.text } } />
            <div style={{ display: 'flex', justifyContent: 'center' }}>

            {
                chosenTab.youtubeID &&
                <YouTubeEmbed url={`https://www.youtube.com/watch?v=${chosenTab.youtubeID}`} width={325} height={220} />
            }

            </div>

                {
                    chosenTab.images.map((img, idx) => {
                        return <img key={ idx } src={ img } />
                    })
                }
            </div>
        </ContentStyled>
    );
}

export default Content;

const ContentStyled = styled.div`
    display: flex;
    padding: 40px;
    background-color: white;
    border-radius: 0px 0px 10px 10px;
    border-color: #63638f;
    border-width: thin;

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