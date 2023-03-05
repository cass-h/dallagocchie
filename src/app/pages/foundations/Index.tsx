import { FC } from 'react';
import { DrawerContainer } from '../../components/DrawerContainer';

const FoundationsIndex: FC = () => {
  return (
    <>
      <DrawerContainer title={'Foundations'}>
        <h1>Foundations</h1>
        <p>
          In this section you will find the foundations of dall'Agocchie's
          system, including the properties of the sword, how to hold it, the
          directions, the steps, and the definition and theory of tempi.
        </p>
      </DrawerContainer>
    </>
  );
};
/* TODO: The system foundations
 on the sword
 on the steps
 on directions
	 mandritto vs riverso
	 opponent's side vs your side
 tempo
	 time vs opportunity
*/
export default FoundationsIndex;
