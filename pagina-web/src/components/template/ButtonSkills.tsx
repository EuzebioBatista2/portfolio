interface IButtonSkillsProps {
    value: number
    isActive: (value: number) => any
    icon: any
    className: string
}

export default function ButtonSkills(props: IButtonSkillsProps) {
    return (
        <div className={`
        flex items-center justify-center h-20 w-20
        `}>
            <button onClick={() => props.isActive(props.value)}>
                <i className={`flex h-12 w-12 duration-1000 ease-in-out ${props.className}`}>{props.icon}</i>
            </button>
        </div>
    )
}