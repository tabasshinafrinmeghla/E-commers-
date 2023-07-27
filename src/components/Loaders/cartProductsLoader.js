import { getShoppingCart } from "../../../ema-john-resources-main/utilities/fakedb";

const cartProductsLoader = async () =>{
const loadedProducts = await fetch ('products.json');
const products = await loadedProducts.json();

// if cart data is in database,you have to use async await 
const storeCart =getShoppingCart();
const savedCart =[];
console.log(storeCart);

for(const id in storeCart){
  const addedProduct = products.find(products => products.id ===id)
  if (addedProduct){
    const quantity = storeCart[id];
    addedProduct.quantity =quantity;
    savedCart.push(addedProduct);
  }

}

return savedCart;
}

export default cartProductsLoader;