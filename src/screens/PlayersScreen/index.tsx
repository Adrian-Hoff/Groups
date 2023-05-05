//react
import { FlatList } from "react-native";
import { useState } from "react";

//styles
import { Container, Form } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import HeaderComponent from "@components/HeaderComponent";
import InputComponent from "@components/InputComponent";
import ButtonIconComponent from "@components/ButtonIconComponent";
import FilterButtonComponent from "@components/FilterButtonComponent";

export default function PlayerScreen() {
  const [groups, setGroups] = useState([
    "grosrgegup a",
    "grourgp b",
    "groergegup c",
    "group d",
    "grogreerhup e",
    "grorup f",
  ]);
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

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        renderItem={({ item }) => <FilterButtonComponent title={item} />}
      />
    </Container>
  );
}
