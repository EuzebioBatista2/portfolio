interface IButtonSkillsProps {
    value: number
    isActive: (value: number) => any
    icon: any
    className: string
}

export default function ButtonSkills(props: IButtonSkillsProps) {
    return (
        <div className={`
        flex items-center justify-center h-14 w-14 mx-4
        `}>
            <button onClick={() => props.isActive(props.value)}>
                <i className={`flex h-12 w-12 ${props.className}`}>{props.icon}</i>
            </button>
        </div>
    )
}