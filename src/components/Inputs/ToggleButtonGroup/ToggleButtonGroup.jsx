import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ToggleButtonGroup as MuiTBG } from '@mui/material';

const ToggleButtonGroup = ({ name, children, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <MuiTBG
          value={field.value}
          onChange={field.onChange}
          name={name}
          exclusive
          {...rest}
        >
          {children}
        </MuiTBG>
      )}
    />
  );
};

ToggleButtonGroup.propTypes = {
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ToggleButtonGroup;
