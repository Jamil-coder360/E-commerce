import React from 'react'

const Button = ({Tagname="button",  children, onClick, variant = "red",className="", ...props }) => {
  // button base class always use it on button 
  const baseClasses = "flex items-center justify-center gap-4 px-12 py-4 rounded-md font-medium";

  // button varient red & black
  const variantClasses = {
    red: "bg-[#DB4444] text-white hover:bg-[#DB4444] hover:bg-opacity-80",
    black: "bg-[#000000] text-white hover:bg-[#000000] hover:bg-opacity-80",
    white:"bg-white text-black "
  };

// button body
  return (
    <Tagname {...props} className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </Tagname>
  )
}

export default Button