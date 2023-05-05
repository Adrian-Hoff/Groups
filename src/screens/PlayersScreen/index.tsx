//styles
import { Container } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import HeaderComponent from "@components/HeaderComponent";

export default function PlayerScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />

      <HighlightComponent
        title="Group Title"
        subtitle="Add the gang to the Group"
      />
    </Container>
  );
}
