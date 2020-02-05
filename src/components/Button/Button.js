import styled from 'styled-components';

const colors = {
  primary: '#54ba4e',
  secondary: '#479FC8'
};

export default styled.button.attrs({ className: 'btn' })`
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 16px;
  background: ${({ secondary }) =>
    secondary ? colors.secondary : colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
`;
