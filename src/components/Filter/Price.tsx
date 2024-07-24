import { useDebounce } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
type Props={
  value:string
  setValue: React.Dispatch<React.SetStateAction<string>>;

}


const Price = ({value,setValue}:Props) => {
  const [params, setParams] = useSearchParams();
  const debouncedValue=useDebounce(value,500)

  useEffect(() => {
    if (+debouncedValue > 0) {
      params.set("price", debouncedValue);
      setParams(params);
    } else {
      params.delete("price");
      setParams(params);
    }
  }, [debouncedValue]);
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Price </h2>
      <input
      value={value}
        className="w-full"
        onChange={(e) => setValue(e.target.value)}
        min={0}
        max={1000}
        type="range"
      />
      <div className="text-xs flex justify-between">
        <span>${value}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
