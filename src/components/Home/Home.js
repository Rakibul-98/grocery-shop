import React from 'react';
import Blog from '../Blog/Blog';
import FeatureItem from '../FeatureItem/FeatureItem';
import Offer from '../Offer/Offer';
import FeatureCarousel from './FeatureCarousel/FeatureCarousel';
import Foot from './Footer/Foot';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <FeatureCarousel/>
            <FeatureItem/>
            <Offer/>
            <Blog/>
            <Foot/>
        </div>
    );
};

export default Home;