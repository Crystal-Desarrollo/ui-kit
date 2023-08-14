import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const PageHeader = ({ title, renderAside }) => {
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom={2}
    >
      <Typography fontWeight="bold" fontSize={24}>
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
