import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../styles/theme';
import { dateFormatter } from '../../utils/dateformatter';

interface BarGraphProps {
  data: any[];
  title: string
  date: string
}

const BarGraphContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change to column */
  width: 100%; /* Adjust the width as needed */
  height: 100%; /* Adjust the height as needed */
  justify-content: center;
`;

const TextWrapper = styled.span`
  display: inline;
  ${fonts.H100};
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Show ellipsis (...) for overflowing text */
  margin-left: 10px;
  margin-right: 10px;
  max-width: 90%;
`;

const SubtitleWrapper = styled.div`
margin-top: 24px;
  ${fonts.H200}
`;

const Bar = styled.div<{ color: string; width: number }>`
  background-color: ${(props) => props.color};
  height: 5.2vh; /* Change width to height */
  width: ${(props) => props.width}%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Show ellipsis (...) for overflowing text */
  min-width: 55px;
`;

const TitleStyled = styled.span`
  ${fonts.H600}
`;

const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 24px;
  ${fonts.H200}
`;

const BarGraph: React.FC<BarGraphProps> = ({ data, title, date }) => {
  // Calculate the maximum value in the data for scaling
  const maxValue = Math.max(...data.map((item) => item.value));
   const barValues = [...data.slice(1)].reverse();

  return (
    <BarGraphContainer>
      <TitleStyled>
        {title}
      </TitleStyled>
      {barValues.map((item, index) => {
        if (item.name !== "") {
          return (
            <BarWrapper>
                <Bar
                  key={index}
                  color={item.color}
                  width={(item.percent / maxValue) * 550}
                >
                  <TextWrapper>
                    {item.name}
                  </TextWrapper>
                </Bar>
                {item.value}
            </BarWrapper>
          )
        }})}
        <SubtitleWrapper>
          {dateFormatter(date)} - {dateFormatter(new Date().toDateString())}
        </SubtitleWrapper>
    </BarGraphContainer>
  );
};

export default BarGraph;
