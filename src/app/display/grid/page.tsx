import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaGrid() {
  return (
    <Pagina>
      <Titulo
        texto="Display Grid"
        descricao="Define um elemento como container de grid"
      />
      <div className="py-7 flex flex-col gap-4">
        <div>
            <h3 className='font-bold'>Sem Aplicar o Display Grid</h3>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>1</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>2</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>3</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>4</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>5</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>6</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>7</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>8</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>9</div>
        </div>

        <h3 className='font-bold'>Aplicando o Display Grid</h3>
        <div className='grid grid-cols-3 grid-rows-3  gap-4'>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>1</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>2</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>3</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>4</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>5</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>6</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>7</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>8</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>9</div>
        </div>
      </div>
    </Pagina>
  );
}
