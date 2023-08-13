import React, { ForwardedRef } from 'react';
import { CircularProgress } from '@mui/material';

type LoaderProps = {
  size?: number;
};

const Loader = React.forwardRef(
  (props: LoaderProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { size } = props;

    return (
      <div
        ref={ref}
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
        <CircularProgress size={size} />
      </div>
    );
  },
);
Loader.displayName = 'Loader';
export default Loader;
