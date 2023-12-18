import { FC, ReactElement } from 'react';
import { Container, Block, Title, StyledLink } from './TeachersPage.styled';

const TeachersPage: FC = (): ReactElement => {
  return (
    <Container>
      <Block>
        <Title>Teachers Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default TeachersPage;
