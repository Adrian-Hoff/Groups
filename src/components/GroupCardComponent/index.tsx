//styles
import { Container, Title, GroupIcon } from "./styles";

//react
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export default function GroupCardComponent({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <GroupIcon name="groups" />
      <Title>{title}</Title>
    </Container>
  );
}
