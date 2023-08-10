import {useContext} from 'react';
import {AuthContext} from '@/context/AuthProvider/AuthProvider.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
