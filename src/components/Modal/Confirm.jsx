import PropTypes from 'prop-types';
import {Button, Divider, Stack, Typography} from '@mui/material';
import {Modal} from '@/components/common/Modal/Modal';
import {Title} from '@/components/common/Title';
import {CancelButton} from '@/components/common/Buttons/CancelButton';
import {Loader} from '@/components/common/Loader';
import {Report as ReportIcon} from '@mui/icons-material';

export const Confirm = ({open, title, description, onConfirm, onCancel, isLoading, error, children, sx}) => {
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
      <Title variant="h6" mb={1}>
        <strong>{title ?? ''}</strong>
      </Title>
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
        <CancelButton onClick={handleCancel} disabled={isLoading}>
          Cancelar
        </CancelButton>
        <Button onClick={handleConfirm} disabled={isLoading}>
          {error ? 'Reintentar' : 'Confirmar'}
        </Button>
      </div>
    </Modal>
  );
};

Confirm.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node,
};
