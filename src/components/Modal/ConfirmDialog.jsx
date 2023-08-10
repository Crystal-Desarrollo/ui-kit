import PropTypes from 'prop-types';
import {Button, Divider, Stack, Typography} from '@mui/material';
import {Modal} from '@/components/Modal/Modal';
import {Loader} from '@/components/Loader';
import {Report as ReportIcon} from '@mui/icons-material';

export const ConfirmDialog = ({open, title, description, onConfirm, onCancel, isLoading, error, children, sx}) => {
  const handleConfirm = () => {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };

  const handleCancel = () => {
    if (!isLoading && onCancel) {
      onCancel();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      sx={{
        margin: '0 auto',
        maxWidth: 400,
        ...sx,
      }}
    >
      {isLoading && <Loader />}
      <Typography fontWeight="bold" variant="h6" mb={1}>
        <strong>{title ?? ''}</strong>
      </Typography>
      <Divider sx={{mb: 2}} />
      <Stack mb={1} fontSize={16} textAlign="center">
        {description ?? ''}
      </Stack>
      <Stack direction="column" mb={2}>
        {children}
        {error && (
          <Stack alignItems="center" direction="row" mt={1}>
            <ReportIcon color="error" sx={{marginRight: '.5rem', fontSize: '2rem'}} />
            <Typography color="error" fontSize="16px">
              {typeof error === 'string' ? error : 'Ocurrió un error, intente nuevamente.'}
            </Typography>
          </Stack>
        )}
      </Stack>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
        }}
      >
        <Button color="secondary" onClick={handleCancel} disabled={isLoading}>
          Cancelar
        </Button>
        <Button onClick={handleConfirm} disabled={isLoading}>
          {error ? 'Reintentar' : 'Confirmar'}
        </Button>
      </div>
    </Modal>
  );
};

ConfirmDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};
