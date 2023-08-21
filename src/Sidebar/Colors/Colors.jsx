import Input from '../../components/Input'
import './Colors.css'

function Colors({ handleChangeColor }) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChangeColor} type='radio' value='' name='test1' />
        <span className='checkmark all'></span>All
      </label>
      <Input
        onChange={handleChangeColor}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        onChange={handleChangeColor}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        onChange={handleChangeColor}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        onChange={handleChangeColor}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className='sidebar-label-container'>
        <input className='color-white-btn' onChange={handleChangeColor} type='radio' value='white' name='test1' />
        <span className='checkmark' style={{ background: "white", border: "2px solid black", color: "black" }} cssClass="danger"></span>White
      </label>
    </div>
  )
}

export default Colors