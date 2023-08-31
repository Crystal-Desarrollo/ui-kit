import { Button, ButtonProps, SxProps } from '@mui/material';
import React from 'react';

interface SmallButtonProps extends ButtonProps {
  sx?: SxProps;
  children: React.ReactNode;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  children,
  sx,
  ...rest
}: SmallButtonProps) => {
  return (
    <Button sx={{ px: 1, py: 1, ...sx }} {...rest}>
      {children}
    </Button>
  );
};

export default SmallButton;
