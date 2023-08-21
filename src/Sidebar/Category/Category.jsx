import Input from '../../components/Input'


function Category({ handleChangeCategory, checked }) {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
      <div>
        <Input
          checked={checked}
          onChange={handleChangeCategory}
          value=""
          title="All"
          name="test"
        />
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