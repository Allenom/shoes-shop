import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'

function Sidebar({handleChangeCategory, handleChangePrice, handleChangeColor, checked}) {
  return ( <>
  <section className='sidebar'>
    <div className='logo-container'>
    <h1>🛒</h1>
    </div>

    <Category handleChangeCategory={handleChangeCategory} checked={checked} />
    <Price handleChangePrice={handleChangePrice} checked={checked} />
    <Colors handleChangeColor={handleChangeColor} checked={checked} />

  </section>
  </>
  )
}

export default Sidebar