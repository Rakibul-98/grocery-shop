import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import Offer from '../Offer/Offer';
import FeatureCarousel from './FeatureCarousel/FeatureCarousel';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <FeatureCarousel/>
            <FeatureItem/>
            <Offer/>
        </div>
    );
};

export default Home;