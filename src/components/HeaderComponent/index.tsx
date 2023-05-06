//react-navigation
import { useNavigation } from "@react-navigation/native";

//styles
import * as _ from "./styles";

//images
import logoImg from "@assets/logo.png";
import Icon from "react-native-vector-icons/AntDesign";

type Props = {
  showBackButton?: boolean;
};

export default function HeaderComponent({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoToGroups() {
    navigation.navigate("groupsScreen");
  }

  return (
    <_.Container>
      {showBackButton && (
        <_.BackButton onPress={handleGoToGroups}>
          <_.BackIcon name="left" />
        </_.BackButton>
      )}

      <_.Logo source={logoImg} />
    </_.Container>
  );
}
