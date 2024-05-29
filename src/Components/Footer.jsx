import React from 'react';

const currYear=new Date().getFullYear();

const Footer =()=>{

return (
    <>
    <p>
    Copyright &copy; {currYear}
</p>
    </>
)
}

export default Footer;