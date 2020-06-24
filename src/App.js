import React, {useState, createContext, useEffect} from 'react';
import './App.css';
import Main from "./components/main";
import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import { getIPAddress } from './components/services/ip-api-helper';
import { getUpcomingElections } from './components/services/civic-api-helper';

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
    const [userIpInfo, setUserIpInfo] = useState({});
    const [electionInfo, setElectionInfo] = useState({});

    useEffect(() => {
        const getUserInfo = async () => {
            await getIPAddress().then(res => {
                if (res.status === 200) {
                    setUserIpInfo(res.data)
                } else {
                    console.log("error retrieving user IP")
                }
            }).catch(e => {
                console.log(e);
            });
        };
        getUserInfo();
    }, []);

    console.log('user ip info',userIpInfo)

    useEffect(() => {
        const getElectionInfo = async () => {
            await getUpcomingElections().then(res => {
                if (res.status === 200) {
                    setElectionInfo(res.data)
                } else {
                    console.log("error retrieving upcoming elections")
                }
            }).catch(e => {
                console.log(e);
            });
        };
        getElectionInfo();
    }, []);

    console.log('election info',electionInfo);

    // useEffect(() => {
    //     const checkUserElections = () => {
    //         for(let i = 1; i < electionInfo.length; i++){
    //             console.log('Im here')
    //             let splitArr = electionInfo.elections[i].ocdDivisionId.split(':')
    //             console.log('split array',splitArr)
    //         }
    //     }
    //     checkUserElections();
    // });

    // if (electionInfo !== undefined) {
    //     for(let i = 1; i < electionInfo.length; i++){
    //     console.log('Im here')
        
    //     let splitArr = electionInfo.elections[i].ocdDivisionId.split(':')
    //     console.log('split array',splitArr)
    // }};
    
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
      </div>
  );
}

export default App;
export const UniversalContext = createContext()
