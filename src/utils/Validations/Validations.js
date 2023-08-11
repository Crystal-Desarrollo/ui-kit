export const parseBackendErrors = (error, defaultError) => {
  const responseData = error.response?.data;

  if (!responseData) return error;

  if (typeof responseData === 'string') return responseData; // For Laravel exception errors

  // For Laravel validation errors
  const backendError = responseData.errors
    ? Object.values(responseData.errors)[0][0]
    : responseData.message ?? null;

  return backendError || defaultError || 'Lo sentimos, ha ocurrido un error.';
};
