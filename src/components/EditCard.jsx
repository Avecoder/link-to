import {AddLink, LinkCard} from "./"
import {Reorder} from 'framer-motion'

const EditCard = ({updateItems, removeItem, editItems, item}) => {
    
    const {icon, url, type, id, social} = item

    return (
        <Reorder.Item value={item} id={item} onDoubleClick={() => removeItem(id)}>
            {
                type === 'edit' 
                ?
                <AddLink social={social} url={url} id={id} updateItems={updateItems} removeItem={removeItem}/>  
                :
                <LinkCard Icon={icon} url={url} edit editItems={editItems} id={id}/>  
                
            }
            
        </Reorder.Item>
    )

}

export default EditCard