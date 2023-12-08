import './card.css'; 
import React from 'react';
import { Paper, PaperProps } from '@mui/material';


interface Props extends PaperProps {
   children?: React.ReactNode;
}

const MagicCard: React.FC<Props> = ({ children, ...props }) => {
   //
   return (
    <Paper className='card' variant="outlined" 
         sx={{ 
            border: "0px solid red",
            width:"100%", height:"100%", 
            background: "none", zIndex:0, 
            display:"inline-flex", justifyContent:"center",justifyItems:"center", 
         }}
         {...props}
      >
      {children}
    </Paper>
   )
}

export default MagicCard;