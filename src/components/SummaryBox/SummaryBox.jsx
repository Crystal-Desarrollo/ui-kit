import { Loader } from '../Loader';
import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const SummaryBox = ({
  color,
  title,
  value,
  caption = null,
  isLoading = false,
  sx = null,
}) => {
  if (isLoading) return <Loader />;

  return (
    <Stack
      width="100%"
      direction="column"
      px={2}
      py={1}
      borderLeft={theme => `6px solid ${theme.palette[color].main}`}
      bgcolor={theme => `${theme.palette[color].light}10`}
      borderRadius={1}
      sx={sx}
    >
      <Typography variant="subtitle" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body" fontSize={28}>
        {value}
      </Typography>
      <Typography variant="caption" ml="auto">
        {caption}
      </Typography>
    </Stack>
  );
};

SummaryBox.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
  caption: PropTypes.string,
  isLoading: PropTypes.bool,
  sx: PropTypes.object,
};
