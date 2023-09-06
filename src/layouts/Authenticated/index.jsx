import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Box, Container, Toolbar } from '@mui/material';
import { Loader } from '../../components/Loader';
import PropTypes from 'prop-types';

export function AuthenticatedLayout({ ItemsList, SpeedDial, logout, user }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      {SpeedDial}
      <Header
        logout={logout}
        user={user}
        open={open}
        onToggleDrawer={toggleDrawer}
      />
      <Sidebar open={open} onToggleDrawer={toggleDrawer}>
        <ItemsList />
      </Sidebar>

      <Box
        component="main"
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container
          maxWidth="lg"
          sx={{
            mt: 4,
            mb: 4,
            height: 'calc(100vh - 64px)',
          }}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </Box>
  );
}

AuthenticatedLayout.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ItemsList: PropTypes.elementType.isRequired,
  SpeedDial: PropTypes.node,
};
