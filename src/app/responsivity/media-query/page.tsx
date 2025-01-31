import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaMediaQuery() {
    return(
        <Pagina>
            <Titulo texto="Oque são Media Queries?" descricao="é uma estrutura do css que permite aplicar estilizações especificas para uma página web de acordo com certas condições, fazendo assim com esta página possa se adequar ao layout de tela em diferentes tamanhos e tipos de midia" />
        </Pagina>
    );
}