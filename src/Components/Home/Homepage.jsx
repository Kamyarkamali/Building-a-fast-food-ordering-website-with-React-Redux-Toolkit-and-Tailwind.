import React from 'react';

//Components
import Hero from '../Hero/Hero';
import Title from '../Title/Title';
import Favarite from '../Favarite/Favarite';
import Foods from '../Foods/Foods';

//React-Router-Dom;
import { Route,Routes } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Hero/>
            <Title/>
            <Favarite/>
            <Foods/>
        </div>
    );
};

export default Homepage;