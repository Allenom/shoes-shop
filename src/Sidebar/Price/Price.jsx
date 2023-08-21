import Input from '../../components/Input'
import './Price.css'

function Price({ handleChangePrice, checked }) {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <Input
        checked={checked}
        onChange={handleChangePrice}
        value={0}
        title="All"
        name="test2"
      />
      <Input
        onChange={handleChangePrice}
        value={50}
        title="$0 - 50"
        name="test2"
      />
      <Input
        onChange={handleChangePrice}
        value={100}
        title="$50 - 100"
        name="test2"
      />
      <Input
        onChange={handleChangePrice}
        value={150}
        title="$100 - 150"
        name="test2"
      />
      <Input
        onChange={handleChangePrice}
        value={200}
        title="Over $150"
        name="test2"
      />

    </div>
  )
}

export default Price