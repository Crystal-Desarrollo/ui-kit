import {
  FormControl,
  InputLabel,
  Stack,
  Switch as MuiSwitch,
  Typography,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import { useId } from 'react';

const Switch = ({
  defaultChecked = false,
  name,
  labelText = '',
  leftText = 'No',
  rightText = 'Si',
  ...rest
}) => {
  const labelId = useId();
  const { control } = useFormContext();

  return (
    <FormControl style={{ marginTop: '8px', marginLeft: '4px' }} {...rest}>
      <InputLabel
        id={labelId}
        shrink
        sx={{
          overflow: 'visible',
          textOverflow: 'initial',
          transform: 'translate(0px, -12px)',
        }}
      >
        {labelText}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultChecked}
        render={({ field }) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="start"
            pt={1}
            pl={1}
          >
            <Typography variant="caption">{leftText}</Typography>
            <MuiSwitch
              ref={field.ref}
              onChange={e => field.onChange(e.target.checked)}
              checked={!!field.value}
              name={name}
            />
            <Typography variant="caption">{rightText}</Typography>
          </Stack>
        )}
      />
    </FormControl>
  );
};

Switch.propTypes = {
  defaultChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  leftText: PropTypes.string,
  rightText: PropTypes.string,
};

export default Switch;
