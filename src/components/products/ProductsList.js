import { useFetchProductsQuery, useAddProductMutation } from '../../store';
import Skeleton from '../Skeleton';
import Button from '../Button';
import ProductsListItem from './ProductsListItem';  

function ProductsList({productType}) {
  const { isLoading, data, error } = useFetchProductsQuery(productType);
  const [addProduct, results] = useAddProductMutation();
 
  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const content = data.map((product) => {

    return <ProductsListItem key={product.id} product={product}>
      List of Products
    </ProductsListItem>
  });

  const handleAddProduct = () => {
    addProduct(productType);
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Products In {productType.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddProduct}>
          + Add Product
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-center">
        {content}
      </div>
    </div>
  );
}

export default ProductsList;
