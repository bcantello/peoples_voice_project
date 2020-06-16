import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";

require('dotenv').config();

function App() {
    const [officials, setOfficials] = useState(() => {
        const result = localStorage.getItem('electedOfficials');
        return result ? JSON.parse(result) : {}
    });

  return (
    <div className="App">
        <body>
        <Header/>
        <div className={'content'}>
            <UniversalContext.Provider value={
                {
                    officials,
                    setOfficials
                }
            }>
                <Main/>
            </UniversalContext.Provider>
        </div>
        <Footer/>
        </body>
    </div>
  );
}

export default App;
export const UniversalContext = createContext()
