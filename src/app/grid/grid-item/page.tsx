import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaGridItem() {
  return (
    <Pagina>
      <Titulo
        texto="Grid-Item"
        descricao="grid-item é todo elemento filho de um grid-container"
      />
      <div className="py-7">
        <div className="grid items-center justify-center bg-purple-500 w-28 h-28">
          <span className="text-white font-bold">flex-item</span>
        </div>
      </div>
    </Pagina>
  );
}
