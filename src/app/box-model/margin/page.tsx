import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaMargin() {
  return (
    <Pagina>
      <Titulo
        texto="Utilizando Margin"
        descricao="O espaçamento externo dos elementos"
      />
      <div className="py-7">
        <div className="bg-blue-500 text-white text-center m-7 inline-block mr-5">
          Margin Full
        </div>
        <div className="bg-red-500 text-white text-center mt-7 inline-block mr-5">
          Margin Top
        </div>
        <div className="bg-green-500 text-white text-center mr-7 inline-block">
          Margin Right
        </div>
        <div className="bg-purple-500 text-white text-center mb-7 inline-block mr-5">
          Margin Bottom
        </div>
        <div className="bg-orange-500 text-white text-center ml-7 inline-block mr-5">
          Margin Left
        </div>
        <div className="bg-pink-500 text-white text-center mx-7 inline-block mr-5">
          Margin X
        </div>
        <div className="bg-yellow-500 text-white text-center my-7 inline-block mr-5">
          Margin Y
        </div>
      </div>
    </Pagina>
  );
}
