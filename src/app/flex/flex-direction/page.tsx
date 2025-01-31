import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaDirection() {
  return (
    <Pagina>
      <Titulo
        texto="Flex-Direction"
        descricao="é uma propiedade do CSS que define a direção em que os elementos flex são exibidos no container"
      />
      <div className="py-7 flex flex-col gap-4">
        <h2 className="font-bold">flex-row</h2>
        <div className="flex flex-row gap-2">
          <div className="w-8 h-8 bg-red-500 text-center rounded-sm text-white">
            01
          </div>
          <div className="w-8 h-8 bg-blue-500 text-center rounded-sm text-white">
            02
          </div>
          <div className="w-8 h-8 bg-green-500 text-center rounded-sm text-white">
            03
          </div>
        </div>
        <h2 className="font-bold">flex-row-reverse</h2>
        <div className="flex flex-row-reverse gap-2">
          <div className="w-8 h-8 bg-red-500 text-center rounded-sm text-white">
            01
          </div>
          <div className="w-8 h-8 bg-blue-500 text-center rounded-sm text-white">
            02
          </div>
          <div className="w-8 h-8 bg-green-500 text-center rounded-sm text-white">
            03
          </div>
        </div>
        <h2 className='font-bold'>flex-col</h2>
        <div className="flex flex-col gap-2">
          <div className="w-8 h-8 bg-red-500 text-center rounded-sm text-white">
            01
          </div>
          <div className="w-8 h-8 bg-blue-500 text-center rounded-sm text-white">
            02
          </div>
          <div className="w-8 h-8 bg-green-500 text-center rounded-sm text-white">
            03
          </div>
        </div>
        <h2 className='font-bold'>flex-col-reverse</h2>
        <div className="flex flex-col-reverse gap-2">
          <div className="w-8 h-8 bg-red-500 text-center rounded-sm text-white">
            01
          </div>
          <div className="w-8 h-8 bg-blue-500 text-center rounded-sm text-white">
            02
          </div>
          <div className="w-8 h-8 bg-green-500 text-center rounded-sm text-white">
            03
          </div>
        </div>
      </div>
    </Pagina>
  );
}
