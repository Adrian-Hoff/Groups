import * as _ from "./styles";

import logoImg from "@assets/logo.png";

import Icon from "react-native-vector-icons/AntDesign";
type Props = {
  showBackButton?: boolean;
};

export default function HeaderComponent({ showBackButton = false }: Props) {
  return (
    <_.Container>
      {showBackButton && (
        <_.BackButton>
          <_.BackIcon name="left" />
        </_.BackButton>
      )}

      <_.Logo source={logoImg} />
    </_.Container>
  );
}
