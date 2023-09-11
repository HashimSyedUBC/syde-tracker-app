import React from 'react';
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/footerNavBar';
import * as Styled from '../styles/homepageStyles';
import ProgressCircle from '../src/components/CircleMeter';
import { useDashboard } from '../src/hooks/useDashboard';
import BarGraph from '../src/components/BarGraph';
import { dateFormatter } from '../src/utils/dateformatter';
import TableComponent from '../src/components/Table';

export default function Home() {
  const hook = useDashboard();
  const columns = ['Name', 'Position', 'Department', 'Email', 'Phone'];
  const data = [
    {
      Name: 'Alice Johnson',
      Position: 'Software Engineer',
      Department: 'Engineering',
      Email: 'alice@example.com',
      Phone: '555-123-4567',
    },
    {
      Name: 'Bob Smith',
      Position: 'HR Manager',
      Department: 'Human Resources',
      Email: 'bob@example.com',
      Phone: '555-987-6543',
    },
    // Add more employee data here
  ];
  return (
    <>
      <Styled.RowWrapper>
        <Styled.BlockWrapper left>
          <Styled.HeaderWrapper>
            <Styled.TitleWrapper>
              Progress
            </Styled.TitleWrapper>
            <Button height="40px" width="fit-content" buttonText="SET TARGET" buttonIcon="fa-solid fa-bullseye" onClick={() => console.log('clicked')} />
          </Styled.HeaderWrapper>
          <Styled.CircleWrapper>
            <ProgressCircle size={hook.circleSize} strokeWidth={hook.circleStrokeWidth} progressData={hook.sortedProgressData}>
              <Styled.StatWrapper>
                <Styled.AppliedWrapper>
                  {hook.sortedProgressData[1].value} Applied
                </Styled.AppliedWrapper>
                <Styled.TargetWrapper>
                  200 Target
                </Styled.TargetWrapper>
              </Styled.StatWrapper>
            </ProgressCircle>
          </Styled.CircleWrapper>
          <Styled.ViewCompaniesWrapper>
            <Button width="fit-content" buttonText="View Companies" buttonIcon="fa-solid fa-rectangle-list" onClick={() => console.log('clciked')} height="40px" />
          </Styled.ViewCompaniesWrapper>
        </Styled.BlockWrapper>
        <Styled.BlockWrapper>
          <BarGraph title="Stages" data={hook.sortedProgressData} date={hook.userInfo?.signupDate}/>
        </Styled.BlockWrapper>
      </Styled.RowWrapper>
      <Styled.TableRowWrapper>
        <Styled.TableWrapper>
          <Styled.HeaderWrapper>
            <Styled.TitleWrapper>
              Potential Applications
            </Styled.TitleWrapper>
            <Button height="40px" width="fit-content" buttonText="SORT EMAILS" buttonIcon="fa-solid fa-sort" onClick={() => console.log('clciked')} />
          </Styled.HeaderWrapper>
          <TableComponent columns={columns} data={data} />
        </Styled.TableWrapper>
      </Styled.TableRowWrapper>
      <Footer />
    </>
  );
}
