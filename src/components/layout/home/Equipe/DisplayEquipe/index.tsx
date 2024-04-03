import { getEquipe } from "@/api/getEquipe";
import { Card } from "../Card";
import { EquipeData } from "@/@types/EquipeData";

export async function DisplayEquipe() {
    const equipe: EquipeData[] = await getEquipe();

    return (
        <div className="flex flex-col items-center gap-4 md:gap-0 px-4 md:px-0 w-full md:grid md:grid-cols-4 py-8">
            {equipe.map((membro, index) => (
                <Card
                    key={index}
                    nameDr={membro.nome}
                    especialidade={membro.funcao}
                    cro={membro.cro}
                    imagem= {membro.fotoDoutor.node.mediaItemUrl}
                />
            ))}
        </div>
    );
}
