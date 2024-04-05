import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp(){
    return(
        <Link className="w-16 h-16 bottom-6 rounded-full right-6 z-50 text-[#fff] flex justify-center items-center fixed bg-[#25d366] text-[2rem]" href="https://wa.me/5546999409574" target="_blank">
            <FaWhatsapp />
        </Link>
    );
}