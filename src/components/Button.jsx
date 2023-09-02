
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Button = ({children, setValue, param, small, red, black}) => {
    const [color, setColor] = useState('bg-green-100 text-black')

    useEffect(() => {
        if(red) setColor('bg-rose-400 text-white')
        else if(black) setColor('bg-black text-white dark:text-black dark:bg-green-100')
    }, [])

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${small ? 'text-sm' : 'text-base'} ${color} flex gap-x-3 w-fit items-center button  px-4 py-2 rounded-md cursor-pointer  font-bold `}
            onClick={() => setValue && setValue(param)}
        >
            {children}
        </motion.button>
    )
}

export default Button