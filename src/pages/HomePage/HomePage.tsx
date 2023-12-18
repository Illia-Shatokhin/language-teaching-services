import { FC, ReactElement } from 'react';
import { Container, Title, StyledImage } from './HomePage.styled';
import example from '../../assets/example.png';

const HomePage: FC = (): ReactElement => {
  return (
    <Container>
      <Title>Home Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default HomePage;
