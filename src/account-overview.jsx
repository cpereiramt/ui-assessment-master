import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { PropTypes } from "prop-types";
import SupportContact from './support-contact';
import SalesOverview from './Sales-overview';

const AccountOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  margin-bottom: 30px ;
`;

const GeneralDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #f4f4f4;
width: 100%;
margin: auto;
`;
const Title = styled.h2`
font-size: 32px; 
  font-weight: normal;  
  color: #666;  
  margin: 0;
  margin-right: 180px;
`;
export const AccountOverview = ({data}) => {
  console.log(data);
  return (
    <GeneralDiv>
    <AccountOverviewWrapper>
      <HeaderDiv>
      <Title>Account Overview</Title>
        <SupportContact support={data.supportContact} />
        </HeaderDiv>        
        <SalesOverview sales={data.salesOverview} />
      </AccountOverviewWrapper>  
      </GeneralDiv>
  )
}
AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.object.isRequired,
    salesOverview: PropTypes.object.isRequired,
  }).isRequired,
};

export default AccountOverview;