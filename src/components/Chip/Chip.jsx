import { Chip as MuiChip } from '@mui/material';
import PropTypes from 'prop-types';

export function Chip({ label, backgroundColor, color, icon, sx }) {
  const Icon = icon;

  return (
    <MuiChip
      label={label}
      icon={icon ? <Icon color={color} sx={{ fontSize: '18px' }} /> : null}
      sx={{
        height: 'auto',
        padding: '4px 0',
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: color,
        backgroundColor: backgroundColor,
        fontSize: '16px',
        ...sx,
      }}
    />
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.elementType,
  sx: PropTypes.object,
};

Chip.defaultProps = {
  color: '#fff',
  backgroundColor: 'success.main',
  icon: null,
};
