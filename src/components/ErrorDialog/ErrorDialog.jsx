import PropTypes from 'prop-types';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { Modal } from '../Modal';
import { Report as ReportIcon } from '@mui/icons-material';

const ErrorDialog = ({ open, onConfirm, children }) => {
  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleConfirm}
      style={{
        maxWidth: '400px',
      }}
    >
      <Typography fontWeight="bold" variant="h6" mb={1} color="error">
        Error
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack direction="column" mb={2}>
        {children && (
          <Stack alignItems="center">
            <ReportIcon color="error" sx={{ mb: '1rem', fontSize: '3rem' }} />
            <Typography color="error" fontSize="16px" textAlign="center">
              {children}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" justifyContent="end">
        <Button onClick={handleConfirm}>Aceptar</Button>
      </Stack>
    </Modal>
  );
};

ErrorDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func,
  children: PropTypes.node,
};

export default ErrorDialog;
