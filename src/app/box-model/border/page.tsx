import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaBorder() {
  return (
    <Pagina>
        <Titulo texto='Utilizando Bordas' descricao='Adiciona um contorno em volta do elemento' />
      <div className='flex flex-col gap-9 py-7'>
          <div className='w-32 h-10 border-blue-500 border-4 text-center'>
            Border Full
          </div>
          <div className='w-32 h-10 border-red-500 border-t-4 text-center'>
            Border Top
          </div>
          <div className='w-32 h-10 border-green-500 border-r-4 text-center'>
            Border Right
          </div>
          <div className='w-32 h-10 border-purple-500 border-b-4 text-center'>
            Border Bottom
          </div>
          <div className='w-32 h-10 border-orange-500 border-l-4 text-center'>
            Border Left
          </div>
          <div className='w-32 h-10 border-pink-500 border-x-4 text-center'>
            Border X
          </div>
          <div className='w-32 h-10 border-yellow-500 border-y-4 text-center'>
            Border Y
          </div>
      </div>
    </Pagina>
  );
}
