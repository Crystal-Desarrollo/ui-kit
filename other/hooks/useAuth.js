import {useContext} from 'react';
import {AuthContext} from 'other/context/AuthProvider.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
