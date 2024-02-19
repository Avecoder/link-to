
import {Icons} from './'
import {motion} from 'framer-motion'

const IconsButton = ({Icon, active, setValue, red}) => {
    console.log(active)

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${red ? 'bg-[#FC9292]' : `${active ? 'dark:bg-[#222] bg-[#fff] border-[1px] dark:border-white border-[#000]' : 'bg-black'}`} rounded-md w-11 h-11 flex justify-center items-center`}
            onClick={() => setValue()}
        >
            <Icons small Icon={Icon}/>
        </motion.button>
    )
}

export default IconsButton