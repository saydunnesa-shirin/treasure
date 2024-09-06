import ExpandablePanel from '../ExpandablePanel';
import { useRemoveProductTypeMutation } from '../../store';
import Button from '../Button';
import { GoTrashcan } from 'react-icons/go';
import ProductsList from '../products/ProductsList';

function ProductTypesListItem({productType}) {

  const [removeProductType, results] = useRemoveProductTypeMutation();
  const handleRemoveProductType = () => {
    removeProductType(productType);
  }
  const header = (
    <>
      <Button loading={results.isLoading} onClick={handleRemoveProductType} className="mr-2">
        <GoTrashcan></GoTrashcan>
      </Button>
      {productType.name}
    </>)

  return (
    <ExpandablePanel key={productType.id} header={header}>
      <ProductsList productType={productType}></ProductsList>
    </ExpandablePanel>
  )
}

export default ProductTypesListItem
