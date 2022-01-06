const onClick = () => {
    console.log('My click')
    return (
        
        document.getElementById('root').insertAdjacentHTML('beforeend', `<div>Ez a tetszőleges szöveg</div>`)
    )
}

const MyButton = (props) => {
    return (
        <button className='myButton' onClick={onClick}>{props.text}</button>
    )
}
export default MyButton