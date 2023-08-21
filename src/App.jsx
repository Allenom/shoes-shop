import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import './index.css'

//Database
import products from './db/data'
import Card from "./components/Card"

function App() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedCompany, setSelectedCompany] = useState("")

  // -----All Input defaultChecked-----
  const [checked, setChecked] = useState(true);

  // -----Input filter-----
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
    setChecked(false)
  }

  const filteredItems = products.filter(product =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  // -----Radio filters-----
  const handleChangeCategory = event => {
    setSelectedCategory(event.target.value)
  }
  const handleChangePrice = event => {
    setSelectedPrice(event.target.value)
  }
  const handleChangeColor = event => {
    setSelectedColor(event.target.value)
  }

  // -----Button filter-----
  const handleClick = event => {
    setSelectedCompany(event.target.value)
  }

  // -----Combining filter-----
  function fillteredData(product) {
    let filteredProducts = product

    // Filtering Input Items

    filteredProducts = filteredItems

    // Selected Filter

    filteredProducts = filteredProducts.filter(
      (product) =>
        (product.category === selectedCategory || selectedCategory === "") &&
        (product.color === selectedColor || selectedColor === "") &&
        (product.company === selectedCompany || selectedCompany === "") &&

        ((parseInt(selectedPrice) - 50 <= product.newPrice && product.newPrice <= parseInt(selectedPrice)) ||
        selectedPrice == 0 ||
        (parseInt(selectedPrice) == 200 && product.newPrice > 150))
    )


    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }

  const result = fillteredData(products)

  return (<>
    <Sidebar handleChangeCategory={handleChangeCategory} handleChangePrice={handleChangePrice} handleChangeColor={handleChangeColor} checked={checked} />
    <Navigation query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} selectedCompany={selectedCompany} />
    <Products result={result} />
  </>)
}

export default App;
