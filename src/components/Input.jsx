function Input({ onChange, value, title, name, color }) {
  return (
    <label className='sidebar-label-container'>
      <input onChange={onChange} type='radio' value={value} name={name} />
      <span className='checkmark' style={{ backgroundColor: color }}></span>
      {title}
    </label>
  )
}

export default Input