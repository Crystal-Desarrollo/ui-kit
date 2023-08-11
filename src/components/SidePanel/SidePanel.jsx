import { IconButton, Paper, Slide, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useEffect, useRef, useState } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

export const SidePanel = ({ children, open, onClose, onAccept, onCancel }) => {
  const theme = useTheme();
  const ref = useRef();
  const [isMounted, setIsMounted] = useState(false);

  // Detect click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !document
          .querySelector('div[role="presentation"]')
          ?.contains(event.target)
      ) {
        onClose();
      }
    }

    if (open) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, open]);

  useEffect(() => {
    if (open) setIsMounted(true);
  }, [open]);

  const handleClose = () => {
    onClose();
  };

  return (
    <Stack
      position="absolute"
      top={0}
      left={0}
      zIndex={theme.zIndex.drawer + 1}
      width="100vw"
      height="100vh"
      pt={2}
      pb={2}
      sx={{
        transitionProperty: 'background-color',
        transitionDuration: '0.5s',
      }}
      backgroundColor={open ? 'rgba(0,0,0,0.5)' : 'transparent'}
      display={open || isMounted ? 'flex' : 'none'}
      onTransitionEnd={() => {
        if (!open) setIsMounted(false);
      }}
      onClick={handleClose}
    >
      <Slide in={open} direction="right">
        <Paper
          onClick={e => e.stopPropagation()}
          ref={ref}
          sx={{
            maxWidth: { xs: '100%', sm: '60%', lg: '30%' },
            minWidth: '300px',
            height: '100vh',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            borderBottomRightRadius: '12px',
            borderTopRightRadius: '12px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <Stack direction="row" alignItems="center" mb={1}>
            <FilterListIcon color="primary" />
            <Typography variant="h2" color="primary" fontWeight="bold" ml={1}>
              Filtrar
            </Typography>
          </Stack>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 2, right: 2 }}
          >
            <CloseIcon />
          </IconButton>
          <Stack my={2}>{children}</Stack>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            mt="auto"
          >
            <Button
              onClick={onCancel}
              variant="outlined"
              sx={{ mr: 1 }}
              disabled={!open}
            >
              Restablecer
            </Button>
            <Button onClick={onAccept} disabled={!open}>
              Aplicar
            </Button>
          </Stack>
        </Paper>
      </Slide>
    </Stack>
  );
};

SidePanel.propTypes = {
  open: PropTypes.bool.isRequired,
  onAccept: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  children: PropTypes.node,
};
