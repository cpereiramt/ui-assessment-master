import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SupportContactWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const ContactInfo = styled.div`
  margin-top: 10px;
`;

const SupportContact = ({ support }) => (
  <SupportContactWrapper>
    <h2>Your Feefo Support Contact</h2>
    <ContactInfo>
      <div>{support.name}</div>
      <div>
        <a href={`mailto:${support.email}`}>{support.email}</a>
      </div>
      <div>{support.phone}</div>
    </ContactInfo>
  </SupportContactWrapper>
);

SupportContact.propTypes = {
  support: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default SupportContact;