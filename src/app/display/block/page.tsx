import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaBlock() {
  return (
    <Pagina>
      <Titulo
        texto="Display Block"
        descricao="Um elemento ocupa todo o espaço do elemento pai"
      />

      <div className="py-7 flex flex-col gap-4">
        <div>
          <h3 className="font-bold">Sem Aplicar o Display Block</h3>
          <div className="bg-red-500 w-8 h-8 text-center text-white inline-block">
            1
          </div>
          <div className="bg-blue-500 w-8 h-8 text-center text-white inline-block">
            2
          </div>
          <div className="bg-green-500 w-8 h-8 text-center text-white inline-block">
            3
          </div>
          <div className="bg-purple-500 w-8 h-8 text-center text-white inline-block">
            4
          </div>
        </div>
        <div>
          <h3 className="font-bold">Aplicando o Display Block</h3>
          <div className="bg-red-500  h-8 text-center text-white block">1</div>
          <div className="bg-blue-500  h-8 text-center text-white block">2</div>
          <div className="bg-green-500  h-8 text-center text-white block">
            3
          </div>
          <div className="bg-purple-500  h-8 text-center text-white block">
            4
          </div>
        </div>
      </div>
    </Pagina>
  );
}
