import { Drawer, Toolbar, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Sidebar = ({ children, onToggleDrawer, open }) => {
  const location = useLocation();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  // Close drawer on navigation
  useEffect(() => {
    if (open && isMobile) {
      onToggleDrawer(false);
    }
  }, [location, isMobile, onToggleDrawer, open]);

  if (isMobile) {
    return (
      <MobileDrawer open={open} onToggleDrawer={onToggleDrawer}>
        <Toolbar />
        {children}
      </MobileDrawer>
    );
  }

  return (
    <DesktopDrawer variant="permanent" open={open}>
      <Toolbar />
      {children}
    </DesktopDrawer>
  );
};

Sidebar.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

const DesktopDrawer = styled(Drawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

DesktopDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
};

const MobileDrawer = ({ onToggleDrawer, open, children }) => {
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={() => onToggleDrawer(false)}
      sx={theme => ({
        '.MuiDrawer-paper': {
          width: '50%',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        },
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      })}
    >
      {children}
    </Drawer>
  );
};

MobileDrawer.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
