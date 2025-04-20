import { useEffect, useRef, useState } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  // vì setInternal có thể trả về id kiểu số
  // thuộc tính current sẽ lưu giá trị của lần trước khi render
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      Hook - {timer} - <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
