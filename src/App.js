import React, {useState, createContext} from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";

require('dotenv').config();

function App() {
    const [officials, setOfficials] = useState(() => {
        const result = sessionStorage.getItem('electedOfficials');
        return result ? JSON.parse(result) : {}
    });
    const [pollingLocations, setPollingLocations] = useState(() => {
        const result = sessionStorage.getItem('pollingLocations');
        return result ? JSON.parse(result) : {}
    });

    const addressFormatter = (userAddress) => {
        const addressArr = userAddress.address.split(' ');
        let streetAddress = "";
        for (let i = 0; i < addressArr.length; i++) {
            streetAddress = streetAddress + addressArr[i] + '%20';
        }
        return `${streetAddress}${userAddress.city}%20${userAddress.state}%20${userAddress.zip}`
    }

  return (
    <div className="App">
        <body>
        <Header/>
        <div className={'content'}>
            <UniversalContext.Provider value={
                {
                    officials,
                    setOfficials,
                    pollingLocations,
                    setPollingLocations,
                    addressFormatter
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
