import {Wrap, Button, IconsButton, Icons} from './'
import {Link} from 'react-router-dom'
import {Edit, CopyLink, Trash} from '../icons'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRemoveItem } from '../redux/slices/item'
import { useNavigate } from 'react-router-dom'

const LinkCard = ({Icon, url, text, children, edit, editItems, id, imageUrl, buttonText, mainLink}) => {
    const {search} = useLocation()
    const {data} = useSelector(state => state.user)

    const uid = data?.uid

    const dispatch = useDispatch()

    const removeFromDatabase = () => {
        if(confirm('Are you sure you want to remove this link?')) {
            dispatch(fetchRemoveItem({id, uid}))
        }
    }

    const copyLink = () => {
        let url = `${location.protocol}//${location.host}/${id}`
        navigator.clipboard.writeText(url)
    }


    return (
        <Wrap classes={`flex  gap-y-6 ${mainLink ? 'sm:items-center sm:justify-between sm:flex-row items-start flex-col' : 'items-center justify-between'}`}>
            <div className={`flex sm:gap-x-3 ${mainLink ? 'gap-x-8 sm:items-center items-start' : 'items-center'}`}>
                {
                    imageUrl && 
                    <div className='sm:w-12 sm:h-12 h-24 w-24 rounded mini-preview' style={{backgroundImage: `url('${imageUrl}')`}}></div>
                }
                {
                text 
                ?
                <span className={`font-bold text-black dark:text-white text-sm mr-[10px]`}>{children}</span>
                :
                <Icons Icon={Icon} />
                }
            </div>
            {
                edit  
                ?
                <div className='flex sm:gap-x-2 gap-x-4'>
                    <IconsButton Icon={Edit} small setValue={() => editItems(id)}></IconsButton>
                    {
                        search !== '?type=edit' && 
                        <>
                            <IconsButton Icon={CopyLink} setValue={copyLink} />
                            <IconsButton red Icon={Trash} setValue={removeFromDatabase} />
                        </>
                    }
                </ div>
                :
                <Link to={url} target="_blank">
                    <Button small black>{buttonText || 'Listen to music'}</Button>
                </Link>
            } 
        </Wrap>
    )
}

export default LinkCard