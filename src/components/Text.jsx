import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';

export function Text({variant = 'h2', ...props}) {
  return (
    <Typography component="h3" variant={variant} {...props}>
      {props.children}
    </Typography>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default Text;
