import { Paper } from '@mui/material';
import { Loader } from '../Loader';
import PropTypes from 'prop-types';

const Box = ({
  children,
  style,
  sx,
  component,
  noSpacing = false,
  isLoading = false,
  ...rest
}) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        padding: !noSpacing ? '1rem' : 0,
        minHeight: isLoading ? '100px' : 'auto',
        borderRadius: '8px',
        ...style,
        ...sx,
      }}
      component={component}
      {...rest}
    >
      {isLoading && <Loader />}
      {children}
    </Paper>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  sx: PropTypes.object,
  component: PropTypes.string,
  noSpacing: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Box;
