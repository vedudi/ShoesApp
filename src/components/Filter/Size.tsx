import { useEffect} from "react";
import { useSearchParams } from "react-router-dom";

export type SelectedProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: SelectedProps) => {
  const [params, setParams] = useSearchParams();
  const numbers = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];
  const toggle = (num: string) => {
    const found = selected.find((i) => i === num);
    if (found) {
      setSelected(selected.filter((i) => i !== num));
    } else {
      setSelected([...selected, num]);
    }
  };
  useEffect(() => {
    if (selected.length > 0) {
      params.set("size", selected.join(","));
      setParams(params);
    } else {
      params.delete("size");
      setParams(params);
    }
  }, [selected]);
  return (
    <div className="lg:mt-[20px]">
      <h2 className="font-semibold mb-[16px]">Size</h2>
      <div className="grid grid-cols-5 gap-[16px]">
        {numbers.map((num) => {
          const found = selected.find((i) => i === num);
          return (
            <p
              key={num}
              onClick={() => toggle(num)}
              className={`py-[8px] px-[16px] text-center rounded-md bg-white text-dark cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-zinc-900 text-white" : "bg-white text-dark"
              }`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
