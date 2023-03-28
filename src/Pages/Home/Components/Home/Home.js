import React from 'react';
import Header from '../Header/Header/Header';
import FeatureCarousel from '../FeatureCarousel/FeatureCarousel';
import FeatureItem from '../FeatureItem/FeatureItem';
import FeatureBlog from '../FeatureBlog/FeatureBlog';
import Offer from '../Offer/Offer';
import Cart from '../../../Cart/Cart';
import Favorites from '../../../Favorites/Favorites';


const Home = () => {
    return (
        <div>
            <Header/>
            <Cart/>
            <Favorites/>
            <FeatureCarousel/>
            <FeatureItem/>
            <Offer/>
            <FeatureBlog/>
        </div>
    );
};

export default Home;