import {LinkCard} from "./"
import {Typewriter} from './'

const DefaultMainPage = ({author, title, imageUrl, links}) => {


    return (
        <>
            <div className='main-background' style={{backgroundImage: `url('${imageUrl}')`}}></div>
            <div className="max-w-[400px] mx-auto">
                <div className="preview bg-black rounded-2xl" style={{backgroundImage: `url('${imageUrl}')`}}></div>
                <div className="main-card dark:bg-black dark:text-white mt-[-30px] bg-white shadow-xl sm:px-7 px-5 py-7 flex flex-col gap-y-5 sm:rounded-2xl main-wrap">
                    <div className="flex justify-between font-bold text-xl">
                        <h2><Typewriter text={title} delay={60} /></h2>
                        <h2><Typewriter text={author} delay={60} /></h2>
                    </div>
                    

                    <div className="flex flex-col gap-y-4">
                        {
                            links.map(({icon, url, buttonText}, i) => 
                                <LinkCard Icon={icon} url={url} key={i} buttonText={buttonText} />
                            )
                        }
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default DefaultMainPage