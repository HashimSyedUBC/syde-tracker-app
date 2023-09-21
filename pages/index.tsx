import React, { useEffect } from 'react';
import { Button } from '../src/components/Button';
import { Footer } from '../src/components/footerNavBar';
import * as Styled from '../styles/homepageStyles';
import ProgressCircle from '../src/components/CircleMeter';
import { useDashboard } from '../src/hooks/useDashboard';
import BarGraph from '../src/components/BarGraph';
import { dateFormatter } from '../src/utils/dateformatter';
import TableComponent from '../src/components/Table';
import { POTENTIAL_COLUMNS } from '../src/utils/enums';
import Modal from '../src/components/Modal';
import InputText from '../src/components/TextInput';
import InputTextArea from '../src/components/InputTextArea';
import ErrorBanner from '../src/components/ErrorBanner';

export default function Home() {
  const hook = useDashboard();
  return (
    <>
      <Styled.RowWrapper>
        <Styled.BlockWrapper left>
          <Styled.HeaderWrapper>
            <Styled.TitleWrapper>
              Progress
            </Styled.TitleWrapper>
            <Button height="40px" width="fit-content" buttonText="SET TARGET" buttonIcon="fa-solid fa-bullseye" onClick={() => hook.toggleTargetModal()} />
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
              Potential Companies
            </Styled.TitleWrapper>
            <Styled.ButtonWrapper>
            <Button height="40px" width="fit-content" buttonText="SORT COMPANIES" buttonIcon="fa-solid fa-sort" onClick={hook.handleOpenSortModal} disabled={hook.selectedApplications.length === 0}/>
            <Button height="40px" width="fit-content" buttonText="DELETE SELECTED" buttonIcon="fa-solid fa-trash" onClick={hook.ToggleDeleteModal} theme='Modal'  disabled={hook.selectedApplications.length === 0}/>
            </Styled.ButtonWrapper>
          </Styled.HeaderWrapper>
          <TableComponent columns={POTENTIAL_COLUMNS} data={hook.data} headerChecked={hook.tableHeader} handleHeaderChecked={hook.handleToggleHeader} handleRowChecked={hook.handleToggleIndividualData}/>
        </Styled.TableWrapper>
      </Styled.TableRowWrapper>
      <Modal isOpen={hook.deleteModal } onClose={hook.ToggleDeleteModal} onConfirm={hook.DeleteSelectedApplication} title='Delete Applications'>
        <Styled.DeleteModalContent>
          Are you sure you want to delete the {hook.selectedApplications.length} selected application(s)?
        </Styled.DeleteModalContent>
      </Modal>
      <Modal 
        isOpen={hook.sortModal} 
        title='Potential Applications' 
        onClose={hook.handleContinueLater} 
        closeText='Continue Later' 
        onConfirm={() => hook.handldeSaveSkip(true)} 
        secondConfirm={() => hook.handldeSaveSkip(false)}
        confirmText='Save Company'
        secondConfirmText='Skip Company'
        confirmIcon='fa-solid fa-bookmark'
        secondConfirmIcon='fa-solid fa-forward'
        confirmWidth='160px'
        secondConfirmWidth='160px'
        errorMessage={hook.modalError}
        >
        <Styled.Description>
        Please review the following fields for this company. Enter a company name to save this as a company OR click skip.
        </Styled.Description>
        <Styled.SortModalContentWrapper>
          <Styled.SortSubtitle>
            Review Details
          </Styled.SortSubtitle>
          <Styled.RowWrapperInput>
          <InputText label='Date' placeholder='' value={dateFormatter(hook.selectedApplications[hook.currentEmailIndex]?.Date) || ''} onChange={() => console.log('')} disabled required/>
          <InputText label='Sender' placeholder='' value={hook.selectedApplications[hook.currentEmailIndex]?.Sender || ''} onChange={() => console.log('')} disabled required />
          </Styled.RowWrapperInput>
          <Styled.RowWrapperInput>
          <InputText label='Stage' placeholder='' value={hook.currentEmailStage} onChange={hook.handleCompanyStage} required/>
          <InputText label='Company Name' placeholder='' value={hook.currentEmailCompanyName} onChange={hook.handleCompanyName} required/>
          </Styled.RowWrapperInput>
          <Styled.RowWrapperInput>
            <InputTextArea 
              label='Message' 
              placeholder='' 
              value={hook.selectedApplications[hook.currentEmailIndex]?.Message || ''}
              onChange={() =>  console.log('')}
              rows={4}
              disabled
              required/>
          </Styled.RowWrapperInput>
        </Styled.SortModalContentWrapper>
      </Modal>
      <Modal 
        title='Set Target' 
        isOpen={hook.targetModal}
        errorMessage={hook.targetError} 
        onClose={() => hook.toggleTargetModal()}
        onConfirm={() => hook.toggleTargetModal('save')}
      >
        <Styled.TargetInputWrapper>
        <InputText width='40px'label='' value={hook.targetString} onChange={hook.handleChangeTarget}/>
        </Styled.TargetInputWrapper>
      </Modal>

      <Footer />
    </>
  );
}
