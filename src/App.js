import React, {useState, createContext, useEffect} from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/navigation/header";
import { getIPAddress } from './services/ip-api-helper';
import { getUpcomingElections } from './services/civic-api-helper';

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
    const [userIpInfo, setUserIpInfo] = useState(() => {
        const result = sessionStorage.getItem('userIp');
        return result ? JSON.parse(result) : {}
    });
    const [electionInfo, setElectionInfo] = useState(() => {
        const result = sessionStorage.getItem('upcomingElections');
        return result ? JSON.parse(result) : {}
    });

    useEffect(() => {
        const getUserInfo = async () => {
            await getIPAddress().then(res => {
                if (res.status === 200) {
                    setUserIpInfo(res.data);
                    sessionStorage.setItem('userIp', JSON.stringify(res.data));
                } else {
                    console.log("error retrieving user IP");
                }
            }).catch(e => {
                console.log(e);
            });
        };
        getUserInfo();
    }, []);

    useEffect(() => {
        const getElectionInfo = async () => {
            await getUpcomingElections().then(res => {
                if (res.status === 200) {
                    setElectionInfo(res.data);
                    sessionStorage.setItem('upcomingElections', JSON.stringify(res));
                } else {
                    console.log("error retrieving upcoming elections");
                }
            }).catch(e => {
                console.log(e);
            });
        };
        getElectionInfo();
    }, []);

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
          <div className={'content'}>
              <UniversalContext.Provider value={
                  {
                      officials,
                      setOfficials,
                      pollingLocations,
                      setPollingLocations,
                      userIpInfo,
                      electionInfo,
                      addressFormatter
                  }
              }>
                  <Header/>
                  <Main/>
              </UniversalContext.Provider>
          </div>
      </div>
  );
}

export default App;
export const UniversalContext = createContext()
