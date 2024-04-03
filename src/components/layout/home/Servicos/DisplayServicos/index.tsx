import { getServicos } from "@/api/getServicos";
import { Card } from "../Card";
import { ServicoData } from "@/@types/ServicoData";


export async function DisplayServicos() {
    const servicos: ServicoData[] = await getServicos();

    return (
        <section className="flex flex-col md:grid md:grid-cols-3 gap-6 px-4 md:px-0">
            {servicos.map((servico, index) => (
                <Card 
                    key={index}
                    title={servico.nomeDoServico}
                    text={servico.descricaoDoServico}
                    icon= {servico.iconeDoServico.node.mediaItemUrl}
                />
            ))}
        </section>
    );
}
