import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import Main from "./components/main";

require('dotenv').config();

function App() {
    const [zipcode, setZipcode] = useState('');
    const [officials, setOfficials] = useState({});
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://www.googleapis.com/civicinfo/v2/';
    const address = `?address=${zipcode}`;
    const apiKey = `&key=${process.env.REACT_APP_CIVIC_API_KEY}`;

    useEffect(() => {
        const fetchRepresentatives = async () => {
            let response = await fetch(`${url}representatives${address}${apiKey}`);
            let resText = await response.text();
            try {
                let resJson = JSON.parse(resText);
                setOfficials(resJson)
            } catch (e) {
                alert(`The application has encountered the following error: ${e}
            Please close and restart the application.`)
            }
        };
        fetchRepresentatives();
    }, [address, apiKey]);
    console.log(officials);

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
