import {Avatar as MuiAvatar} from '@mui/material';

export const Avatar = ({name, profile_picture, size = 120, sx, ...rest}) => {
  return (
    <MuiAvatar
      src={profile_picture?.url ?? '/default-avatar.png'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'bottom',
        width: size,
        height: size,
        fontSize: size / 2,
        ...sx,
      }}
      {...rest}
    />
  );
};
