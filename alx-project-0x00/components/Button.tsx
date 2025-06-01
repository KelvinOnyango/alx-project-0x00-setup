import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "", // Now properly typed from the interface
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
        ${styles}  // Using the styles prop
      `}
    >
      {title}
    </button>
  );
};

export default Button;
