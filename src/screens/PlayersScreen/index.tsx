//react
import { FlatList } from "react-native";
import { useState } from "react";

//styles
import { Container, Form, PlayersCounter, HeaderList } from "./styles";

//components
import HighlightComponent from "@components/HighlightComponent";
import HeaderComponent from "@components/HeaderComponent";
import InputComponent from "@components/InputComponent";
import ButtonIconComponent from "@components/ButtonIconComponent";
import FilterButtonComponent from "@components/FilterButtonComponent";
import PlayerCardComponent from "@components/PlayerCardComponent";
import ListEmptyComponent from "@components/ListEmptyComponent";

export default function PlayerScreen() {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [groups, setGroups] = useState([
    "grosrgegup a",
    "grourgp b",
    "groergegup c",
    "group d",
    "grogreerhup e",
    "grorup f",
  ]);
  const [players, setPlayers] = useState([
    "Adrian Hoff",
    "John Smith",
    "Robby Goodrich",
    "Adam Patterson",
    "James Brown",
    "William Green",
    "Joe Rogan",
    "Michael Jordan",
    "Jane Joplin",
    "Roddy Rich",
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

      <HeaderList>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          horizontal
          renderItem={({ item }) => (
            <FilterButtonComponent
              isActive={item === selectedGroup}
              title={item}
              onPress={() => setSelectedGroup(item)}
            />
          )}
        />
        <PlayersCounter>{players.length} </PlayersCounter>
      </HeaderList>
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <PlayerCardComponent name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmptyComponent message="This group is empty" />
        )}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
