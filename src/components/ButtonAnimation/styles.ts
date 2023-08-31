import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";
import { toRem } from "../../utils/toRem";

type ButtonProps = {
  readonly theme?: string;
};

type BackgroundAnimationProps = {
  readonly theme?: string;
};

export const BackgroundAnimation = styled.div<BackgroundAnimationProps>`
  position: absolute;
  transition: all 0.2s linear;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    theme === "TextSection" ? colors.defaultPeach : colors.defaultPeach};
`;

export const ButtonStyled = styled.button<ButtonProps>`
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
  background: ${colors.defaultGreen};
  color: ${({ theme }) =>
    theme === "TextSection" ? colors.defaultPeach : colors.defaultWhite};
  border-bottom: ${({ theme }) =>
    theme === "TextSection" ? `1px solid ${colors.lightGreen}` : ""};
  p {
    transition: all 0.2s linear;
  }
  i {
    transition: all 0.2s linear;
    margin: 0 0 0 ${toRem(10)};
  }

  ${BackgroundAnimation} {
    transform: translateY(-100%);
  }

  padding: ${toRem(16)} 0;

  &:hover {
    padding: ${toRem(16)} ${toRem(16)} ${toRem(16)} 0;
    transition: all 0.2s linear;
    color: ${colors.defaultGreen};
    p {
      transition: all 0.2s linear;
      padding: 0 0 0 ${toRem(16)};
    }
    i {
      transition: all 0.2s linear;
    }
    ${BackgroundAnimation} {
      transform: translateY(0%);
    }
  }

  &:disabled {
    color: ${colors.lightGreyPurple};
    border: none;
  }
`;
