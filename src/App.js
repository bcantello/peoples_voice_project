import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";

require('dotenv').config();

function App() {
    const [zipcode, setZipcode] = useState('');
    const [officials, setOfficials] = useState(() => {
        const result = localStorage.getItem('electedOfficials');
        return result ? JSON.parse(result) : {}
    });

    const handleZipcodeSubmit = (zip) => {
        setZipcode(zip);
    };

  return (
    <div className="App">
        <Header/>
        <UniversalContext.Provider value={
            {
            handleZipcodeSubmit,
            officials,
            setOfficials
            }
        }>
            <Main/>
        </UniversalContext.Provider>
        <Footer/>
    </div>
  );
}

export default App;
export const UniversalContext = createContext()
