import {Button, LinkCard, WrapPage} from '../components'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth} from 'firebase/auth'
import { removeUser } from '../redux/slices/user'
import { useEffect, useState } from 'react'

const Links = () => {

    const { items } = useSelector(state => state.items)
    const { data } = useSelector(state => state.user)


    const [username, setUsername] = useState('')

    const dispatch = useDispatch()

    const auth = getAuth()

    


    const navigate = useNavigate()

    const editItems = id => {
        navigate(`/${id}?type=edit`)
    }

    let links = items ? [...items].reverse() : []

    const signOut = async () => {
        await auth.signOut()
        await dispatch(removeUser())
        await navigate('/login')
    }

    useEffect(() => {
        setUsername(data?.email?.split('@')[0])
    }, [data?.email])


    useEffect(() => {
        if(!data?.uid) navigate('/login')
    }, [data])

    return (
        <WrapPage>
            <div className='links-wrap w-full h-auto dark:bg-black dark:text-white sm:py-32 py-12'>
                <div className='max-w-4xl mx-auto sm:px-10 px-5'>
                    <div className='flex sm:justify-between flex-col-reverse sm:flex-row sm:items-center items-start gap-y-10'>
                        <h1 className='font-bold text-4xl'>{username}</h1>
                        <div className='flex gap-x-5'>
                            <Link to="/create">
                                <Button black>Add new</Button>
                            </Link>
                            <Button setValue={signOut} black>Sign out</Button>
                        </div>
                    </div>
                    {
                        items
                        ?
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
                            {
                                links.map(({author, title, imageUrl, id}, i) => 
                                    <LinkCard 
                                        key={i} 
                                        editItems={editItems} 
                                        text edit
                                        id={id}
                                        imageUrl={imageUrl}
                                        mainLink
                                    >{title} - {author}</LinkCard>
                                )
                            }
                        </div>
                        :
                        <div className='flex justify-center py-40'>
                            <h2 className='text-3xl font-bold'>Not found links</h2>
                        </div>
                    }
                </div>
            </div>
            
        </WrapPage>
        
    )
}

export default Links
