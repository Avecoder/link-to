import {Button} from './'
import {useRef} from 'react'

const InputFile = ({children, handleFileChange}) => {

    const inputRef = useRef(null)


    return (
        <div className='z-10'>
            <input type="file" hidden ref={inputRef} onChange={handleFileChange}/>
            <Button black setValue={() => inputRef.current.click()}>{children}</Button>
        </div>
    )
}


export default InputFile