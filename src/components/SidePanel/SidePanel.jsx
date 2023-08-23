import {
  IconButton,
  Paper,
  Slide,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from 'react';
import { theme } from '../../theme';

export const SidePanel = ({
  title = 'Filtrar',
  children,
  open,
  onClose,
  isLoading,
}) => {
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
          ?.contains(event.target) &&
        !isLoading
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
  }, [ref, open, isLoading, onClose]);

  useEffect(() => {
    if (open) setIsMounted(true);
  }, [open]);

  const handleClose = () => {
    if (!isLoading) {
      onClose();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        position="absolute"
        top={0}
        left={0}
        zIndex={theme.zIndex.drawer + 1}
        width="100vw"
        height="100vh"
        sx={{
          transitionProperty: 'background-color',
          transitionDuration: '0.8s',
        }}
        backgroundColor={open ? 'rgba(0,0,0,0.5)' : 'transparent'}
        display={open || isMounted ? 'flex' : 'none'}
        onTransitionEnd={() => {
          setTimeout(() => {
            if (!open) setIsMounted(false);
          }, 500);
        }}
        onClick={handleClose}
      >
        <Slide in={open} direction="right">
          <Paper
            onClick={e => e.stopPropagation()}
            ref={ref}
            sx={{
              maxWidth: { xs: '100%', sm: '70%', md: '40%', lg: '30%' },
              minWidth: '300px',
              height: '100vh',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              borderBottomRightRadius: '12px',
              borderTopRightRadius: '12px',
            }}
          >
            <Stack direction="row" alignItems="center" mb={1}>
              <Typography variant="h2" color="primary" fontWeight="bold">
                {title}
              </Typography>
            </Stack>
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 4, right: 4 }}
            >
              <CloseIcon />
            </IconButton>
            <Stack my={2}>{children}</Stack>
          </Paper>
        </Slide>
      </Stack>
    </ThemeProvider>
  );
};

SidePanel.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
