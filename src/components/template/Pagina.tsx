import { ReactNode } from "react";
import Cabecalho from "./Cabecalho";
import { Menu } from "./Menu";
import { Rodape } from "./Rodape";

interface PaginaProps {
  children?: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho className="h-16" />
      <div className="flex flex-1 boxed">
        <Menu className="hidden lg:block lg:w-60 xl:w-72 py-7"/>
        <main className="flex-1 p-7  border-l border-zinc-100">{props.children}</main>
      </div>
      <Rodape className="h-14"/>
    </div>
  );
}
