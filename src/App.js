import React ,{useContext}from 'react';
import './styles/styles.css';
import { Top } from './components/top';
import { Stack } from './components/stack';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Links } from './components/links';

const App=()=> {
 
  return (  
        <div className='App'>
            <Top/>   
            <Stack/>
            <Projects/>
            <About/>
            <Links/>
        </div>
  );
}

export default App;

