import HeaderComponent from "@components/HeaderComponent";
import { Container } from "./styles";

export default function PlayerScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />
    </Container>
  );
}
