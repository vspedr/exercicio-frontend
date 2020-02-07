import React from 'react';
import styled from 'styled-components';
import { TSkillItemProps, TProgressBarProps } from '../../types';

const StyledProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
  background: #e8e8e8;

  .progress-bar__current {
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: ${({ progress }) => progress};
    height: 16px;
    background: #66cb8c;
  }
`;

const ProgressBar = ({ progress }) => {
  return (
    <StyledProgressBar progress={progress}>
      <div className="progress-bar__current" />
    </StyledProgressBar>
  );
};

ProgressBar.propTypes = TProgressBarProps;

const StyledSkillItem = styled.div`
  h3,
  h4 {
    display: inline-block;
  }

  h3 {
    font-size: 16px;
    color: #778492;
    font-weight: bold;
  }

  h4 {
    float: right;
    font-size: 14px;
    color: #ccd1d6;
    font-weight: normal;
  }
`;

const SkillItem = ({ name, level, progress }) => (
  <StyledSkillItem>
    <h3>{name}</h3>
    <h4>{level}</h4>
    <ProgressBar progress={progress} />
  </StyledSkillItem>
);

SkillItem.propTypes = TSkillItemProps;

export default SkillItem;
