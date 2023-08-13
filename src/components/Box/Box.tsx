import React from 'react';
import { Paper, SxProps } from '@mui/material';
import { Loader } from '../Loader';

type BoxProps = {
  sx?: SxProps;
  isLoading?: boolean;
  children: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ sx, isLoading, children }: BoxProps) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        position: 'relative',
        ...sx,
      }}
    >
      {isLoading && <Loader />}
      {children}
    </Paper>
  );
};

export default Box;