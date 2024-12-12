import './style/main.css'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import ProjectPage from "./pages/Project";
import ScrollToTop from "./utils/ScrollToTop";
import {useRef} from "react";
import {AppContext} from "./context";


function App() {
    const appRef = useRef();
  return (
      <AppContext.Provider value={{appRef}}>
      <div ref={appRef} className="App">
          <Router>
              <ScrollToTop/>
        <Navbar/>
              <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/contacts" element={<Contacts />}/>
              <Route path="/project/:id" element={<ProjectPage />}/>
              </Routes>
         <Footer/>
          </Router>
      </div>
      </AppContext.Provider>
  );
}

export default App;
