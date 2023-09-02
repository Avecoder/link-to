import {motion} from 'framer-motion'


const GoogleButton = ({children, onClick}) => {

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="shadow-md rounded-md bg-black text-white flex px-4 py-2.5 items-center w-fit gap-x-5"
        >
            <img src="./google.svg" alt="google" />
            <span>{children}</span>
        </motion.button>
    )
}


export default GoogleButton