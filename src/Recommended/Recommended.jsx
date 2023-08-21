import Button from '../components/Button'
import './Recommended.css'

function Recommended({ handleClick, selectedCompany}) {
  return (<>
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
        <Button handleClick={handleClick} value="" title="All products" selectedCompany={selectedCompany} />
        <Button handleClick={handleClick} value="Nike" title="Nike" selectedCompany={selectedCompany} />
        <Button handleClick={handleClick} value="Adidas" title="Addidas" selectedCompany={selectedCompany} />
        <Button handleClick={handleClick} value="Puma" title="Puma" selectedCompany={selectedCompany} />
        <Button handleClick={handleClick} value="Vans" title="Vans" selectedCompany={selectedCompany} />
      </div>
    </div>
  </>
  )
}

export default Recommended