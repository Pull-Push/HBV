import { products } from '../data/products';
import '../Shop.css';

function Shop(){
    return(
        <div className='shop-page'>
            <div className='shop-header'>
                <h1>Choose Your Class</h1>
                <p>13 unique coffee blends created for every type of hero</p>
            </div>

            <div className='products-grid'>
                {}

            </div>
        </div>
    )
}

export default Shop;