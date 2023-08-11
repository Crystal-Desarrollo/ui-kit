import { CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,.7)',
        zIndex: 9,
      }}
      onClick={e => e.stopPropagation()}
    >
      <CircularProgress />
    </div>
  );
};
