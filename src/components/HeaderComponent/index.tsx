import * as _ from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export default function HeaderComponent({ showBackButton = false }: Props) {
  return (
    <_.Container>
      {showBackButton && (
        <_.BackButton>
          <_.BackIcon />
        </_.BackButton>
      )}

      <_.Logo source={logoImg} />
    </_.Container>
  );
}
