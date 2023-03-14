import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import FeatureCarousel from './FeatureCarousel/FeatureCarousel';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <FeatureCarousel/>
            <FeatureItem/>
        </div>
    );
};

export default Home;