import {FormControl, FormControlLabel, Switch as MuiSwitch} from '@mui/material';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';

export const ControlledSwitch = ({
  control,
  defaultChecked = false,
  name,
  labelText = '',
  labelPlacement = 'end',
  ...rest
}) => {
  return (
    <FormControl>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultChecked}
        render={({field}) => (
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

ControlledSwitch.propTypes = {
  control: PropTypes.object.isRequired,
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  fullWidth: PropTypes.bool,
  labelPlacement: PropTypes.string,
};
