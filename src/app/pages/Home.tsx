import { Container } from '../components/Container';

const Home: React.FC = () => {
  return (
    <>
      <Container title="dall'Agocchie's Sidesword"></Container>
      <h1>dall'Agocchie</h1>
      <p>
        {' '}
        A study guide for{' '}
        <abbr title="Academy of European Medieval Martial Arts">
          AEMMA
        </abbr>{' '}
        rank challenges on the Bolognese traditions.
      </p>
    </>
  );
};

export default Home;
