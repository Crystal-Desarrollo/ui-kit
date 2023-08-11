import { styled } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  ButtonBase,
  Divider,
  Grow,
  IconButton,
  Paper,
  Popper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Logout as LogoutIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Avatar } from '../../components/Avatar';
import { ConfirmDialog } from '../../components/Dialogs/ConfirmDialog';
import { useEffect, useRef, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth } from '../../hooks/useAuth';
import PropTypes from 'prop-types';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: '100%',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AvatarButton = ({ Icon, text, onClick }) => {
  return (
    <ButtonBase
      sx={{
        width: '100%',
        justifyContent: 'start',
        py: 1,
        px: 1,
        '&:hover': {
          backgroundColor: theme => theme.palette.secondary.lighter,
        },
      }}
      onClick={onClick}
    >
      <Icon fontSize="small" sx={{ mr: 1 }} color="primary" />
      {text}
    </ButtonBase>
  );
};

AvatarButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export const Header = ({ onToggleDrawer, open }) => {
  const { user, logout } = useAuth();
  const ref = useRef();
  const avatarMenuRef = useRef();
  const [avatarMenu, setAvatarMenu] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Detect click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target)
      ) {
        setAvatarMenu(false);
      }
    }

    if (avatarMenuRef) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [avatarMenuRef, avatarMenu]);

  const handleLogout = () => {
    setAvatarMenu(false);
    setIsConfirmOpen(true);
  };

  const handleNavigateToProfile = () => {
    setAvatarMenu(false);
  };

  const handleNavigateToSettings = () => {
    setAvatarMenu(false);
  };

  return (
    <>
      <ConfirmDialog
        open={isConfirmOpen}
        title="Cerrar sesión"
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={logout}
        description="¿Está seguro que desea cerrar sesión?"
      />
      <Popper
        ref={avatarMenuRef}
        open={avatarMenu}
        anchorEl={ref.current}
        role={undefined}
        transition
        disablePortal
        sx={{
          zIndex: 9991,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'right top',
              position: 'absolute',
              right: -100,
              top: 5,
              minWidth: 250,
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              gap={2}
              mt={1}
              width="100%"
            >
              <Paper sx={{ width: '100%' }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  p={1}
                  sx={{ maxWidth: '95%', overflow: 'hidden' }}
                >
                  <Avatar size={30} sx={{ mr: 1 }} />
                  <Stack direction="column">
                    <Typography fontSize={14} fontWeight="bold">
                      {user?.name}
                    </Typography>
                    <Typography fontSize={12}>
                      {user?.email?.toLowerCase()}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="column" justifyContent="flex-start">
                  <AvatarButton
                    Icon={PersonIcon}
                    text="Mi perfil"
                    onClick={handleNavigateToProfile}
                  />
                  <AvatarButton
                    Icon={SettingsIcon}
                    text="Configuración"
                    onClick={handleNavigateToSettings}
                  />
                </Stack>

                <Divider light />

                <Stack direction="row" justifyContent="flex-start">
                  <AvatarButton
                    Icon={LogoutIcon}
                    text="Cerrar sesión"
                    onClick={handleLogout}
                  />
                </Stack>
              </Paper>
            </Stack>
          </Grow>
        )}
      </Popper>
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ position: 'relative' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Abrir menu"
            onClick={onToggleDrawer}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          {window.tenant_data.logo_horizontal ? (
            <img
              src={window.tenant_data.logo_horizontal}
              alt="Logo"
              style={{ maxWidth: 200, maxHeight: 52 }}
            />
          ) : (
            <Typography>{window.tenant_data.name}</Typography>
          )}

          <Stack
            display={{ xs: 'none', sm: 'flex' }}
            direction="row"
            alignItems="center"
            ml="auto"
            ref={ref}
          >
            <IconButton sx={{ mr: 1, color: '#fff' }}>
              <NotificationsIcon />
            </IconButton>
            <Avatar
              name={user?.name}
              size={50}
              sx={{ cursor: 'pointer' }}
              onClick={() => setAvatarMenu(!avatarMenu)}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
