import './style.css';
import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const ArrowAnimated: React.FC<Props> = () => {
   return (
      <div className="arrow">
         <span className='arroww'></span>
         <span className='arroww'></span>
         <span className='arroww'></span>
      </div>
   )
}

export default ArrowAnimated;