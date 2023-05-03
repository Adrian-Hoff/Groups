import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(Icon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
