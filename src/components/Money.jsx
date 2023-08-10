import PropTypes from 'prop-types';
import {Typography} from '@mui/material';

export function Money({money, ...rest}) {
  return (
    <Typography component='span' fontSize={14} {...rest}>
      {Number(money).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}
    </Typography>
  );
}

Money.propTypes = {
  money: PropTypes.number.isRequired,
};