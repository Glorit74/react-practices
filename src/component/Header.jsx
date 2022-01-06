import Button from './Button'


const Header = (props) => {
    
    return (
        <header>
            <h1>{props.title}</h1>
            <Button color='red' buttonText='Adding'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
