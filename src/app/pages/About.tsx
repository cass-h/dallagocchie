import { Container } from '../components/Container';

const About: React.FC = () => {
  return (
    <>
      <Container title={'About'}></Container>
      <h1>About</h1>
      <p>TODO: Add disclaimer</p>
      <p>
        This website is a work in progress, critereon of testing are not
        determined by me and are subject to change. This app is intended as a
        personal study guide and not an educational tool of its own merits.
      </p>
    </>
  );
};

export default About;
