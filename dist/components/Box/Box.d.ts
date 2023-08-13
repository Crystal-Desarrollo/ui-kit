import React from 'react';
import { SxProps } from '@mui/material';
type BoxProps = {
    sx?: SxProps;
    isLoading?: boolean;
    children: React.ReactNode;
};
declare const Box: React.FC<BoxProps>;
export default Box;
