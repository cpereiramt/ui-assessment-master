import './app.css';
import AccountOverview from './account-overview';
import styled from "styled-components";
import { breakpoints } from "./styles/breakpoints";

function App() {

  const RootDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    @media (min-width: ${breakpoints.tablet}) {
      width: 100vw;
      height: 100vh;
      background-color: #f4f4f4;
      display: block;
    }
    @media (min-width: ${breakpoints.desktop}) {
    }
  `;
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@feefo.com',
      phone: '020 3362 4208'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }


  return (
    <RootDiv className="App">
      <AccountOverview data={accountOverviewStub}/>
    </RootDiv>
  );
}

export default App;
