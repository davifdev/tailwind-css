export interface MenuProps {
  className?: string;
}

export function Menu(props: MenuProps) {
  return (
    <aside className={`bg-orange-500 ${props.className ?? ""}`}>
      <nav>SideBar</nav>
    </aside>
  );
}
