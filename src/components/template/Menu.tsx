import MenuGrupo from './MenuGrupo';
import MenuItem from './MenuItem';

export interface MenuProps {
  className?: string;
}

export function Menu(props: MenuProps) {
  return (
    <aside className={`pl-4 ${props.className ?? ''}`}>
      <nav className="flex flex-col gap-4">
        <MenuGrupo label="Box Model">
          <MenuItem label="Padding" href="/box-model/padding" />
          <MenuItem label="Margin" href="/box-model/margin" />
          <MenuItem label="Border" href="/box-model/border" />
        </MenuGrupo>
        <MenuGrupo label="Display">
          <MenuItem label="Flex" href="/display/flex" />
          <MenuItem label="Grid" href="/display/grid" />
          <MenuItem label="Inline" href="/display/inline" />
          <MenuItem label="Inline-Block" href="/display/inline-block" />
          <MenuItem label="Block" href="/display/block" />
        </MenuGrupo>
        <MenuGrupo label="Flexbox">
          <MenuItem label="Flex Item" href="/flex/flex-item" />
          <MenuItem label="Flex Container" href="/flex/flex-container" />
          <MenuItem label="Flex Direction" href="/flex/flex-direction" />
          <MenuItem label="Exemplo de Card" href="/flex/card" />
        </MenuGrupo>
        <MenuGrupo label="Grid">
          <MenuItem label="Grid Container" href="/grid/grid-container" />
          <MenuItem label="Grid Item" href="/grid/grid-item" />
          <MenuItem label="Grid Template Columns" href="/grid/grid-template-columns" />
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
