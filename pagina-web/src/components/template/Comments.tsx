import { useEffect, useState } from "react";
import { IconComments } from "../../../public/icons";
import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "../../backend/config";
import CardComment from "./CardComment";

export default function Comments() {
    const [dataName, setDataName] = useState('')
    const [dataComment, setDataComment] = useState('')

    const [comments, setComments] = useState<{name: string, comment: string}[]>([])

    const dataChangeName = (name:any) => {
        let nameData = name.target.value
        setDataName(nameData)
    }
    const dataChangeComment = (comment:any) => {
        let commentData = comment.target.value
        setDataComment(commentData)
    }

    const handleSubmit = (event:any) => {
        event.preventDefault()
        addData(dataName, dataComment)
        setComments([...comments, { name: dataName, comment: dataComment }])
        setDataName('')
        setDataComment('')
    }


    const addData = async(name: any, comment: any) => {
        try {
            await addDoc(collection(db, 'comments'), {
                name: name, 
                comment: comment
            })
        } catch(e) {
            console.error(e)
        }
    }

    const queryData = async () => {
        try {
            let queryData = await getDocs(collection(db, 'comments'))
            setComments(queryData.docs.map(doc => ({name: doc.data().name, comment: doc.data().comment})))
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        queryData()
    }, [])
    return (
        <section id="Comments" className="flex flex-col h-full items-center justify-center w-full pt-8">
            <h1 className={`
                flex items-center justify-center text-3xl font-bold
                text-black dark:text-gray-200 h-1/6
            `}>
                <i>{IconComments}</i>&nbsp;Comentários
            </h1>
            <div className="flex flex-col w-full items-center overflow-y-auto px-4 h-3/6">
                <div className="flex flex-col w-full sm:w-3/4">
                    {comments.map((value, index) => <CardComment key={index}
                        name={value.name} comment={value.comment} 
                        side={index % 2 === 0 ? 'start' : 'end'}
                    />)}
                </div>
            </div>
            <div className={`
                flex items-center justify-center
                bg-gray-800 dark:bg-gray-300 grow pt-2 transition duration-500 ease-in-out
                w-full h-2/6
            `}>
                <form action="#comments" method="post" onSubmit={handleSubmit}
                className={`
                    flex flex-col items-center justify-center w-full px-4 sm:w-1/2 sm:flex-row 
                    gap-0 sm:gap-1 sm:h-1/3
                `}>
                    <div className="flex flex-col items-center justify-center w-full h-full sm:w-3/4 py-1.5 gap-1">
                        <input type="text" id="name" value={dataName} onChange={dataChangeName} className={`
                            flex w-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white
                            rounded-md px-2 py-1 border border-black transition duration-500 ease-in-out
                            outline-none
                        `} placeholder="Insira seu Nome..." required/>
                        <input type="text" id="message" value={dataComment} onChange={dataChangeComment} className={`
                            flex w-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white
                            rounded-md px-2 py-1 border border-black transition duration-500 ease-in-out
                            outline-none
                        `} placeholder="Insira seu Comentário..." required/>
                    </div>
                    <div className="flex items-center justify-center h-full w-full sm:w-1/4 p-0 sm:pt-0.5 sm:pb-1.5">
                        <button type="submit" className={`
                            active:bg-blue-800 flex items-center justify-center
                            rounded-md mt-1 bg-blue-600 border border-black
                            text-black dark:text-white transition duration-500 ease-in-out
                            hover:bg-blue-700 w-full h-full px-2 py-1
                        `}>
                            Enviar &nbsp; <i className="flex h-6 w-6">{IconComments}</i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}