import { useFetchProductTypesQuery, useAddProductTypeMutation } from '../../store';
import Skeleton from '../Skeleton';
import Button from '../Button';
import ProductTypesListItem from './ProductTypesListItem';  

function ProductTypesList({wing}) {
  const { isLoading, data, error } = useFetchProductTypesQuery(wing);
  const [addProductType, results] = useAddProductTypeMutation();
 
  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const content = data.map((productType) => {

    return <ProductTypesListItem key={productType.id} productType={productType}>
      List of Product types
    </ProductTypesListItem>
  });

  const handleAddProductType = () => {
    addProductType(wing);
  }

  return (
    <div>
      <div className='flex p-2 justify-between items-center'>
        <h2>ProductTypes</h2>
       <Button onClick={handleAddProductType}>
         + Add Product Types
       </Button>
      </div>
      <div className='p-2'>
        {content}
      </div>
    </div>
  );
}

export default ProductTypesList;
