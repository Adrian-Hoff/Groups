//react
import { useState } from "react";

//react-navigation
import { useNavigation } from "@react-navigation/native";

//styles
import { Container, Content, GroupIcon } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import ButtonComponent from "@components/ButtonComponent";
import HeaderComponent from "@components/HeaderComponent";
import InputComponent from "@components/InputComponent";

export default function NewGroupScreen() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleAddEvent() {
    navigation.navigate("playersScreen", { group });
    // {group} === {group:group} js notice that
    //there are two 'groups' (1 property and 1 content
    //that fills this property)
  }

  return (
    <Container>
      <HeaderComponent showBackButton />
      <Content>
        <GroupIcon name="groups" />
        <HighlightComponent
          title="New Group"
          subtitle="Create new groupe and add people into it "
        />
        <InputComponent placeholder="Group Title" onChangeText={setGroup} />
        <ButtonComponent
          title="Create Group"
          style={{ marginTop: 20 }}
          onPress={handleAddEvent}
        />
      </Content>
    </Container>
  );
}
