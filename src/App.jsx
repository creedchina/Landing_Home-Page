import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import UserForm from './components/UserForm/UserForm';
import LoginForm from './components/LogInForm/LogInForm';
import Contacts from './components/Contacts/contact';  
import Patners from './components/ourDoctors/ourDoctors'; 
import News from './components/Testimonials/Testimonials'; 
import Services from './components/ourServices/ourService';

const Home = () => (
    
    <>  

    <Banner />

    </>
)

function App() {
  return (

    <BrowserRouter>

    <div className='app-container'>

        {/* The NavBar stays at the top across all pages */}
        <NavBar />

        <main className = 'page-content'>
        {/* Each wrapper div needs an ID that perfectly matches the navbar href */}
        <div id="home">
          <Banner />
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

export default App
