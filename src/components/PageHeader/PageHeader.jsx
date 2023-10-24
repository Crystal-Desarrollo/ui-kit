import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const PageHeader = ({ title, renderAside }) => {
  return (
    <Stack
      display="flex"
      direction={{
        xs: 'column',
        sm: 'row',
      }}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography fontWeight="bold" fontSize={24} textAlign="center" sx={{ mb: { xs: 2, sm: 0 } }}>
        {title}
      </Typography>
      {renderAside && <Stack>{renderAside}</Stack>}
    </Stack>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  renderAside: PropTypes.node,
};

export default PageHeader;
