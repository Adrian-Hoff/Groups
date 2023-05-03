import { Container, Message } from "./styles";

type Props = {
  message: string;
};

export default function ListEmptyComponent({ message }: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
