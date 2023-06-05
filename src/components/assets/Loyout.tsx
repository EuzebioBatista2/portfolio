interface ILayoutProps {
    theme: 'dark' | 'white'
    children?: any
    hOption?: number
}

export default function Layout(props: ILayoutProps) {
    return (
        <div className={`flex flex-col items-center h-screen min-h-[768px] w-screen ${props.theme === 'dark' ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-800 dark:bg-gray-300'} transtion duration-500 ease-in-out`}>
            {props.children}
        </div>
    )
}