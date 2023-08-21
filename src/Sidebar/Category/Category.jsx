import Input from '../../components/Input'
import './Category.css'

function Category({ handleChangeCategory }) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <label className='sidebar-label-container'>
          <input onChange={handleChangeCategory} type='radio' value='' name='test'/>
          <span className='checkmark'></span>All
        </label>
        <Input
          onChange={handleChangeCategory}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          onChange={handleChangeCategory}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          onChange={handleChangeCategory}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          onChange={handleChangeCategory}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  )
}

export default Category