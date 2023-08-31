import React, { Children, ReactNode } from "react";
import * as Styled from "./styles";

type ButtonProps = {
  id: string;
  theme?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick: (value: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonAnimation = ({
  id,
  theme,
  disabled,
  onClick,
  children,
}: ButtonProps) => (
  <Styled.ButtonStyled
    id={id}
    theme={theme}
    onClick={onClick}
    disabled={disabled}
  >
    <Styled.BackgroundAnimation theme={theme} />
    {children}
  </Styled.ButtonStyled>
);
