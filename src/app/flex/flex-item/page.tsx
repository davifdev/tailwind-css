import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaFlexBox() {
  return (
    <Pagina>
      <Titulo
        texto="Flex-Item"
        descricao="flex-item é todo elemento filho de um flex-container"
      />
      <div className="py-7">
        <div className="flex items-center justify-center w-24 h-24 bg-red-500  ">
          <span className="text-white font-bold">flex-item</span>
        </div>
      </div>
    </Pagina>
  );
}
