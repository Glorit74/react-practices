import MyButton from "./MyButton"


const ButtonList = () => {
    const elements =[1 ,2 , 3, 5, 6, 7, 8, 9, 10] 
    return (
        <ul>
            {elements.map((value, index) => {
                return <li key={index}><MyButton text={`${value} Click me`}/></li>
            })}
        </ul>
    )
}

export default ButtonList
