export interface MenuGrupoProps {
  label: string;
  className?: string;
  children?: React.ReactNode;
}

export default function MenuGrupo(props: MenuGrupoProps) {
  return (
    <>
      <div className={`flex flex-col gap-1 ${props.className ?? ''}`}>
        <span className="text-zinc-700 font-semibold">{props.label}</span>
        <div>{props.children}</div>
      </div>
    </>
  );
}
