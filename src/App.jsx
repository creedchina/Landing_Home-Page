import './App.css'
import { BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero'; 
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/contact';  
import Patners from './components/ourDoctors/ourDoctors'; 
import News from './components/Testimonials/Testimonials'; 
import Services from './components/ourServices/ourService';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (

    <BrowserRouter>

    <div className='app-container'>

      {/* The NavBar stays at the top across all pages */}
      <NavBar />

        <main className = 'page-content'>
          {/* Each wrapper div needs an ID that perfectly matches the navbar href */}
          <div id="home">
            <Hero />
          </div>

          <div id='about'>
            <AboutUs />
          </div>

          <div id="services">
            <Services />
          </div>

          <div id="partners">
            <Patners />
          </div>

          <div id="news">
            <News />
          </div>

          <div id="contacts">
            <Contacts />
          </div>
        </main>

      {/* The Footer stays at the bottom across all pages */}
      <Footer />

    </div>

    </BrowserRouter>

  );
}

export default App; 
