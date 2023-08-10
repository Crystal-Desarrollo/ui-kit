import PropTypes from 'prop-types';
import currency from 'currency.js';
import {Typography} from '@mui/material';

function Money({money, ...rest}) {
  return (
    <Typography fontSize={14} {...rest}>
      {currency(money).format()}
    </Typography>
  );
}

Date.propTypes = {
  money: PropTypes.number.isRequired,
};

export default Money;
