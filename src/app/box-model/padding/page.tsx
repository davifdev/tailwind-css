import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaPadding() {
  return (
    <Pagina>
      <Titulo texto='Utilizando Padding' descricao='O preenchimento interno dos elementos' />
      <div className='py-7'>
      <div className="bg-blue-500 text-white text-center p-7 inline-block mr-5">
        Padding Full
      </div>
      <div className="bg-red-500 text-white text-center pt-7 inline-block mr-5">
        Padding Top
      </div>
      <div className="bg-green-500 text-white text-center pr-7 inline-block mr-5">
        Padding Right
      </div>
      <div className="bg-purple-500 text-white text-center pb-7 inline-block mr-5">
        Padding Bottom
      </div>
      <div className="bg-orange-500 text-white text-center pl-7 inline-block mr-5">
        Padding Left
      </div>
      <div className="bg-pink-500 text-white text-center px-7 inline-block mr-5">
        Padding X
      </div>
      <div className="bg-yellow-500 text-white text-center py-7 inline-block mr-5">
        Padding Y
      </div>  
      </div>
    </Pagina>
  ); 
}
