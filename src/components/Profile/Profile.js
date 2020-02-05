import React from 'react';
import styled from 'styled-components';

const StyledProfile = styled.div`
  h1 {
    font-size: 38px;
    font-weight: bold;
  }

  h2 {
    color: #778492;
    font-family: Arial, sans-serif;
    font-size: 24px;
  }

  ul {
    list-style-type: none;
    padding: 0px;

    li {
      display: inline;
    }
  }

  @media (max-width: 761px) {
    text-align: center;
  }
`;

const Profile = () => (
  <StyledProfile>
    <h1>James Lee</h1>
    <h2>Web App Developer</h2>
    <ul>{/* TODO: social icon list */}</ul>
  </StyledProfile>
);

export default Profile;
