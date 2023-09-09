import React from 'react';
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/footerNavBar';
import * as Styled from '../styles/homepageStyles';
import ProgressCircle from '../src/components/CircleMeter';
import { useDashboard } from '../src/hooks/useDashboard';

export default function Home() {
  const hook = useDashboard();
  return (
    <>
      <Styled.RowWrapper>
        <Styled.BlockWrapper left>
          <Styled.ProgressWrapper>
            <Styled.TitleWrapper>
              Progress
            </Styled.TitleWrapper>
            <Button height="40px" width="fit-content" buttonText="SET TARGET" buttonIcon="fa-solid fa-bullseye" onClick={() => console.log('clicked')} />
          </Styled.ProgressWrapper>
          <Styled.CircleWrapper>
            <ProgressCircle size={hook.circleSize} strokeWidth={hook.circleStrokeWidth} progressData={hook.sortedProgressData}>
              <Styled.StatWrapper>
                <Styled.AppliedWrapper>
                  123 Applied
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
        <Styled.BlockWrapper />
      </Styled.RowWrapper>
      <Styled.TableRowWrapper>
        <Styled.TableWrapper />
      </Styled.TableRowWrapper>

      <Footer />
    </>
  );
}
