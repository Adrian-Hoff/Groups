//react
import { FlatList } from "react-native";
import { useState } from "react";

//styles
import * as _ from "./styles";

//components
import HeaderComponent from "@components/HeaderComponent";
import Highlight from "@components/HighlightComponent";
import GroupCardComponent from "@components/GroupCardComponent";
import ListEmptyComponent from "@components/ListEmptyComponent";
import ButtonComponent from "@components/ButtonComponent";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <_.Container>
      <HeaderComponent />
      <Highlight title="Groups" subtitle="Enjoy with your group" />

      <FlatList
        data={groups}
        renderItem={({ item }) => {
          return <GroupCardComponent title={item} />;
        }}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmptyComponent
            message="Hmmm... You had not create any group yet. 
            Why don't you try by pressing the button bellow?"
          />
        )}
      />

      <ButtonComponent title="Create New Group" />
    </_.Container>
  );
}
