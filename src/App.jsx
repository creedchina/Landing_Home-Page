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
        <Routes>

            {/* The Landing Page Route */}
            <Route path = "/" element = {<Home />} />

            <Route path='/services' element = {<Services />} /> 

            <Route path = "/patners" element = {<Patners />} /> 

            <Route path = '/news' element = {<News />} /> 

            <Route path="/Contacts" element = {<Contacts />} />

            {/* The New Page Route for your Booking Form */}
            <Route path = "/request-appointment" element = {<UserForm />} />

            <Route path="/Login" element={<LoginForm />} /> 
            {/* <Route path="/Register" element={<UserForm />} /> */}

        </Routes>
        </main>
        {/* The Footer stays at the bottom across all pages */}
        <Footer />

        </div>

    </BrowserRouter>

  );
}

export default App
