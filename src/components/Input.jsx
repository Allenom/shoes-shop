import './Input.css'

function Input({ onChange, value, title, name, color, checked }) {
  return (
    <label className='sidebar-label-container'>
      <input onChange={onChange} type='radio' value={value} name={name} defaultChecked={checked} />
      <span className='checkmark' style={{ backgroundColor: color }}></span>
      {title}
    </label>
  )
}

export default Input