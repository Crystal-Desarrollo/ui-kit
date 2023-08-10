import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export const CancelButton = ({onClick, children, ...rest}) => {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);
  return (
    <Button
      variant="outlined"
      color="info"
      sx={{
        marginRight: '1rem',
      }}
      onClick={onClick ?? navigateBack}
      {...rest}
    >
      {children ?? 'Volver'}
    </Button>
  );
};

CancelButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
