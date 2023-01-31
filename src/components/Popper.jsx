import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function SimplePopper({desc}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
 

  return (
    <div className='' >
     {desc!==null && <button className=' text-white rounded-md bg-blue-500 px-1 py-2' aria-describedby={id} type="button" onClick={handleClick}>
        Show description
      </button> } 
      <Popper style={{ display:"flex",justifyContent:"end", alignItems:"center"}} id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ width:"50%", border: 1, p: 1, bgcolor: 'white', boxShadow:"1" }}>
          {desc}
        </Box>
      </Popper>
    </div>
  );
}