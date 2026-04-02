import React from 'react'

const Button = ({ children, onClick, variant = "red" }) => {
  const baseClasses = "px-12 py-4 rounded-md font-medium";
  const variantClasses = {
    red: "bg-[#DB4444] text-white hover:bg-[#DB4444] hover:bg-opacity-80",
    black: "bg-[#000000] text-white hover:bg-[#000000] hover:bg-opacity-80",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button