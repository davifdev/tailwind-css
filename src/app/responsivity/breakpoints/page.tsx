import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaBreakPoints() {
  return (
    <Pagina>
      <Titulo
        texto="Breakpoints"
        descricao="são pontos de interrupção ou pontos especificos de largura de tela"
      />
      <div className="py-7">
        <div className="md:max-sm:w-7 bg-red-500 text-white">
          <span>SM</span>
        </div>
        <div className="md:max-md:w-8 bg-blue-500 text-white">
          <span>MD</span>
        </div>
        <div className="md:max-lg:w-12 bg-green-500 text-white">
          <span>LG</span>
        </div>
        <div className="md:max-xl:w-14 bg-purple-500 text-white">
          <span>XL</span>
        </div>
        <div className="md:max-2xl:w-16 bg-orange-500 text-white">
          <span>2XL</span>
        </div>
      </div>
    </Pagina>
  );
}
