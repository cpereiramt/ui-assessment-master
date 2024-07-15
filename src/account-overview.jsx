import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import SupportContact from './support-contact';
import SalesOverview from './Sales-overview';
import { breakpoints } from './styles/breakpoints';


const AccountOverviewWrapper = styled.div`
   width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column ;
  @media (min-width: ${breakpoints.tablet}) {

  }
   @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const HeaderDiv = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column ;
    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
        width: 800px;
        height: 10% ;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-bottom: 50px;
         ;
    }
`;


const Title = styled.h2`
  font-size: 35px; 
  font-weight: normal;  
  color: #666;  
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      white-space: nowrap;
      margin-right: 100px;
      font-size: 30px; 
    }
`;
export const AccountOverview = ({data}) => {
  console.log(data);
  return (
    
    <AccountOverviewWrapper>
      <HeaderDiv>
      <Title>Account Overview</Title>
        <SupportContact support={data.supportContact} />
        </HeaderDiv>        
        <SalesOverview sales={data.salesOverview} />
      </AccountOverviewWrapper>  
     
  )
}
AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.object.isRequired,
    salesOverview: PropTypes.object.isRequired,
  }).isRequired,
};

export default AccountOverview;