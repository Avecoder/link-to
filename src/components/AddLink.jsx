import {Input, Button} from './'
import IconsButton from './IconsButton'
import { allSocial } from "../utils"
import { useState, useEffect } from 'react'


const AddLink = ({social, url, updateItems, removeItem, id}) => {
    
    const [currentSocial, setCurrentSocial] = useState(social)
    const [currentUrl, setCurrentUrl] = useState(url)
    const [emptyField, setEmptyField] = useState(false)

    useEffect(() => {
        if(currentUrl.length > 0) setEmptyField(false)
    }, [currentUrl])

    

    return (
        <>
            <div className="add-link rounded-md p-5 flex flex-col gap-y-5">
                <div className="flex flex-wrap w-full gap-3">
                    {
                        allSocial.map(({Icon, title}, i) => 
                            <IconsButton setValue={() => setCurrentSocial(title)} key={i} Icon={Icon} active={title === currentSocial}/>
                        )
                    }
                </div>
                <Input 
                    placeholder="Enter link"
                    value={currentUrl}
                    setvalue={setCurrentUrl}
                    empty={emptyField}
                    black
                />
                <div className="flex gap-x-5">
                    <Button black setValue={() => currentUrl.length > 0 ? updateItems({itemId: id, currentSocial, currentUrl}) : setEmptyField(true)}>Add / edit</Button>
                    <Button black setValue={() => removeItem(id)}>Remove</Button>
                </div>
                
            </div>

        </>

    )
}

export default AddLink