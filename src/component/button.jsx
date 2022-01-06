

const Button = ({buttonText, bgColor, color, onClick}) => {
    
      return (
        <button style={{backgroundColor: bgColor, color: color}} onClick={onClick}>{buttonText}</button>
    )
}

export default Button