import Image from "next/image";
import { getBanner } from "@/api/getBanner";
import { BannerData } from "@/@types/BannerData";
import Link from "next/link";

export async function Banner() {
    const banner:BannerData = await getBanner();

    return (
        <section className="container max-w-[1000px] mx-auto pt-36 px-4 md:px-0">
            <div className="flex flex-wrap items-center justify-between">
                <article className="w-full text-center items-center md:items-start md:text-left md:w-2/4 flex flex-col gap-5">
                    <h2 className="text-5xl font-bold">{banner.titulo}</h2>
                    <p className="text-lg">{banner.texto}</p>
                    <Link className="w-48 mb-4 md:mb-0 text-center rounded-3xl border border-solid border-white px-4 py-2 hover:bg-[#A79A86] hover:border-[#A79A86] transition" href="#contatosection">Entre em contato</Link>
                </article>
                <figure className="w-full md:w-2/4">
                    <Image
                        width={520}
                        height={730}
                        src={banner.imagemBannerDoutores.node.mediaItemUrl}
                        alt=""
                    />
                </figure>
            </div>
        </section>
    );
}
