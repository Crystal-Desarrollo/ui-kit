import {FormControl, TextField as MuiTextField} from '@mui/material';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';

export const ControlledTextField = ({
  control,
  name,
  labelText = '',
  required,
  fullWidth = true,
  InputProps,
  InputLabelProps,
  parentRef,
  multiline,
  rows,
  helperText,
  ...rest
}) => {
  return (
    <FormControl fullWidth={fullWidth} {...rest}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value, name, ref}}) => (
          <MuiTextField
            helperText={helperText}
            multiline={multiline}
            rows={rows}
            required={required}
            label={labelText}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={parentRef || ref}
            value={value || ''}
            name={name}
            InputProps={InputProps}
            InputLabelProps={InputLabelProps}
            {...rest}
          />
        )}
      />
    </FormControl>
  );
};

ControlledTextField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  ref: PropTypes.object,
};
