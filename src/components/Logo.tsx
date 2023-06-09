import logo from 'assets/logo.svg';

interface LogoProp {
  title: string;
  width?: number;
}

export default function Logo(props: LogoProp) {
  const { title, width } = props;
  return <img src={logo} alt={title} width={width} />;
}
