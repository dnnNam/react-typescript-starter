type ListProps<T> = {
  items: T[]; // là 1 mảng các chuỗi
  onClick: (value: T) => void; // đầu vào giá trị string không trả ra
};

export const List = <T extends { id: number; first: string; last: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of item</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.first} {item.last}
          </div>
        );
      })}
    </div>
  );
};
