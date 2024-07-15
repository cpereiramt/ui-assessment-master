import React from 'react';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import SupportContact from './support-contact';
import SalesOverview from './sales-overview';
import { breakpoints } from './styles/breakpoints';


const AccountOverviewWrapper = styled.main`
   width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column ;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
   @media (min-width: ${breakpoints.desktop}) {}
`;

const HeaderDiv = styled.header`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column ;
    @media (min-width: ${breakpoints.tablet}) {
       width: 540px;
        height: 10% ;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        margin-bottom: 50px;
    }
    @media (min-width: ${breakpoints.desktop}) {
      width: 800px;
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
      white-space: nowrap;
      margin-right: 100px;
      font-size: 25px; 
    }
    @media (min-width: ${breakpoints.desktop}) {
      font-size: 30px; 
    }
`;
export const AccountOverview = ({data}) => {
  console.log(data);
  return (
    
    <AccountOverviewWrapper>
      <HeaderDiv>
      <Title aria-label="Page title">Account Overview</Title>
        <SupportContact support={data.supportContact} aria-label="Support Contact Section"/>
        </HeaderDiv>        
        <SalesOverview sales={data.salesOverview} aria-label="Sales Overview Section" />
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