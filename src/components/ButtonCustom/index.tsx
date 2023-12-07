import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface ButtonCustomProps extends ButtonProps {
   children?: React.ReactNode;
}

const ButtonCustom: React.FC<ButtonCustomProps> = ({ children, ...props }) => {
   return (
      <Button sx={{textTransform:"capitalize",borderRadius:1.8, p:2}} {...props}>
         {children}
      </Button>
   )
}

export default ButtonCustom;