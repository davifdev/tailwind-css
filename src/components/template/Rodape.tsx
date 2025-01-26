export interface RodapeProps {
  className?: string;
}

export function Rodape(props: RodapeProps) {
  return (
    <footer
      className={` text-zinc-400 text-sm px-7 border-t border-zinc-100 ${
        props.className ?? ''
      }`}
    >
      <div className="h-full boxed flex items-center justify-end">
        <h2>Todos os direitos reservados &copy; {new Date().getFullYear()}</h2>
      </div>
    </footer>
  );
}
