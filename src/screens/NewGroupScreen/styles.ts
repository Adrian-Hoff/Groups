//react
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  justify-content: center;
`;

export const GroupIcon = styled(Icon).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  align-self: center;
`;
