import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";

export default function PaginaMobileFirst() {
    return(
        <Pagina>
            <Titulo texto="Mobile First" descricao="Mobile First é um conceito aplicado em projetos web onde o foco inicial da arquitetura e desenvolvimento é direcionado aos dispositivos móveis e em seguida para os desktops." />
        </Pagina>
    );
}