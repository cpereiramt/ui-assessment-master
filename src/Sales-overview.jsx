import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SalesOverviewWrapper = styled.div`
  background-color: #ffffff;
  width: 70%;
  height: 240px;
  max-width:600px;
  -webkit-box-shadow: 0px 0px 4px 1px #f4f4f4; 
  box-shadow: 0px 0px 4px 1px #f4f4f4;
  border-radius: 9px;  
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start ;
  border-top: 2px solid #f4f4f4 ;
  flex-grow: 1;
  padding: 30px ;
   &:first-child {
    border-right: 2px solid #f4f4f4;
    height: 100%;
 
  }
    & span {
      white-space: nowrap;
  }
`;

const StatDiv = styled.div`
display: flex;
height:100% ;
`;

const SalesHeaderDiv = styled.div`
 display:flex;
 flex-direction:column;
 align-items: flex-start;
 padding-left: 10px ;
`;

const SalesTitle = styled.h2`

`;
const SalesParagraph = styled.p`

`;

const PercentageValue = styled.span`
color: #21aa55;
font-weight: bold;
font-size: 40px ;
`;

const UploadText = styled.span`
color: #999;
text-transform: uppercase;
font-weight: bold ;

`;
const LinesSavedText = styled.span`
color: #999;
text-transform: uppercase;
font-weight: bold ;
`;
const SalesOverview = ({ sales }) => (
  <SalesOverviewWrapper>
    <SalesHeaderDiv>
    <SalesTitle>Sales</SalesTitle>
    <SalesParagraph>You had {sales.uploads} uploads and {sales.linesAttempted} lines added.</SalesParagraph>
    </SalesHeaderDiv>
    <StatDiv>
      <Stat>
       <PercentageValue>{sales.successfulUploads}% </PercentageValue> <UploadText>Upload Success</UploadText>
      </Stat>
      <Stat>
        <PercentageValue>{sales.linesSaved}%</PercentageValue><LinesSavedText> Lines Saved</LinesSavedText>
      </Stat>
      </StatDiv>
  
  </SalesOverviewWrapper>
);

SalesOverview.propTypes = {
    sales: PropTypes.shape({
    lastUploadDate: PropTypes.number.isRequired,
    uploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
  }).isRequired,
};

export default SalesOverview;