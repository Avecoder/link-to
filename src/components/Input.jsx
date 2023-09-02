


const Input = ({placeholder, value, setvalue, right, nopad, empty, notborder, black}) => {


    return (
        <input 
            type="text" 
            placeholder={placeholder}
            className={`dark:bg-black dark:text-white input ${notborder ? '' : 'border'} ${empty ? 'text-red-400 border-red-400 placeholder-red-400' : 'text-white'} ${black && 'input-black' } rounded-md py-1.5 w-full ${right ? 'text-right' : 'text-left'} ${nopad ? 'px-0' : 'px-4'}`}
            value={value}
            onChange={e => setvalue(e.target.value)}
        />
    )
}


export default Input