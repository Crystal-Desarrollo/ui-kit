import { createContext, useEffect, useState } from 'react';
import AuthApi from '../api/AuthApi';
import { Loader } from '../components/Loader';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export const hasPermissions = (user, permissionsRequired) => {
  if (!user) {
    return false;
  }
  const userPermissions = user.permissions;

  for (let key in permissionsRequired) {
    // If the user doesn't have the permission or the permission is false
    if (!userPermissions[key] || userPermissions[key] === false) {
      return false;
    }
  }

  return true;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const token = localStorage.getItem('app-token');

  useEffect(() => {
    if (!token) {
      return;
    }

    if (!user) {
      setLoading(true);
      me().finally(() => setLoading(false));
    }
  }, [user, token]);

  const login = data => {
    return AuthApi.login(data).then(res => {
      localStorage.setItem('app-token', res.data.token);
      setUser(res.data.user);
    });
  };

  const logout = () => {
    AuthApi.logout().then(() => {
      setUser(null);
      queryClient.clear();
      localStorage.removeItem('app-token');
    });
  };

  const me = async () => {
    return AuthApi.me()
      .then(res => {
        setUser(res.data.user);
      })
      .catch(() => {
        setUser(null);
        localStorage.removeItem('app-token');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        me,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
