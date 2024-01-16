export default function TabButton({children}){
    function handelClick(){
        console.log("Hello World!!!!!")
    }
    return(
        <li>
            <button onClick={handelClick}>
                {children}
            </button>
        </li>
    )
}