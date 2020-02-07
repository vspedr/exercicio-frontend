import PropTypes from 'prop-types';

const TProjectItemProps = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }).isRequired
};

export default TProjectItemProps;
