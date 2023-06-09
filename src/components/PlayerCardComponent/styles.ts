import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
export const Container = styled.View`
  width: 100%;
  height: 56px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const PersonIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))`
  margin-left: 16px;
  margin-right: 16px;
`;
