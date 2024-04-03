import { Container } from "@/components/Container";
import { Mapa } from "./Mapa";
import { FormContato } from "./FormContato";

export function Contato() {
    return (
        <section id="contato" className="py-36 bg-white px-4 mx:px-0">
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    <FormContato />
                    <Mapa />
                </div>
            </Container>
        </section>
    );
}