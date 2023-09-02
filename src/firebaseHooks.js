import { getDatabase, ref, push, set, update, remove, get } from "firebase/database"
import { getAuth } from "firebase/auth"
import { objToArr } from "./utils"


const getUser = () => {
    const auth = getAuth()
    const user = auth.currentUser

    if (!user) {
        throw new Error("User is not authenticated!");
    }

    return user
}


export const getAllItems = async (uid) => {
    const database = getDatabase()
    
    const itemRef = ref(database, `users/${uid}`)
    

    const users = await get(itemRef)

    
    

    const userItemsObj = await users.val().items

    


    const userItems = objToArr(userItemsObj)

    const userItemsData = userItems.map(({value}) => value)

    
    let items = []

    for(let item of userItemsData) {
        let itemRef = ref(database, `pages/${item.itemId}`)
        let currentItem = await get(itemRef)
        currentItem.val() && items.push({...currentItem.val(), id: item.itemId})
    }

    

    return items
}

export const pushToDB = async (data) => {
    const database = getDatabase()
    const {uid} = getUser()

    const name = `${data.title}_${data.author}`


    const pagesRef = ref(database, `pages`)
    const newPagesRef = push(pagesRef)

    let {links, ...updateData} = data
    links = links.map(({icon, ...link}) => link)


    await set(newPagesRef, {...updateData, uid, name, links})


    const itemId = newPagesRef.key


    const itemsRef = ref(database, `users/${uid}/items`);
    const newItemRef = push(itemsRef)
    
    await set(newItemRef, {itemId, name})

    console.log("Data written successfully!")

    return {...updateData, id: itemId}
} 

export const updateItem = async ({editId, ...data}) => {
    
    const database = getDatabase()
    

    const itemsRef = ref(database, `pages/${editId}`)

    

    let {links, ...updateData} = data
    links = links.map(({icon, ...link}) => link)

    

    await update(itemsRef, {links, ...updateData})

    console.log("Data updated successfully")

    return {editId, updateItem: {links, ...updateData}}
}

export const removeItem = async (itemId, uid) => {

    if(itemId) {
        
        const database = getDatabase()
        

        const itemRef = ref(database, `pages/${itemId}`)

        const userItemRef = ref(database, `users/${uid}/items/${itemId}`)

        await remove(itemRef)

        await remove(userItemRef)

        console.log('Deleted successfull!')



        return itemId
    }

    return null
}