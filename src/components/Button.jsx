import './Button.css'

const choosenfnc = (value,  selectedCompany) => {
  if (value===selectedCompany) return 'btns btns-choosen'
  return 'btns'
}

function Button({handleClick, value, title, selectedCompany}) {
  return (
    <button onClick={handleClick} value={value} className={choosenfnc(value, selectedCompany)} name='products'>{title}</button>
  )
}

export default Button