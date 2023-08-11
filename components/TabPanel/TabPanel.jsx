import PropTypes from 'prop-types';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  index: PropTypes.number,
  value: PropTypes.any,
  children: PropTypes.node,
};
