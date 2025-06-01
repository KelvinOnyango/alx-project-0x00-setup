export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  styles?: string; // This is the line that was missing
}

// If you need to export a type for styles specifically
export type StyleProps = {
  styles: string;
};
