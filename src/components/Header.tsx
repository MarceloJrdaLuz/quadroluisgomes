
interface HeaderProps {
    className?: string
}

export default function Header(props: HeaderProps) {

    return (
        <header className={`h-2/3 w-full md:h-2/3 brightness-30 ${props.className}
        `}>
        </header>
    )
}