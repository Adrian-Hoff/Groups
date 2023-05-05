import styled from "styled-components/native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

type Props = {
  type: "PRIMARY" | "SECONDARY";
  rotate: true | false;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;
export const ButtonIcon = styled(Icon)<Props>`
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED};

  transform: ${({ rotate }) => (rotate ? "rotate(45deg)" : null)};
`;
