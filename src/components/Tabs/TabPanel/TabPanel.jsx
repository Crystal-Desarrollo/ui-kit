import PropTypes from 'prop-types';

export default function TabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && children}</>;
}

TabPanel.propTypes = {
  index: PropTypes.number,
  value: PropTypes.any,
  children: PropTypes.node,
};
