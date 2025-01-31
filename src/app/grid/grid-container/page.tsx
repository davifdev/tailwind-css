import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaGridContainer() {
  return (
    <Pagina>
      <Titulo
        texto="Grid-Container"
        descricao="Grid-container é o elemento que recebe a propiedade grid"
      />
      <div className="py-7">
        <h2 className='font-bold'>grid-container</h2>
        <div className="grid bg-green-500 w-28 h-28"></div>
      </div>
    </Pagina>
  );
}
