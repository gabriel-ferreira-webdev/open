import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
// import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';
import ContactForm from "./ContactForm";


const Home = () => {

  return (
    <>
      { <Hero/> }
      {/* <FeaturesTiles /> */}
      <FeaturesSplit invertMobile topDivider imageFill/>
      {/* <Testimonial topDivider /> */}
      <ContactForm />
      {/* <Cta split /> */}
    </>
  );
}

export default Home;