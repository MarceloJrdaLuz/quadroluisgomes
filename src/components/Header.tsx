
interface HeaderProps {
    className?: string
}

export default function Header(props: HeaderProps) {

    return (
        <header className={`h-2/4 w-full brightness-30 ${props.className}
        `}>
        </header>
    )
}