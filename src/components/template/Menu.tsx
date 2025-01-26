import MenuGrupo from './MenuGrupo';
import MenuItem from './MenuItem';

export interface MenuProps {
  className?: string;
}

export function Menu(props: MenuProps) {
  return (
    <aside className={`pl-4 ${props.className ?? ''}`}>
      <nav className='flex flex-col gap-4'>
        <MenuGrupo label="Box Model">
          <MenuItem label="Padding" href="/padding" />
          <MenuItem label="Margin" href="/margin" />
          <MenuItem label="Border" href="/border" />
        </MenuGrupo>
        <MenuGrupo label="Display">
          <MenuItem label="Flex" href="/flex" />
          <MenuItem label="Grid" href="/grid" />
          <MenuItem label="Block" href="/block" />
        </MenuGrupo>
        <MenuGrupo label="Flexbox">
          <MenuItem label="Flex Item" href="/flex-item" />
          <MenuItem label="Flex Container" href="/flex-container" />
          <MenuItem label="Flex Direction" href="/flex-direction" />
        </MenuGrupo>
        <MenuGrupo label="Grid">
          <MenuItem label="Grid Container" href="/grid-container" />
          <MenuItem label="Grid Item" href="/grid-item" />
          <MenuItem label="Grid Template Columns" href="/grid-item" />
        </MenuGrupo>
        <MenuGrupo label="Responsividade">
          <MenuItem label="Breakpoints" href="/breakpoints" />
          <MenuItem label="Media Query" href="/media-query" />
          <MenuItem label="Mobile First" href="/mobile-first" />
        </MenuGrupo>
      </nav>
    </aside>
  );
}
