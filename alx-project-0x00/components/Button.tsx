import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${shape}
        bg-blue-500 text-white hover:bg-blue-600 transition-colors
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
