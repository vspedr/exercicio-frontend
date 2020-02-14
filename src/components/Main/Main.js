import styled from 'styled-components';
import { Container } from '../Container';

const Main = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  margin: auto;
  padding: 60px 16px;

  @media (min-width: 769px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export default Main;
