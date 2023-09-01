import { useState, useEffect } from 'react';
import { colors } from '../../styles/theme';

const testData = {
  applied: 170,
  onlineA: 50,
  interview: 30,
  rejected: 60,
  offer: 10,
};

type PercentagesType = {
    applied: number,
    onlineA: number,
    interview: number,
    rejected: number,
    offer: number,
}

export const useDashboard = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [percentages, setPercentages] = useState<PercentagesType>({
    applied: 0,
    onlineA: 0,
    interview: 0,
    rejected: 0,
    offer: 0,
  });
  const [target, setTarget] = useState(200);

  const updateScreenSize = () => {
    setScreenHeight(window.innerHeight);
  };
  useEffect(() => {
    // Update screen size on initial render
    updateScreenSize();

    // Update screen size on window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const circleSize = (screenHeight * screenHeight) / 2400;
  const circleStrokeWidth = (screenHeight * screenHeight) / 25000;

  const progressData: any[] = [
    {
      percent: 100,
      color: colors.broderGray,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
    {
      percent: percentages.applied,
      color: colors.mainColor,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
    {
      percent: percentages.onlineA,
      color: colors.oaBlue,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
    {
      percent: percentages.interview,
      color: colors.interviewPurple,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
    {
      percent: percentages.rejected,
      color: colors.rejectedRed,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
    {
      percent: percentages.offer,
      color: colors.offerGreen,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
    },
  ];

  const sortedProgressData = progressData.slice().sort((a, b) => b.percent - a.percent);

  useEffect(() => {
    setTarget(200);
    const percentagesCopy: PercentagesType = { ...percentages };
    percentagesCopy.interview = (testData.interview / target) * 100;
    percentagesCopy.applied = (testData.applied / target) * 100;
    percentagesCopy.offer = (testData.offer / target) * 100;
    percentagesCopy.onlineA = (testData.onlineA / target) * 100;
    percentagesCopy.rejected = (testData.rejected / target) * 100;
    setPercentages(percentagesCopy);
  }, []);

  return {
    sortedProgressData,
    circleSize,
    circleStrokeWidth,
  };
};
