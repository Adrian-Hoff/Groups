//react
import { TouchableOpacityProps } from "react-native";

//styles
import { ButtonIcon, Container } from "./styles";

type Props = TouchableOpacityProps & {};

export default function ButtonIconComponent({}: Props) {
  return (
    <Container>
      <ButtonIcon name="plus" size={32} type="PRIMARY" />
    </Container>
  );
}
