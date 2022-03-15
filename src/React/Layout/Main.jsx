import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Welcome/Welcome.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import Homework from '../Homework/Homework.jsx';

const Main = () => {

    return (
        <MainStyled className='Main'>
            <div className="inset">
            <Switch>
                <Route path='/' exact> 
                    <Welcome />
                </Route>
                <Route path='/projects'> 
                    <Projects />
                </Route>
                <Route path='/contact'> 
                    <Contact />
                </Route>
                <Route path='/homework'> 
                    <Homework />
                </Route>
            </Switch>
        </div>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.main`
    
`;