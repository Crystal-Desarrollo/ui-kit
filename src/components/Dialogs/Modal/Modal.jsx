import { IconButton, Modal as MuiModal } from '@mui/material';
import PropTypes from 'prop-types';
import { Loader } from '../../Loader';
import { Box } from '../../Box';
import { Close as CloseIcon } from '@mui/icons-material';

const Modal = ({
  open,
  onClose,
  children,
  sx,
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
      <>
        {isLoading && <Loader />}
        <Box sx={sx}>
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
          {children}
        </Box>
      </>
    </MuiModal>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
  disableCloseOnBackdropClick: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Modal;
