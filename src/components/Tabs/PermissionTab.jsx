import {useAuth} from '@/hooks/useAuth';
import {hasPermissions} from '@/context/AuthProvider';
import {Tab} from '@mui/material';

export const PermissionTab = ({has, ...props}) => {
  const {user} = useAuth();

  if (!hasPermissions(user, has)) return null;

  return <Tab {...props} />;
};
