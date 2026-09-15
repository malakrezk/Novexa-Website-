import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from '../../components/sections/Hero/Hero';
import Intro from '../../components/sections/Intro/Intro';
import Services from '../../components/sections/Services/Services';
import Journey from '../../components/sections/Journey/Journey';
import Work from '../../components/sections/Work/Work';
import Solutions from '../../components/sections/Solutions/Solutions';
import WhyNovexa from '../../components/sections/WhyNovexa/WhyNovexa';
import Stats from '../../components/sections/Stats/Stats';
import Process from '../../components/sections/Process/Process';
import Testimonial from '../../components/sections/Testimonial/Testimonial';
import FinalCTA from '../../components/sections/FinalCTA/FinalCTA';
import './Home.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <Hero />
        <Intro />
        <Services />
        <Solutions />
        <Journey />
        <Work />
        <WhyNovexa />
        <Stats />
        <Process />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
