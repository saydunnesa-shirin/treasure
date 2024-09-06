import ExpandablePanel from '../ExpandablePanel';
import { useRemoveWingMutation } from '../../store';
import Button from '../Button';
import { GoTrashcan } from 'react-icons/go';
import ProductTypesList from '../productTypes/ProductTypesList';

function WingsListItem({wing}) {

  const [removeWing, results] = useRemoveWingMutation();
  const handleRemoveWing = () => {
    removeWing(wing);
  }
  const header = (
    <>
      <Button loading={results.isLoading} onClick={handleRemoveWing} className="mr-2">
        <GoTrashcan></GoTrashcan>
      </Button>
      {wing.name}
    </>)

  return (
    <ExpandablePanel key={wing.id} header={header}>
        <ProductTypesList wing={wing}></ProductTypesList>
    </ExpandablePanel>
  )
}

export default WingsListItem
