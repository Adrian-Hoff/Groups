import "styled-components";
import themes from "@themes/index";

declare module "styled-components" {
  type ThemeType = typeof themes;

  export interface DefaultTheme extends ThemeType {}
}
