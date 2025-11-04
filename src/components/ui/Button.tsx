type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export const Button = ({
  children,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (  
    <button
      type={type}
      className={`w-full bg-black text-white text-base sm:text-lg md:text-xl font-bold py-2.5 sm:py-3 rounded-full hover:bg-gray-800 transition active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};
