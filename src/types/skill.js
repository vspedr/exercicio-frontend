import PropTypes from 'prop-types';

export const TSkillItemProps = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired
};

export const TProgressBarProps = {
  progress: PropTypes.string.isRequired
};
