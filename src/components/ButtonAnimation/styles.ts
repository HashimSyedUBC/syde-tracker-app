import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { toRem } from '../../utils/toRem';

type ButtonProps = {
  readonly theme?: string;
  readonly height?: string;
  readonly disabled?: boolean;
};

type BackgroundAnimationProps = {
  readonly theme?: string;
};



export const ButtonStyled = styled.button<ButtonProps>`
  height: ${({ height }) => (height || 'auto')};;
  z-index: 0;
  border: none;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.2s linear;
  overflow: hidden;
  background: ${colors.mainColor};
  color: ${({ theme }) => (theme === 'Modal' ? colors.mainColor : colors.defaultBlack)};
  border: 1px solid ${colors.mainColor};
  p {
    transition: all 0.2s linear;
  }
  i {
  transition: all 0.2s linear;
    margin: 0 0 0 ${toRem(12)};
  }

  &:hover{
    background-color: ${colors.defaultWhite};
  }



  &:disabled {
    background-color: ${colors.broderGray};
    border: 1px solid ${colors.darkGray};
  }
`;
