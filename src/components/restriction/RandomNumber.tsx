type RamdomNumberType = {
  value: number;
};

type PositiveNumber = RamdomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RamdomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RamdomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
      {/* hiển thị số và in trạng thái đó là gì positive negative or zero */}
    </div>
  );
};
