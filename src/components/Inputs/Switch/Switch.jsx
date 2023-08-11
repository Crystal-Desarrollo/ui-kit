import {
  FormControl,
  FormControlLabel,
  Switch as MuiSwitch,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';

const Switch = ({
  defaultChecked = false,
  name,
  labelText = '',
  labelPlacement = 'end',
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultChecked}
        render={({ field }) => (
          <FormControlLabel
            labelPlacement={labelPlacement}
            control={
              <MuiSwitch
                ref={field.ref}
                onChange={e => field.onChange(e.target.checked)}
                checked={!!field.value}
                name={name}
                {...rest}
              />
            }
            label={labelText}
          />
        )}
      />
    </FormControl>
  );
};

Switch.propTypes = {
  control: PropTypes.object.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  fullWidth: PropTypes.bool,
  labelPlacement: PropTypes.string,
};

export default Switch;
