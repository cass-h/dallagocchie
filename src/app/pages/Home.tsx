import { DrawerContainer } from '../components/DrawerContainer';

const Home: React.FC = () => {
  return (
    <>
      <DrawerContainer title="Sidesword Schollar">
        {' '}
        <h1>dall'Agocchie</h1>
        <p>
          A study guide and companion application on the 16th century fencing
          system of Giovanni dall'Agocchie di Balogna, comprising of the sword
          in one hand, the sword and dagger, and the sword and cape.
        </p>
      </DrawerContainer>
    </>
  );
};

export default Home;
