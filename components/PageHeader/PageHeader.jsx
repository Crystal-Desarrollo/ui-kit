import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

export const PageHeader = ({ title, renderAside }) => {
  return (
    <Stack
      display="flex"
      direction={{ sm: 'row', xs: 'column' }}
      alignItems={{ sm: 'center', xs: 'flex-start' }}
      justifyContent={{ sm: 'space-between', xs: 'flex-start' }}
      marginBottom={2}
    >
      <Typography fontWeight="bold" fontSize={24}>
        {title}
      </Typography>
      {renderAside && <Stack mt={{ xs: 2, sm: 0 }}>{renderAside}</Stack>}
    </Stack>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  renderAside: PropTypes.node,
};
