import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import Main from "./components/main";

require('dotenv').config();

function App() {
    const [zipcode, setZipcode] = useState('');
    const [officials, setOfficials] = useState(() => {
        const result = localStorage.getItem('electedOfficials');
        return result ? JSON.parse(result) : {}
    });
    console.log(officials)

    const handleZipcodeSubmit = (zip) => {
        setZipcode(zip);
    };

  return (
    <div className="App">
        <UniversalContext.Provider value={{
            handleZipcodeSubmit,
            officials,
            setOfficials
        }}>
            <Main/>
        </UniversalContext.Provider>
    </div>
  );
}

export default App;
export const UniversalContext = createContext()
