import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaInline() {
  return (
    <Pagina>
      <Titulo
        texto="Display Inline"
        descricao="Permite que o outro elemento fique do seu lado caso haja espaço"
      />

      <div className="py-7 flex flex-col gap-4">
        <div>
          <h3 className="font-bold">Sem Aplicar o Display  Inline</h3>
          <div className="bg-red-500 w-8 h-8 text-center text-white">1</div>
          <div className="bg-blue-500 w-8 h-8 text-center text-white">2</div>
          <div className="bg-green-500 w-8 h-8 text-center text-white">3</div>
          <div className="bg-purple-500 w-8 h-8 text-center text-white">4</div>
        </div>
        <div>
          <h3 className="font-bold">Aplicando o Display  Inline</h3>
          <div className="bg-red-500 w-8 h-8 text-center text-white inline">1</div>
          <div className="bg-blue-500 w-8 h-8 text-center text-white inline">2</div>
          <div className="bg-green-500 w-8 h-8 text-center text-white inline">3</div>
          <div className="bg-purple-500 w-8 h-8 text-center text-white inline">4</div>
        </div>
      </div>
    </Pagina>
  );
}
