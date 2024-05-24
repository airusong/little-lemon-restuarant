import React from 'react';
import Header from './Header';
import LandingSection from './LandingSection';
import HighlightsSection from './HighlightsSection';
import CustomerSection from './CustomerSection';
import Footer from './Footer';
const Homepage = () => {
    return (
      <nav>
        <Header/>
        <LandingSection/>
        <HighlightsSection/>
        <CustomerSection/>
        <Footer/>
      </nav>
    )
}
export default Homepage;