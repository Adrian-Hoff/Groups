//styles
import { Container } from "./styles";

//themes
import { useTheme } from "styled-components/native";

// {...Lorem} => Allows properties to
// be passed from the component call to the element
// inside the component function
export default function InputComponent({ ...rest }) {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      cursorColor={`white`}
      placeholderTextColor={theme.COLORS.GRAY_300}
    />
  );
}
