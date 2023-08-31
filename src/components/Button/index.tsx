import React from "react";
import * as Styled from "./styles";
import { ButtonAnimation } from "../ButtonAnimation";

type ButtonProps = {
  theme?: string;
  disabled?: boolean;
  onClick: (value: React.MouseEvent<HTMLButtonElement>) => void;
  buttonIcon: string;
  buttonText: string;
  linkHref: string;
  width: string;
};

export const Button = ({
  theme,
  disabled,
  onClick,
  buttonIcon,
  buttonText,
  linkHref,
  width,
}: ButtonProps) => (
  <Styled.ButtonLinkWrapper href={linkHref} width={width}>
    <ButtonAnimation
      id="id"
      onClick={onClick}
      theme={theme}
      disabled={disabled}
    >
      <Styled.ButtonTextWrapper theme={theme}>
        {buttonText}
      </Styled.ButtonTextWrapper>
      <Styled.ButtonIcon className={buttonIcon} theme={theme} />
    </ButtonAnimation>
  </Styled.ButtonLinkWrapper>
);
