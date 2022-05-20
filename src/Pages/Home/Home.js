import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
       <div className='mb-8 px-12'>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
       </div>

    );
};

export default Home;