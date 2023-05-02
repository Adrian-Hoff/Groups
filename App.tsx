import themes from "@themes/index";
import Groups from "./src/screens/groups";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <Groups />
    </ThemeProvider>
  );
}
