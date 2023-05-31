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
        <section id="Comments" className="flex flex-col h-full items-center justify-center w-full px-4 pt-16">
            <h1 className={`
                flex items-center justify-center text-3xl font-bold
                text-black dark:text-gray-200
            `}>
                <i>{IconComments}</i> &nbsp; Comentários
            </h1>
            <div className="flex flex-col w-full h-3/5 overflow-y-auto px-4">
                {comments.map((value, index) => <CardComment key={index}
                    name={value.name} comment={value.comment} 
                    side={index % 2 === 0 ? 'start' : 'end'}
                />)}
            </div>
            <div className=" bg-gray-800 dark:bg-gray-300 w-screen grow pt-2 transition duration-500 ease-in-out">
                <form action="#comments" method="post" onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center w-full px-4">
                    <input type="text" id="name" value={dataName} onChange={dataChangeName} className={`
                        flex w-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white
                        rounded-md px-2 py-1 border border-black transition duration-500 ease-in-out
                        outline-none my-1
                    `} placeholder="Insira seu Nome..." required/>
                    <input type="text" id="message" value={dataComment} onChange={dataChangeComment} className={`
                        flex w-full bg-gray-300 dark:bg-gray-800 text-black dark:text-white
                        rounded-md px-2 py-1 border border-black transition duration-500 ease-in-out
                        outline-none my-1
                    `} placeholder="Insira seu Comentário..." required/>
                    <button type="submit" className={`
                        flex items-center justify-center
                        w-full rounded-md mt-1 bg-blue-600 border border-black px-2 py-1
                        text-black dark:text-white transition duration-500 ease-in-out
                    `}>
                        Enviar &nbsp; <i className="flex h-6 w-6">{IconComments}</i>
                    </button>
                </form>
            </div>
        </section>
    )
}