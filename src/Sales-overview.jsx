import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SalesOverviewWrapper = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  & span {
    margin-left: 8px;
  }
`;

const SalesOverview = ({ sales }) => (
  <SalesOverviewWrapper>
    <h2>Sales</h2>
    <p>You had {sales.uploads} uploads and {sales.linesAdded} lines added.</p>
    <div>
      <Stat>
        <FontAwesomeIcon icon={faUpload} />
        <span>{sales.uploadSuccess}% Upload Success</span>
      </Stat>
      <Stat>
        <FontAwesomeIcon icon={faCheckCircle} />
        <span>{sales.linesSaved}% Lines Saved</span>
      </Stat>
    </div>
  </SalesOverviewWrapper>
);

SalesOverview.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    linesAdded: PropTypes.number.isRequired,
    uploadSuccess: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
  }).isRequired,
};

export default SalesOverview;