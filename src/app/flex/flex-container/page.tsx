import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaContainer() {
  return (
    <Pagina>
      <Titulo
        texto="Flex-Container"
        descricao="Flex-container é o elemento que recebe a propiedade flex"
      />
      <div className="py-7">
        <h2 className="font-bold">flex-container</h2>
        <div
          className="flex flex-col items-center 
        justify-center w-28 h-24 bg-blue-500"
        ></div>
      </div>
    </Pagina>
  );
}
