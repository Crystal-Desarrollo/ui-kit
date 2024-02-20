import { FormControl, TextField as MuiTextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const TextField = ({
  name,
  labelText = '',
  required = false,
  fullWidth = true,
  InputProps = null,
  InputLabelProps = null,
  parentRef = null,
  multiline = false,
  rows = 1,
  helperText = '',
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <FormControl fullWidth={fullWidth} {...rest}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <MuiTextField
            helperText={helperText}
            multiline={multiline}
            rows={rows}
            required={required}
            label={labelText}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={parentRef || ref}
            value={value ?? ''}
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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  ref: PropTypes.object,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  helperText: PropTypes.string,
  InputProps: PropTypes.object,
  InputLabelProps: PropTypes.object,
  parentRef: PropTypes.object,
};

export default TextField;
