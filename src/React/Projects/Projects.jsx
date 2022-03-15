import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

/* Components ---------------------------*/
import ProjectMain from './ProjectMain/ProjectMain.jsx';
import P1 from './Sub/P1.jsx';
import P2 from './Sub/P2.jsx';
import P3 from './Sub/P3.jsx';

const Projects = () => {

    return (
        <ProjectsStyled className='Projects'>
            <h1>Projects</h1>
            <Switch>
                <Route path='/projects' exact> 
                    <ProjectMain />
                </Route>
                <Route path='/projects/p1'> 
                    <P1 />
                </Route>
                <Route path='/projects/p2'> 
                    <P2 />
                </Route>
                <Route path='/projects/p3'> 
                    <P3 />
                </Route>
            </Switch>
        </ProjectsStyled>
    );
}

export default Projects;

const ProjectsStyled = styled.div`
    
`;