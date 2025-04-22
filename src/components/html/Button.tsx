type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;
// cần dùng omit loại kiểu không cần thiết

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

// wrapping html vẫn giữ nguyên chứ năng của element gốc
// nhưng thêm thuộc tính riêng logic riêng custom lại
// vừa đỡ code trùng lặp , vừa quản lý style , logic dễ hơn
// vừa an toàn type check với typescript
