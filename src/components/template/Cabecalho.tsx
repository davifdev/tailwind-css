import Logo from './Logo';
import MenuUsuario from './MenuUsuario';

export interface CabecalhoProps {
  className?: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <header
      className={`flex items-center justify-between px-7 border-b border-zinc-100 ${
        props.className ?? ''
      }`}
    >
      <div className="h-full boxed flex justify-between items-center">
        <Logo />
        <MenuUsuario />
      </div>
    </header>
  );
}
