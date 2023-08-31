import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useId } from 'react';
import PropTypes from 'prop-types';

function renderItems(data = []) {
  return data.map(item => (
    <MenuItem value={item.id} key={item.id}>
      {item.name}
    </MenuItem>
  ));
}

const Select = ({
  data,
  name,
  labelText = '',
  required = false,
  disabled = false,
  render,
  children,
  ...rest
}) => {
  const labelId = useId();
  const renderFunction = render || renderItems;
  const { control } = useFormContext();
  const options = data?.data || data;

  return (
    <FormControl fullWidth>
      <InputLabel id={labelId} required={required} disabled={disabled}>
        {labelText}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <MuiSelect
            required={required}
            labelId={labelId}
            label={labelText}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={ref}
            value={value || ''}
            name={name}
            disabled={disabled}
            {...rest}
          >
            {children}
            {options.length > 0 && renderFunction(options)}
          </MuiSelect>
        )}
      />
    </FormControl>
  );
};

Select.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  createOption: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  render: PropTypes.func,
  children: PropTypes.node,
};

Select.defaultProps = {
  data: [],
};

export default Select;
