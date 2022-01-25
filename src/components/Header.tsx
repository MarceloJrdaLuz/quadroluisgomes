
interface HeaderProps {
    className?: string
}

export default function Header(props: HeaderProps) {

    return (
        <header className={`h-1/2 lg:h-3/4 w-full brightness-30 ${props.className}
        `}>
        </header>
    )
}