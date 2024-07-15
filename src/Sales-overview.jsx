import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { breakpoints } from './styles/breakpoints';

const SalesOverviewWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column ;
    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
       background-color: #ffffff;
        width: 70%;
        height: 240px;
        max-width:800px;
        -webkit-box-shadow: 0px 0px 4px 1px #f4f4f4; 
        box-shadow: 0px 0px 4px 1px #f4f4f4;
        border-radius: 9px;
    }
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: flex-start ;
  border-top: 2px solid #f4f4f4 ;
  flex-grow: 1;
  padding: 30px ;
     @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      display: flex;
      align-items: flex-start ;
      border-top: 2px solid #f4f4f4 ;
      padding: 30px ;
    }
   &:first-child {
    border-right: 2px solid #f4f4f4;   
 
  }
    & span {
      white-space: nowrap;
  }
  
`;

const StatDiv = styled.div`
   width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column ;
    align-items: center ;

   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      display: flex;
      flex-direction: row ;
      height:80%;
    }
`;

const SalesHeaderDiv = styled.div`
 display:flex;
 flex-direction:column;
 align-items: flex-start;
 padding-left: 25px ;
    @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
       align-items: center ;

    }
`;

const SalesTitle = styled.h2`   
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;
const SalesParagraph = styled.p`
color: #999;
font-weight: 200;
font-size: 15px ;
width: 100%;
text-align: center;
justify-content: center ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      width: 100%; 
      text-align: left;
    }
`;

const PercentageValue = styled.span`
color: #21aa55;
font-weight: bold;
font-size: 40px ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const UploadText = styled.span`
color: #999;
text-transform: uppercase;
font-weight: bold ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}

`;
const LinesSavedText = styled.span`
color: #999;
text-transform: uppercase;
font-weight: bold ;
font-family: 'Roboto' ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;
const UploadIcon = styled.span`
color: #3eb0ea;
font-size: 22px;
margin-right: 5px ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const InfoIcon = styled.span`
color: #d0cece;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;
const SalesHeaderFirstLine = styled.div`
display: flex;
justify-content: space-between ;
width: 100% ;
justify-content: center ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {
      justify-content: flex-start ;
    }
`;
const SalesAttentioIconContainer = styled.div`
padding-top: 18px ;
padding-right: 15px;
font-size: 19px ;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;

const BoldText = styled.span`
font-weight: bold ;
color: #4a4a4a;
   @media (min-width: ${breakpoints.tablet}) {
    }
    @media (min-width: ${breakpoints.desktop}) {}
`;
const SalesOverview = ({ sales }) => (
  <SalesOverviewWrapper>
    <SalesHeaderDiv>
      <SalesHeaderFirstLine>
    <SalesTitle><UploadIcon><FontAwesomeIcon icon={faUpload} /> </UploadIcon>Sales</SalesTitle>
        <SalesAttentioIconContainer>
          <InfoIcon>
            <FontAwesomeIcon icon={faInfoCircle} />
            </InfoIcon>
        </SalesAttentioIconContainer>
    </SalesHeaderFirstLine>
    <SalesParagraph>You had <BoldText>{sales.uploads} uploads</BoldText> and <BoldText>{sales.linesAttempted}</BoldText> lines added.</SalesParagraph>
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