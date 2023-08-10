import {Avatar as MuiAvatar} from '@mui/material';
import PropTypes from 'prop-types';

export const Avatar = ({name, profile_picture, size = 120, sx, ...rest}) => {
  return (
    <MuiAvatar
      alt={name}
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

Avatar.propTypes = {
  profile_picture: PropTypes.shape({
    url: PropTypes.string,
  }),
  size: PropTypes.number,
  sx: PropTypes.object,
  name: PropTypes.string,
};
