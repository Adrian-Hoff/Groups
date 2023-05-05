import { TouchableOpacityProps } from "react-native";
import { Container, FilterButtonStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps &
  FilterButtonStyleProps & {
    title: string;
  };

export default function FilterButtonComponent({
  title,
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  );
}
