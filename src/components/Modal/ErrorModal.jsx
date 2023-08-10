import PropTypes from 'prop-types';
import {Button, Divider, Stack, Typography} from '@mui/material';
import {Modal} from '@/components/common/Modal/Modal';
import {Title} from '@/components/common/Title';
import {Report as ReportIcon} from '@mui/icons-material';

export const ErrorModal = ({open, onConfirm, children}) => {
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
      <Title variant="h6" mb={1} color="error">
        <strong>Error</strong>
      </Title>
      <Divider sx={{mb: 2}} />
      <Stack direction="column" mb={2}>
        {children && (
          <Stack alignItems="center">
            <ReportIcon color="error" sx={{mb: '1rem', fontSize: '3rem'}} />
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

ErrorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func,
  children: PropTypes.node,
};
