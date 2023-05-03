//react
import { StyleSheet, Text, View } from "react-native";

//styles
import * as _ from "./styles";

//components
import HeaderComponent from "@components/HeaderComponent";
import Highlight from "@components/HighlightComponent";

export default function Groups() {
  return (
    <_.Container>
      <HeaderComponent />
      <Highlight title="Groups" subtitle="Enjoy with your group" />
    </_.Container>
  );
}

const styles = StyleSheet.create({});
