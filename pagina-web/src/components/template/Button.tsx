import { IconeLinkedin, IconeGitHub } from "../../../public/icons"

IconeLinkedin
interface IButtonProps {
    name:  string
    color: 'blue' | 'gray'
    icon: 'IconeLinkedin' | 'IconeGitHub'
}
export default function Button(props: IButtonProps) {
    return (
        <button className={`w-full flex justify-center items-center bg-${props.color}-700 p-2 rounded-md my-1`}>
            <i className="w-6 mr-1 fill-white">{props.icon == 'IconeLinkedin' ? IconeLinkedin : IconeGitHub}</i>
            <h2 className="text-lg text-white">{props.name}</h2>
        </button>
    )
}