import styled from 'styled-components';
import { colors, fonts } from './theme';

type BlockWrapperProps = {
    left?: boolean
}

export const NewPage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RowWrapper = styled.div`
    margin: 64px 64px 0 64px;
    display: flex;
    justify-content: space-between;
    height: 60vh;
`;

export const BlockWrapper = styled.div<BlockWrapperProps>`
    padding: 48px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.broderGray};
    margin-right: ${({ left }) => (left ? '48px' : '0')};
`;

export const TableWrapper = styled.div`
    width: 100%;
    padding: 48px;
    border: 1px solid ${colors.broderGray};
    min-height: 600px;
`;

export const TableRowWrapper = styled.div`
    margin: 64px 64px 128px 64px;
    display: flex;
    justify-content: space-between;
    height: fit-content;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const TitleWrapper = styled.span`
    ${fonts.H600}
`;

export const CircleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
`;

export const StatWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AppliedWrapper = styled.div`
    ${fonts.H200}
    width: 100%;
    padding-bottom: 2%;
    border-bottom: 1px solid ${colors.defaultBlack};
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    text-overflow: ellipsis;
`;

export const TargetWrapper = styled.div`
    ${fonts.H200}
    width: 100%;
    padding-top: 2%;
    white-space: nowrap; /* Prevent text from wrapping to the next line */
    text-overflow: ellipsis;
`;

export const ViewCompaniesWrapper = styled.div`
    width: 180px;
    margin-top: 44px;
`;
