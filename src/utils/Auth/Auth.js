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