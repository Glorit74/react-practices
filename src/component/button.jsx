

const Button = ({buttonText, bgColor, color, onClick}) => {
    
      return (
        <button className='btn' style={{backgroundColor: bgColor, color: color}} onClick={onClick}>{buttonText}</button>
    )
}

export default Button