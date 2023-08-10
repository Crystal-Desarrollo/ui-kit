import PropTypes from 'prop-types';
import {Title} from '@/components/common/Title';
import {Stack} from '@mui/material';

export const PageHeader = ({title, renderAside}) => {
  return (
    <Stack
      display="flex"
      direction={{sm: 'row', xs: 'column'}}
      alignItems={{sm: 'center', xs: 'flex-start'}}
      justifyContent={{sm: 'space-between', xs: 'flex-start'}}
      marginBottom={2}
    >
      <Title fontSize={24}>{title}</Title>
      {renderAside && <Stack mt={{xs: 2, sm: 0}}>{renderAside}</Stack>}
    </Stack>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  renderAside: PropTypes.node,
};
