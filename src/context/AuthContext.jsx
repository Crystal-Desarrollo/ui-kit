import { createContext, useEffect, useState } from 'react';
import AuthApi from '../api/AuthApi';
import { Loader } from '../components/Loader';
import PropTypes from 'prop-types';
import { useQueryClient } from '@tanstack/react-query';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('app-token');
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (!user) {
      setLoading(true);
      me().finally(() => setLoading(false));
    }
  }, [token, user]);

  const login = data => {
    return AuthApi.login(data).then(res => {
      localStorage.setItem('app-token', res.data.token);
      setUser(res.data.user);
    });
  };

  const logout = () => {
    return AuthApi.logout().then(() => {
      setUser(null);
      localStorage.removeItem('app-token');
      queryClient.clear();
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
