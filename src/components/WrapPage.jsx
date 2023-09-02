import {motion} from 'framer-motion'
import { Children } from 'react'



const WrapPage = ({children}) => {

    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
}

export default WrapPage