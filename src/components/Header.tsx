import Image from "next/image";
import image from "../images/fotosalao.jpg"

interface HeaderProps {

}

export default function Header() {
    return (
        <header className={`relative h-2/3 w-full md:h-2/3
        `}>
            <Image src={image} layout="fill" objectFit="cover" />
            <span className="flex justify-center items-center relative text-2xl font-bold text-white ">Quadro de Anúncios</span>
        </header>
    )
}