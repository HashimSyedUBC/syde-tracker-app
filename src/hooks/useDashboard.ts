import { useState, useEffect } from 'react';
import { colors } from '../../styles/theme';
import { STAGE_NAMES } from '../utils/enums';
import { calculateResult } from '../utils/appliedChecker';

const testData = {
  applied: 100,
  onlineA: 35,
  interview: 42,
  rejected: 20,
  offer: 3,
};

const userInfoTest = {
  target: 200,
  signupDate: "2023-01-14"
}

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
  const [userInfo, setUserInfo] = useState<any>()
  const [stageValue, setStageValues] = useState<PercentagesType>()
  const [target, setTarget] = useState(200);
  const [caseToDo, setCaseTodo] = useState(0);


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
      name: STAGE_NAMES.TARGET,
      value: target,
    },
    {
      percent: percentages.applied,
      color: colors.mainColor,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.APPLIED,
      value: stageValue?.applied || 0,
    },
    {
      percent: percentages.onlineA,
      color: colors.oaBlue,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.OA,
      value: stageValue?.onlineA || 0,
    },
    {
      percent: percentages.interview,
      color: colors.interviewPurple,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.INTERVIEW,
      value: stageValue?.interview || 0,
    },
    {
      percent: percentages.rejected,
      color: colors.rejectedRed,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.REJECTED,
      value: stageValue?.rejected || 0,
    },
    {
      percent: percentages.offer,
      color: colors.offerGreen,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.OFFER,
      value: stageValue?.offer || 0,
    },
  ];

  const sortedProgressData = progressData.slice().sort((a, b) => b.percent - a.percent);


  const setProgressData = () => {
    const copyPercentages = {...percentages}
    let Applied = 0;
    let OA = 0;
    let Interview = 0;
    let Rejected = 0;
    let Offer = 0;
    if (caseToDo === 3) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*300
      OA = ((stageValue?.onlineA || 0)/target)*400
      Interview = ((stageValue?.interview || 0)/target)*400
      Rejected = ((stageValue?.rejected || 0)/target)*400
      Offer = ((stageValue?.offer || 0)/target)*650
    } else if (caseToDo === 2) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*100
      OA = ((stageValue?.onlineA || 0)/target)*300
      Interview = ((stageValue?.interview || 0)/target)*300
      Rejected = ((stageValue?.rejected || 0)/target)*300
      Offer = ((stageValue?.offer || 0)/target)*600

    } else if (caseToDo === 1) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*200
      OA = ((stageValue?.onlineA || 0)/target)*300
      Interview = ((stageValue?.interview || 0)/target)*300
      Rejected = ((stageValue?.rejected || 0)/target)*300
      Offer = ((stageValue?.offer || 0)/target)*300
    } else {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*100
      OA = ((stageValue?.onlineA || 0)/target)*100
      Interview = ((stageValue?.interview || 0)/target)*100
      Rejected = ((stageValue?.rejected || 0)/target)*100
      Offer = ((stageValue?.offer || 0)/target)*100
    }
    
    copyPercentages.applied = Applied;
    copyPercentages.onlineA = OA;
    copyPercentages.interview = Interview;
    copyPercentages.rejected = Rejected;
    copyPercentages.offer = Offer;
    setPercentages(copyPercentages);
  }

  useEffect(() => {
    setStageValues(testData);
    setUserInfo(userInfoTest);
  }, [target]);

  useEffect(() => {
    setCaseTodo(calculateResult(progressData));
  }, [stageValue]);

  useEffect(() => {
    setProgressData();
  }, [caseToDo]);

  return {
    sortedProgressData,
    circleSize,
    circleStrokeWidth,
    userInfo,
  };
};
