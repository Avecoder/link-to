
import {Icons} from './'
import {motion} from 'framer-motion'

const IconsButton = ({Icon, active, setValue, red}) => {
    

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${red ? 'bg-[#FC9292]' : 'bg-black'} rounded-md w-11 h-11 flex justify-center items-center ${active ? ' bg-[#222]' : ''}`}
            onClick={() => setValue()}
        >
            <Icons small Icon={Icon}/>
        </motion.button>
    )
}

export default IconsButton