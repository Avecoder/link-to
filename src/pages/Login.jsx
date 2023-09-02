import { useEffect } from 'react'
import {GoogleButton, WrapPage} from '../components'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Login = () => {

    const navigate = useNavigate()

    const {data} = useSelector(state => state.user)

    const auth = getAuth()

    useEffect(() => {
        if(data) navigate('/')
    }, [data])

    const login = async () => {
        
        const provider = new GoogleAuthProvider()

        const {user} = await signInWithPopup(auth, provider)

        if(user) navigate('/')

    }

    return (
        <WrapPage>
            <div className="login-wrap flex items-center justify-center  mx-auto dark:text-white px-10">
                <div className="flex flex-col sm:gap-y-10 gap-y-12 text-center">
                    <h1 className="sm:text-4xl text-3xl font-bold">Shortly Link, Welcome 😊.</h1>
                    <p>
                        Our service provides the ability to shorten links and share them on your pages on social networks or other places. By shortening URLs, you can convey the information you need with short links that take up less space and are easier to remember.
                    </p>
                    <p>
                        Register and start sharing information in a more convenient and efficient way!
                    </p>

                    <div className='flex justify-center flex-col sm:flex-row items-center gap-x-8 gap-y-5'>
                        <span onClick={() => login()}>
                            <GoogleButton>Sign in with google</GoogleButton>
                        </span>
                        <span>or</span>
                        <Link to='/' className='font-medium underline '>Go to home page</Link>
                    </div>
                </div>
            </div>
        </WrapPage>
        
    )
}

export default Login
