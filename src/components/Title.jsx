import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography} from '@mui/material';

export function Title({variant = 'h2', color = 'primary', ...props}) {
  return (
    <Typography component="h2" variant={variant} color={color} fontSize={18} {...props}>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export function Subtitle({children, ...props}) {
  return (
    <Title fontSize={16} {...props}>
      {children}
    </Title>
  );
}

export default Title;
