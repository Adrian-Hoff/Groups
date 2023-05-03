import * as _ from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export default function HighlightComponent({ title, subtitle }: Props) {
  return (
    <_.Container>
      <_.Title>{title}</_.Title>
      <_.Subtitle>{subtitle}</_.Subtitle>
    </_.Container>
  );
}
