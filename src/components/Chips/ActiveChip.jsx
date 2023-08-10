import {CancelRounded, CheckCircleRounded} from '@mui/icons-material';
import {Chip} from '@mui/material';

export function ActiveChip({isActive, label, bgColor, color}) {
  return (
    <Chip
      label={label ? label : isActive ? 'Activo' : 'Inactivo'}
      icon={
        isActive ? (
          <CheckCircleRounded color="#fff" sx={{fontSize: '18px'}} />
        ) : (
          <CancelRounded color="#000" sx={{fontSize: '18px'}} />
        )
      }
      sx={{
        height: 'auto',
        padding: '4px 0',
        borderRadius: '4px',
        color: color ? color : isActive ? '#fff' : '#000',
        backgroundColor: bgColor ? bgColor : isActive ? 'success.main' : 'secondary.light',
        fontSize: '16px',
      }}
    />
  );
}
