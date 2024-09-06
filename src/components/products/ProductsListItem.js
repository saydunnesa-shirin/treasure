import { useRemoveProductMutation } from '../../store';
import Button from '../Button';
import { GoTrashcan } from 'react-icons/go';

function ProductsListItem({product}) {

  const [removeProduct, results] = useRemoveProductMutation();
  const handleRemoveProduct = () => {
    removeProduct(product);
  }
  return (
    // <div className='flex justify-start items-start'>
    //   <Button loading={results.isLoading} onClick={handleRemoveProduct} className="mr-2">
    //     <GoTrashcan></GoTrashcan>
    //   </Button>
    //   {product.name}
    // </div>

    <div onClick={handleRemoveProduct} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={product.url} alt="random pic" />
      <h4>{product.name}</h4>
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-3xl" />
      </div>
    </div>

  )
}

export default ProductsListItem
