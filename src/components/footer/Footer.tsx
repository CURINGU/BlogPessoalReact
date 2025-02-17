import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import { TwitterLogo } from '@phosphor-icons/react/dist/ssr'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#fff5ea] text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal | Otávio Ferreira | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='fill' />
                        <XLogo size={48} weight='bold' />
                        <GithubLogo size={48} weight='fill' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer