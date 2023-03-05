import { Container } from '../components/Container';

const About: React.FC = () => {
  return (
    <>
      <Container title={'About'}></Container>
      <h1>About</h1>
      <p>TODO: Add disclaimer</p>
      <p>
        This website is a work in progress. This app is intended as a personal
        study guide, and companion app to direct instruction. It is not an
        educational tool of its own merits, nor a direct translation, but
        describes an interpretation and understanding of the system, and as such
        may be altered as my understanding shifts.
      </p>
    </>
  );
};

export default About;
