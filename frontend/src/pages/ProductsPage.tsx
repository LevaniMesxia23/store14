import Products from '../components/Products';
import Footer from '../components/Footer'
import FilterSort from '../components/FilterSort'

function ProductsPage() {
  return (
    <div>
      <FilterSort />
      <Products/>
      <Footer/>
    </div>
  )
}

export default ProductsPage