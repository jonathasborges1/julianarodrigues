import React from 'react';
import { OutlinedTextFieldProps, TextField } from '@mui/material';

interface TextFieldCustomProps extends Omit<OutlinedTextFieldProps, 'variant'> {
   isdarkmode?: string;
}

const getContrastTextColor = (isDarkMode?: boolean): string => {
   return isDarkMode ? '#fff' : '#000';
 };

const TextFieldCustom: React.FC<TextFieldCustomProps> = ({  ...props }) => {
   const defaultColor = getContrastTextColor(!!props.isdarkmode);

   return (
      <TextField {...props}   
         variant="outlined"
         sx={{
            '& label':{
               color:defaultColor,
            },
            '& fieldset':{
               borderColor:defaultColor,
            },
            ...props.sx,
         }}
      />
   )
}

export default TextFieldCustom;