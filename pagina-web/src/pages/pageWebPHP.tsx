import Layout from "@/components/template/Loyout";
import Navegation from "@/components/template/Navegation";
import ToggleTheme from "@/components/template/ToggleTheme";
import useAppData from "@/data/hooks/useAppData";
import { IconBack } from "../../public/icons";

export default function pageWebPHP() {
    const { theme } = useAppData()
    return (
        <div className={`${theme}`}>
            <div >
                <Navegation>
                    <div className="flex w-1/5 items-center justify-start pl-4">
                        <a href='/'><i className="flex h-8 w-8 text-black dark:text-gray-200">{IconBack}</i></a>
                    </div>
                    <div className="flex w-3/5 items-center justify-center">
                        <h1 className="text-2xl text-black dark:text-gray-200">Pagina Web PHP</h1>
                    </div>
                    <div className="flex w-1/5 items-center justify-end pr-4">
                        <ToggleTheme />
                    </div>
                </Navegation>
                <Layout theme="dark">
                    <section className="flex w-full h-full pt-14">
                        <div className="flex w-1/2 items-center justify-center">
                            <h1>Video</h1>
                        </div>
                        <div className="flex w-1/2 items-center justify-center">
                            <h1>Descrição</h1>
                        </div>
                    </section>
                </Layout>
            </div>
        </div>
    )
}