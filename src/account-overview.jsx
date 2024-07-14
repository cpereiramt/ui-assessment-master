import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { PropTypes } from "prop-types";

const AccountOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <AccountOverviewWrapper>

      </AccountOverviewWrapper>
  )
}
AccountOverview.propTypes = {
  data: PropTypes.shape({
    support: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired,
  }).isRequired,
};

export default AccountOverview;