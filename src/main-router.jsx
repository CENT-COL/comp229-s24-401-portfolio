import { Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Services from './components/services.jsx';
import Contact from './components/contact.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


const MainRouter = () => {
    return <div>
        <Header/> 
            <div class="container-fluid">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        <Footer/>
    </div>
}

export default MainRouter;
