type TextProps = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: React.ElementType;
};

// định nghĩa as để dễ kiểm soát các thành phần có trong component

export const Text = ({ size, color, children, as }: TextProps) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
