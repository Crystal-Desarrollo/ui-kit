import {FormControl} from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export const TextField = ({
  name,
  value,
  onChange,
  labelText = '',
  required,
  fullWidth = true,
  disabled = false,
  InputProps,
  InputLabelProps,
  type = 'text',
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth} {...rest}>
      <MuiTextField
        type={type}
        required={required}
        label={labelText}
        onChange={onChange}
        value={value || ''}
        name={name}
        disabled={disabled}
        InputProps={InputProps}
        InputLabelProps={InputLabelProps}
      />
    </FormControl>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
