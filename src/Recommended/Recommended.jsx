import Button from '../components/Button'
import './Recommended.css'

function Recommended({ handleClick }) {
  return (<>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <Button handleClick={handleClick} value="" title="All products" />
        <Button handleClick={handleClick} value="Nike" title="Nike" />
        <Button handleClick={handleClick} value="Adidas" title="Addidas" />
        <Button handleClick={handleClick} value="Puma" title="Puma" />
        <Button handleClick={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  </>
  )
}

export default Recommended