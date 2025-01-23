import Logo from "./Logo";
import MenuUsuario from "./MenuUsuario";

export interface CabecalhoProps {
  className?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header
      className={`flex items-center justify-between px-7 border-b border-zinc-700 ${
        props.className ?? ""
      }`}
    >
      <Logo />
      <MenuUsuario />
    </header>
  );
}
