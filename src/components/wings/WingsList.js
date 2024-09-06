import { useFetchWingsQuery, useAddWingMutation } from '../../store';
import Skeleton from '../Skeleton';
import Button from '../Button';
import WingsListItem from './WingsListItem';  

function WingsList() {
  const { isLoading, data, error } = useFetchWingsQuery();
  const [addWing, results] = useAddWingMutation();
 
  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  const content = data.map((wing) => {

    return <WingsListItem key={wing.id} wing={wing}>
      List of Product types
    </WingsListItem>
  });

  const handleAddWing = () => {
    addWing();
  }

  return (
    <div>
      <div className='flex p-2 justify-between items-center'>
        <h2>Wings</h2>
       <Button onClick={handleAddWing}>
         + Add Wings
       </Button>
      </div>
      <div className='p-2'>
        {content}
      </div>
    </div>
  );
}

export default WingsList;
