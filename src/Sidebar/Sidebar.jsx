import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'

function Sidebar({handleChangeCategory, handleChangePrice, handleChangeColor}) {
  return ( <>
  <section className='sidebar'>
    <div className='logo-container'>
    <h1>🛒</h1>
    </div>

    <Category handleChangeCategory={handleChangeCategory} />
    <Price handleChangePrice={handleChangePrice} />
    <Colors handleChangeColor={handleChangeColor} />

  </section>
  </>
  )
}

export default Sidebar