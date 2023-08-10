import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {Typography} from '@mui/material';
import {Box} from '@/components/common/Box';

export const ComingSoon = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <RocketLaunchIcon sx={{fontSize: 100, mb: 2}} color="primary" />
      <Typography fontSize={40} color="primary" textAlign="center" fontWeight="bold">
        ¡Muy pronto!
      </Typography>
    </Box>
  );
};
