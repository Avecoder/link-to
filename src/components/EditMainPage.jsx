import {Input, UploadPreview, Button, EditCard, AddButton} from "./"
import { useEffect, useState } from "react"
import { allSocial } from "../utils"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { fetchCreateItem, fetchUpdateItem, fetchRemoveItem } from "../redux/slices/item"
import { Reorder } from "framer-motion"




export const EditMainPage = ({editTitle, editAuthor, editImageUrl, editLinks, editId, created, uid}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    

    const [addedLinks, setAddedLinks] = useState([])
    const [addNew, setAddNew] = useState(false)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [emptyAuthor, setEmptyAuthor] = useState(false)
    const [emptyTitle, setEmptyTitle] = useState(false)
    const [emptySocial, setEmptySocial] = useState(false)



    
    // links inner global card link
    const addNewItem = () => {
        const currentId = Date.now()
        setAddedLinks(
            [
                ...addedLinks, 
                {
                    social: 'github', 
                    url: '', 
                    type: 'edit', 
                    id: currentId, 
                    icon: allSocial.filter(({title}) => title == 'github')[0].Icon
                }
            ]
        )
        setAddNew(true)
    }

    const editItems = itemId => {
        setAddedLinks(addedLinks.map(item => item.id === itemId ? {...item, type: 'edit'} : item)) 
    }




    const updateItems = ({itemId, currentSocial, currentUrl}) => {

        setAddedLinks(
            addedLinks.map(item => 
                item.id === itemId ? 
                {...item, social: currentSocial, url: currentUrl, type: 'added', icon: allSocial.filter(({title}) => title == currentSocial)[0].Icon} 
                : 
                item
            )
        )


        setAddNew(false)
    }



    const removeItem = itemId => {
        setAddedLinks(addedLinks.filter(item => item.id !== itemId))
    }

    useEffect(() => {
        title.length > 0 && setEmptyTitle(false)
        author.length > 0 && setEmptyAuthor(false)
        addedLinks.length > 0 && setEmptySocial(false)

        
    }, [author, title, addedLinks])

    

    useEffect(() => {
        editTitle && setTitle(editTitle)
        editAuthor && setAuthor(editAuthor)
        editImageUrl && setImageUrl(editImageUrl)
        editLinks && setAddedLinks(editLinks)

    }, [editTitle, editAuthor, editImageUrl, editLinks])

    // links inner global card link

    // global card function
        
    const setItemsInDB = () => {
        const data = {title, author, links: addedLinks, imageUrl}
        title.length == 0 && setEmptyTitle(true)
        author.length == 0 && setEmptyAuthor(true)
        addedLinks.length == 0 && setEmptySocial(true)

        if(title.length !== 0 && author.length !== 0 && addedLinks.length !== 0) {
            if(!created) dispatch(fetchUpdateItem({...data, editId}))
            else dispatch(fetchCreateItem(data))

            navigate('/')
        }
        
    }


    // global card function
 
    return (
        <>  
            <div className='main-background' style={{backgroundImage: `url(${imageUrl})`}}></div>
            

            <div className="max-w-[400px] mx-auto">
                <UploadPreview setImageUrl={setImageUrl} imageUrl={imageUrl}/>
                <div className=" main-card mt-[-30px] dark:bg-black dark:text-white  bg-white shadow-xl sm:px-7 px-2 py-12 flex flex-col gap-y-5 sm:rounded-xl main-wrap">
                    
                    <div className="flex justify-between font-bold text-xl">
                        <Input placeholder="Title" nopad value={title} setvalue={setTitle} empty={emptyTitle} notborder/>
                        <Input placeholder="Author" right nopad value={author} setvalue={setAuthor} empty={emptyAuthor} notborder/>
                    </div>
                    
                    
                    <p className="font-bold text-base">{created ? 'Add links' : 'Edit links'}</p>

                    

                    <div>
                        
                        {
                            addedLinks.length 
                            ?
                            <Reorder.Group axis="y" onReorder={setAddedLinks} values={addedLinks} className="flex flex-col gap-y-4">
                                {addedLinks.map((item) => (
                                    <EditCard 
                                        key={item.id}
                                        item={item}
                                        updateItems={updateItems} 
                                        removeItem={removeItem}
                                        editItems={editItems}

                                    /> 
                                ))}
                            </Reorder.Group>
                            
                            :
                            <p className={`text-center opacity-60 font-bold ${emptySocial ? 'text-red-400' : ''}`}>Empty list</p>
                        }
                    </div>

                    <div className="flex items-center justify-center">
                        <AddButton setValue={addNewItem}/>
                    </div>

                    
                    <div className="flex gap-3 flex-wrap">
                        <Button setValue={setItemsInDB} small black>{created ? 'Create' : 'Update'}</Button>
                        
                        <Link to="/">
                            <Button small black>Back to list</Button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditMainPage