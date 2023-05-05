//styles
import { Container, Content, GroupIcon } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import ButtonComponent from "@components/ButtonComponent";
import HeaderComponent from "@components/HeaderComponent";
import InputComponent from "@components/InputComponent";

export default function NewGroupScreen() {
  return (
    <Container>
      <HeaderComponent showBackButton />
      <Content>
        <GroupIcon name="groups" />
        <HighlightComponent
          title="New Group"
          subtitle="Create new groupe and add people into it "
        />
        <InputComponent placeholder="Group Title" />
        <ButtonComponent title="Create Group" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
