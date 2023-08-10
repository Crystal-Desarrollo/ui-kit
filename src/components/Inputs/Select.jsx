import {FormControl, InputLabel, MenuItem} from '@mui/material';
import MuiSelect from '@mui/material/Select';
import PropTypes from 'prop-types';
import {useId} from 'react';

export function renderItems(data = []) {
  return data.map(item => {
    const name = item.name || item.label || item.code;
    return (
      <MenuItem value={item.id} key={item.id}>
        {name}
      </MenuItem>
    );
  });
}

export const Select = ({
  onChange,
  value,
  data,
  name,
  labelText = '',
  required = false,
  render,
  disabled = false,
  fullWidth = true,
  children,
  ...rest
}) => {
  const labelId = useId();
  const renderFunction = render || renderItems;

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={labelId} required={required}>
        {labelText}
      </InputLabel>
      <MuiSelect
        displayEmpty
        required={required}
        labelId={labelId}
        label={labelText}
        onChange={onChange}
        value={value || ''}
        name={name}
        disabled={disabled}
        {...rest}
      >
        {children}
        {data.length > 0 && renderFunction(data)}
      </MuiSelect>
    </FormControl>
  );
};

Select.propTypes = {
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  data: PropTypes.array,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  createOption: PropTypes.func,
};

Select.defaultProps = {
  data: [],
};
