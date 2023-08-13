import { ButtonProps, SxProps } from '@mui/material';
import React from 'react';
interface SmallButtonProps extends ButtonProps {
    sx?: SxProps;
    children: React.ReactNode;
}
declare const SmallButton: React.FC<SmallButtonProps>;
export default SmallButton;
