// import React
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './pages/Home';

// import styling
import './assets/scss/default.scss';

/**
 * The App
 * @return {App}
 */
const App = () => {
  return (
    <>
      <div className="App">
        <Router>
          <Header></Header>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
