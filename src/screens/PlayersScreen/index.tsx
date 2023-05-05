//styles
import { Container, Form } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import HeaderComponent from "@components/HeaderComponent";
import InputComponent from "@components/InputComponent";
import ButtonIconComponent from "@components/ButtonIconComponent";

export default function PlayerScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />

      <HighlightComponent
        title="Group Title"
        subtitle="Add the gang to the Group"
      />

      <Form>
        <InputComponent placeholder="Name" />

        <ButtonIconComponent icon="plus" size={22} />
      </Form>
    </Container>
  );
}
