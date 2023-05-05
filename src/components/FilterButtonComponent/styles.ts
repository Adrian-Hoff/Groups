import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterButtonStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterButtonStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : null};
    `}
  border-radius:4px;
  margin-right: 12px;

  height: 38px;
  padding-horizontal: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `};
`;
