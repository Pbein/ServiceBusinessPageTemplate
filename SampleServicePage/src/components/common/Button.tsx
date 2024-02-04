type ButtonProps = {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'; // Optional, default is 'button'
    className?: string;
  };
  
  const Button = ({ children, type = 'button', className , ...props }: ButtonProps) => {
    const buttonClass = `bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded ${className || ''}`;
    
    return (
      <button type={type} className={buttonClass} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;