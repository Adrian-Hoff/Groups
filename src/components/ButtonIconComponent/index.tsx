//react
import { TouchableOpacityProps } from "react-native";

import { AntDesign } from "@expo/vector-icons";

//styles
import { ButtonIcon, Container } from "./styles";

type Props = TouchableOpacityProps & {
  icon: keyof typeof AntDesign.glyphMap;
  rotate?: boolean;
  size: number;
  type?: "PRIMARY" | "SECONDARY";
};

export default function ButtonIconComponent({
  icon,
  rotate = false,
  size,
  type = "PRIMARY",
}: Props) {
  return (
    <Container>
      <ButtonIcon name={icon} size={size} type={type} rotate={rotate} />
    </Container>
  );
}
