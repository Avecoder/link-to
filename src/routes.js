import Main from './pages/Main'
import Login from './pages/Login'
import Links from './pages/Links'
import Create from './pages/Create'


export default [
    {path: '/:title', Component: Main, name: 'main'},
    {path: '/login', Component: Login, name: 'login'},
    {path: '/create', Component: Create, name: 'create'},
    {path: '/', Component: Links, name: 'links'},
]