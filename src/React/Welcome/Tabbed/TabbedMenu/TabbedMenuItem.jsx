import React from 'react';
import styled from 'styled-components';

const TabbedMenuItem = ({ item, chosenTab, chosenTabUpdate }) => {
    const clickHandler = () => {
    chosenTabUpdate(item);
    }

    const theClassName = (item.title === chosenTab.title) ? 'TabbedMenuItem selected':'TabbedMenuItem';
    return (
        <TabbedMenuItemStyled className={ theClassName } onClick={ clickHandler }>
            { item.title } 
        </TabbedMenuItemStyled>
    );
}

export default TabbedMenuItem;

const TabbedMenuItemStyled = styled.div`

    background-color: #c6c6ea;
    color: white;
    width: 500px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px 10px 0px 0px;
    line-height: 30px;
    margin-right: 30px;

    &.selected {
        background-color: #63638f;
        color: white;
        
    }

`;