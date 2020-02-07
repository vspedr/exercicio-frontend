import styled from 'styled-components';

const Section = styled.section.attrs({ className: 'section' })`
  background: #ffffff;
  padding: 32px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 32px;
    color: #545e69;
    font-size: 24px;
  }
`;

export default Section;
