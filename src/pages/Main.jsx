import { allSocial} from '../utils'
import WrapPage from '../components/WrapPage'
import { getDatabase, ref, get } from "firebase/database"
import DefaultMainPage from '../components/DefaultMainPage'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { EditMainPage } from '../components/EditMainPage'
import { useSelector } from 'react-redux'

const Main = () => {
    const location = useLocation()
    const [edit, setEdit] = useState(false)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [links, setLinks] = useState([])
    const [uid, setUid] = useState(null)

    const [anotherUid, setAnotherUid] = useState('')

    const {data} = useSelector(state => state.user)


    const loadDataFromDB = async () => {
        const database =  getDatabase()
        const pagesRef = ref(database, `pages${location.pathname}`)
        const pagesInfo = await get(pagesRef)
        
        const page = pagesInfo.val()


        if(page) {
            setAuthor(page.author)
            setTitle(page.title)
            setImageUrl(page.imageUrl)
            setLinks(page.links)
            setUid(page.uid)
        }
        
        setLinks(page.links.map(item => {
            let social = allSocial.filter(el => el.title == item.social)[0]
            return {...item, icon: social.Icon, buttonText: social.buttonText}
        }))
        
    }


    useEffect(() => {
        loadDataFromDB()

        const searchParams = new URLSearchParams(location.search)
        const type = searchParams.get('type')

        

        setEdit(type == 'edit')
        
        
    }, [])

    useEffect(() => setAnotherUid(data?.uid), [data])



    return ( 
           
        <WrapPage>
            <div className='sm:py-16 wrap-mainpage'>
                {
                    edit && anotherUid == uid
                    ?
                    <EditMainPage 
                        editTitle={title}
                        editAuthor={author}
                        editLinks={links}
                        editImageUrl={imageUrl}
                        editId={location.pathname.split('/')[1]}
                        uid={uid}
                    />
                    :
                    <DefaultMainPage 
                        author={author}
                        title={title}
                        imageUrl={imageUrl}
                        links={links}
                    /> 
                } 
                
            </div>
        </WrapPage>
        
    )
}

export default Main
