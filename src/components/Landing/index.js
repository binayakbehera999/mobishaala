import React from 'react';
import Navigation from '../Navigation';
import Phonebar from '../Phonebar';
import VideoCarousel from '../VideoCarousel';
import ImageCarousel from '../ImageCarousel';
import Notification from "../Notifications"
import Blog from '../Blog';
import Courses from '../Courses';
import Mobile from '../Mobile';
import ContactUs from '../ContactUs';
import Footer from '../Footer';
import Copyright from '../Copyright';


const Landing = () => {
    return (
        <div>
            <Phonebar></Phonebar>
            <Navigation></Navigation>
            <ImageCarousel></ImageCarousel>
            <VideoCarousel></VideoCarousel>
            <Notification></Notification>
            <Blog></Blog>
            <Courses></Courses>
            <Mobile></Mobile>
            <ContactUs></ContactUs>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    )
}

export default Landing;