import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import OurService from './components/ourServices/ourService';
import OurDoctors from './components/ourDoctors/ourDoctors';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer';
import UserForm from './components/UserForm/UserForm';
import LoginForm from './components/LogInForm/LogInForm';
import Contacts from './components/Contacts/contact';  

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

            <Route path="/Contacts" element = {<Contacts />} />

            {/* The New Page Route for your Booking Form */}
            <Route path = "/request-appointment" element = {<UserForm />} />

            <Route path="/Login" element={<LoginForm />} /> 
            {/* <Route path="/Register" element={<UserForm />} /> */}

        </Routes>

        {/* The Footer stays at the bottom across all pages */}
        <Footer />

    </BrowserRouter>

  );
}

export default App
