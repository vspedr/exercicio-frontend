import styled from 'styled-components';
import { Container } from '../Container';

const Main = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0px auto;
  padding: 0px;

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export default Main;
