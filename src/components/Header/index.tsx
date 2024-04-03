'use client'
import { useState } from "react";
import Link from "next/link";
import { Container } from "../Container";
import Image from "next/image";
import LogoRealizze from "../../../public/assets/image/realizze.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { width } = useWindowSize();

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="w-full py-8 px-4 md:px-0 fixed bg-[#141213] z-50 transition-all">
                <Container>
                    <div className="flex justify-between items-center">
                        <Link href="/#">
                            <Image
                                width={245}
                                height={44}
                                src={LogoRealizze}
                                alt="Realizze odonto"
                            />
                        </Link>
                        <div className="cursor-pointer transition-all duration-300 md:hidden" onClick={toggleNav}>
                            {isNavOpen ?
                                <IoMdClose className="text-4xl text-[#A79A86] transition-all duration-300" /> :
                                <CiMenuFries className="text-4xl transition-all duration-300" />
                            }
                        </div>
                        <nav className="relative z-[1000] hidden md:flex">
                            <ul className="flex gap-8">
                                <li><Link className="hover:text-[#A79A86] transition" href="#sobre">Sobre</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href="#servicos">Serviços</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href=" #estrutura">Estrutura</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href="#equipe">Equipe</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href="#depoimentos">Depoimentos</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href="#contato">Onde estamos</Link></li>
                                <li><Link className="hover:text-[#A79A86] transition" href="#contato">Contato</Link></li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </header>
            <nav className={`flex transition-all duration-300 md:hidden md:pointer-events-none fixed w-[80%] h-full bg-[#141213] z-50 p-5 ${isNavOpen ? 'left-0' : 'left-[-2000px]'}`}>
                <ul className="w-full flex flex-col gap-4">
                    <li><Link className="hover:text-[#A79A86] transition" href="#sobre">Sobre</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href="#servicos">Serviços</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href=" #estrutura">Estrutura</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href="#equipe">Equipe</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href="#depoimentos">Depoimentos</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href="#contato">Onde estamos</Link></li>
                    <li><Link className="hover:text-[#A79A86] transition" href="#contato">Contato</Link></li>
                </ul>
            </nav>
        </>
    );
}
