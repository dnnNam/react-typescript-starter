type ListProps = {
  items: string[];
  onClick: (value: string) => void; // đầu vào giá trị string không trả ra
};

export const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of item</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
