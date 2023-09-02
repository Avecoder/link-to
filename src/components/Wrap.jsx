
const Wrap = ({children, classes}) => {


    return (
        <div className={`wrapper card-wrap rounded-xl px-5 py-5 flex ${classes}` }>
            {children}
        </div>
    )
} 

export default Wrap