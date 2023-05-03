//react
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

//styles
import * as _ from "./styles";

//components
import HeaderComponent from "@components/HeaderComponent";
import Highlight from "@components/HighlightComponent";
import GroupCardComponent from "@components/GroupCardComponent";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "rocket guys",
    "rocket guys 2",
    "rocket guys 3",
  ]);

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
      />
    </_.Container>
  );
}

const styles = StyleSheet.create({});
