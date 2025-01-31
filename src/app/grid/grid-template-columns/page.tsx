import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaGridTemplateColumns() {
  return (
    <Pagina>
      <Titulo texto="Grid-Template-Columns" descricao='define o número e a largura das colunas de um grid' />
      <div className="py-7">
      <div className='grid grid-cols-4 gap-4'>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>1</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>2</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>3</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>4</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>5</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>6</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>7</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>8</div>
            <div className='bg-red-500 w-8 h-8 text-center text-white'>9</div>
            <div className='bg-blue-500 w-8 h-8 text-center text-white'>10</div>
            <div className='bg-green-500 w-8 h-8 text-center text-white'>11</div>
            <div className='bg-purple-500 w-8 h-8 text-center text-white'>12</div>
    
        </div>
      </div>
    </Pagina>
  );
}
