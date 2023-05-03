//react
import { TouchableOpacityProps } from "react-native";

//styles
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export default function ButtonComponent({
  title,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
