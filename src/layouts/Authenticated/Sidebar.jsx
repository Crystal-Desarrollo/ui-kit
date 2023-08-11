import { ListItem } from './ListItem';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {
  HomeRounded as DashboardIcon,
  Logout,
  NotificationsRounded as NotificationsIcon,
  PeopleRounded as PeopleIcon,
  SavingsRounded as PointOfSaleIcon,
  SettingsRounded as SettingsIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Avatar } from '../../components/Avatar';
import PropTypes from 'prop-types';

export const Sidebar = ({ user, logout, onToggleDrawer, open }) => {
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
        <ListItems user={user} logout={logout} />
      </MobileDrawer>
    );
  }

  return (
    <DesktopDrawer variant="permanent" open={open}>
      <Toolbar />
      <ListItems user={user} logout={logout} />
    </DesktopDrawer>
  );
};

Sidebar.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
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

const MobileDrawer = ({ onToggleDrawer, open }) => {
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
      <Toolbar />
      <ListItems />
    </Drawer>
  );
};

const ListItems = ({ user, logout }) => {
  return (
    <List
      component="nav"
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <ListItem
        text="Inicio"
        icon={<DashboardIcon />}
        url=""
        permissionsRequired={{
          'nav.dashboard': true,
        }}
      />
      <ListItem
        text="Clientes"
        icon={<PeopleIcon />}
        url="/customers"
        permissionsRequired={{
          'nav.customers': true,
        }}
      />
      <ListItem
        text="Contabilidad"
        icon={<PointOfSaleIcon />}
        url="/cash-flow"
        permissionsRequired={{
          'nav.cash_flow': true,
        }}
      />

      <Divider sx={{ my: 2 }} />

      <Stack direction="column">
        <ListItem
          text="Configuración"
          icon={<SettingsIcon />}
          url="/settings"
          permissionsRequired={{
            'nav.settings': true,
          }}
        />
      </Stack>

      <Stack
        display={{ sm: 'none', xs: 'flex' }}
        direction="column"
        alignItems="start"
        p={1}
        mt="auto"
      >
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          p={1}
          sx={{ overflow: 'hidden' }}
        >
          <Stack direction="row" alignItems="center">
            <Avatar name={user?.name} size={50} sx={{ mr: 2 }} />
            <Stack direction="column">
              <Typography fontSize={16} fontWeight="bold">
                {user?.name}
              </Typography>
              <Typography fontSize={14}>
                {user?.email?.toLowerCase()}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center">
            <IconButton color="primary">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="primary" onClick={logout}>
              <Logout />
            </IconButton>
          </Stack>
        </Stack>
        <Stack
          px="25%"
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/profile">Mi perfil</Link>
          <Link to="/configuración">Configuración</Link>
        </Stack>
      </Stack>
    </List>
  );
};

MobileDrawer.propTypes = {
  onToggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

ListItems.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};
