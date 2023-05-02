import * as _ from "./styles";

import logoImg from "@assets/logo.png";

export default function HeaderComponent() {
  return (
    <_.Container>
      <_.BackButton>
        <_.BackIcon />
      </_.BackButton>

      <_.Logo source={logoImg} />
    </_.Container>
  );
}
