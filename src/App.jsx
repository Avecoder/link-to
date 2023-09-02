import {AppRouter, Loader} from './components'
import { onAuthStateChanged } from 'firebase/auth'
import { getDatabase, ref as sRef, get, query, orderByChild } from "firebase/database"
import { auth } from './firebase'
import { setUser } from './redux/slices/user'
import { fetchUserItems } from './redux/slices/item'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux' 

function App() {

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    
    
    const unsubscribe  = onAuthStateChanged(auth, async (currentUser) => {
      if(currentUser) {

        const {uid, email, accessToken, displayName} = currentUser


        dispatch(setUser({
          uid,
          email,
          token: accessToken,
          displayName
        }))

        dispatch(fetchUserItems({uid}))

      }

      setLoading(false)

    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
      {
        loading
        ?
        <Loader /> 
        :
        <AppRouter />
      }
      
    </>
  )
}

export default App
