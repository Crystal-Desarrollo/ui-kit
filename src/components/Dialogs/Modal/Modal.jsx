import {
  Box as MuiBox,
  IconButton,
  Modal as MuiModal,
  Paper,
} from '@mui/material';
import PropTypes from 'prop-types';
import { Loader } from '../../Loader';
import { Close as CloseIcon } from '@mui/icons-material';

const Modal = ({
  open,
  onClose,
  children,
  style,
  renderBox = true,
  disableCloseOnBackdropClick = false,
  isLoading = false,
  ...rest
}) => {
  const handleClose = (event, reason) => {
    if (disableCloseOnBackdropClick && reason === 'backdropClick') {
      return;
    }
    onClose(event, reason);
  };

  return (
    <MuiModal
      disableAutoFocus={true}
      open={open}
      onClose={handleClose}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <MuiBox sx={{ position: 'relative' }}>
        {isLoading && <Loader />}
        {renderBox ? (
          <Paper style={style}>{children}</Paper>
        ) : (
          <div style={style}>{children}</div>
        )}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 2,
            right: 2,
          }}
        >
          <CloseIcon />
        </IconButton>
      </MuiBox>
    </MuiModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  renderBox: PropTypes.bool,
  disableCloseOnBackdropClick: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Modal;
