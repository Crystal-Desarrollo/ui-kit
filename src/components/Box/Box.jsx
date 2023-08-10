import {Paper} from '@mui/material';
import {Loader} from '../Loader';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';

export const Box = ({children, style, sx, component, onSubmit, mb, mt, isLoading = false, ...rest}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: 'relative',
        padding: '1rem',
        marginBottom: mb ? theme.spacing(mb) : 0,
        marginTop: mt ? theme.spacing(mt) : 0,
        minHeight: isLoading ? '100px' : 'auto',
        borderRadius: '8px',
        ...style,
        ...sx,
      }}
      component={component}
      onSubmit={onSubmit}
      {...rest}
    >
      {isLoading && <Loader />}
      {children}
    </Paper>
  );
};

Box.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  sx: PropTypes.object,
  component: PropTypes.elementType,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
};
