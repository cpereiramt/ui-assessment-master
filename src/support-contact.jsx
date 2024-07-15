import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { breakpoints } from './styles/breakpoints';

const SupportContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  width: 100%;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
       display: flex;
       flex-direction: column;
    }
`;


const Header = styled.div`
   font-size: 14px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 10px;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;
const SupportIcon = styled.div`
    display:none;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      width: 40px;
      height: 42px;
      background-color: #ffcc00;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      color: BLACK;
      margin-right: 10px;
      box-shadow: 0px 0px 2px 0px #f9cf03;
      border-radius: 9px;
    }
`;
const ContactInfo = styled.div`
 display: flex;
  align-items: center;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const SupportText = styled.span`
  display: flex;
  flex-direction: column;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const SupportName = styled.span`
  font-size: 22px;
  font-weight: bold;
 
    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      font-size: 16px;
      text-align: left;
    }
 `;
const SupportEmailPhone = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #666;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: row;
      font-size: 14px;
    }
`;
const SupportEmail = styled.span`
    margin-right: 15px;
    font-weight: 600;
    color: #878484 ;
       @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const SupportPhone = styled.span`
font-weight: 600;
color: #878484;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const EnvelopeIcon = styled.span`
margin-right: 10px ;
color: #878484;
display: none;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      display: block;
    }
`;

const SupportContact = ({ support }) => (
  <SupportContactWrapper>
    <Header>Your Feefo Support Contact</Header>       
    <ContactInfo>    
       <SupportIcon>S</SupportIcon>
      <SupportText>
        <SupportName>{support.name}</SupportName>
        <SupportEmailPhone>
          <EnvelopeIcon> <FontAwesomeIcon icon={faEnvelope} /></EnvelopeIcon>
        <SupportEmail href={`mailto:${support.email}`}>{support.email}</SupportEmail>
          <SupportPhone>{support.phone}</SupportPhone>
          </SupportEmailPhone>
        </SupportText>
    </ContactInfo>
  </SupportContactWrapper>
);

SupportContact.propTypes = {
  support: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
};

export default SupportContact;