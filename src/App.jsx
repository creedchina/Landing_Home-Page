import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import OurService from './components/ourServices/ourService';
import OurDoctors from './components/ourDoctors/ourDoctors';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';
import UserForm from './components/UserForm/UserForm';

const Home = () => (

  <>
  <Banner />

  <OurService />

  <OurDoctors />

  <Testimonials />


  </>
)

function App() {
  return (
    <BrowserRouter>

        {/* The NavBar stays at the top across all pages */}
        <NavBar />

        <Routes>

            {/* The Landing Page Route */}
            <Route path = "/" element = {<Home />} />

            {/* The New Page Route for your Booking Form */}
            <Route path = "/request-appointment" element = {<UserForm />} />

        </Routes>

        {/* The Footer stays at the bottom across all pages */}
        <Footer />

    </BrowserRouter>

  );
}

export default App
