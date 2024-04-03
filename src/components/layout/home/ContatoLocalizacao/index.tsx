import { Container } from "@/components/Container";
import { Mapa } from "./Mapa";
import { FormContato } from "./FormContato";

export function ContatoLocalizacao() {
    return (
        <section id="contatosection" className="md:py-36 bg-white px-4 mx:px-0">
            <Container>
                <div className="flex flex-col-reverse md:flex-row justify-between">
                    <FormContato />
                    <Mapa />
                </div>
            </Container>
        </section>
    );
}