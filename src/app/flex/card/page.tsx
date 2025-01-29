import Card from '@/components/flex/Card';
import Pagina from '@/components/template/Pagina';
import Titulo from '@/components/template/Titulo';

export default function PaginaCard() {
  return (
    <Pagina>
      <Titulo
        texto="Card com Flexbox"
        descricao="Exemplo de uso prático do Flexbox"
      />
      <div>
        <Card />
      </div>
    </Pagina>
  );
}
