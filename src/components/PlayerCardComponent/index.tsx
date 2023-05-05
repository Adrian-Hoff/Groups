import ButtonIconComponent from "@components/ButtonIconComponent";
import { Container, Name, PersonIcon } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function PlayerCardComponent({ name, onRemove }: Props) {
  return (
    <Container>
      <PersonIcon name="person" />
      <Name>{name}</Name>
      <ButtonIconComponent
        onPress={() => onRemove()}
        size={24}
        icon="plus"
        rotate
        type="SECONDARY"
      />
    </Container>
  );
}
