import {motion} from 'framer-motion'


const AddButton = ({setValue}) => {
    return (

        <
            motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" flex items-center bg-black justify-center py-3 px-5 rounded-md dark:bg-[#111]" 
            onClick={setValue}
        >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11H15M11 15V7M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </motion.button>
    )
}

export default AddButton