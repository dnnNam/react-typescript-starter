import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  //Cái dấu ! sau null là non-null assertion operator của TypeScript.
  // Nó báo với TypeScript rằng:
  // Ê, tao biết giá trị này hiện tại là null,
  // nhưng tao đảm bảo là sau này tao sẽ gán giá trị cho nó đúng cách,
  //  và khi sử dụng nó, nó không null đâu, đừng báo lỗi với tao.”
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
