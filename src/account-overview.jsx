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
  padding: 20px;
`;

export const AccountOverview = ({data}) => {

  return (
    <AccountOverviewWrapper>
      <h2>Account Overview</h2>
      <SupportContact support={data.supportContact} />
      <SalesOverview sales={data.salesOverview}/>
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