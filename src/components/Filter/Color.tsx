import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";
import { colors } from "../../utils/Constant";

const Color = ({ selected, setSelected }: SelectedProps) => {
  const [params, setParams] = useSearchParams();
  const toggle = (colr: string) => {
    const found = selected.find((i) => i === colr);
    if (found) {
      setSelected(selected.filter((i) => i !== colr));
    } else {
      setSelected([...selected, colr]);
    }
  };
  useEffect(() => {
    if (selected.length > 0) {
      params.set("color", selected.join(","));
      setParams(params);
    } else {
      params.delete("color");
      setParams(params);
    }
  }, [selected]);
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Color</h2>
      <div className="grid grid-cols-5 gap-[16px]">
        {colors.map((colr) => {
          const found = selected.find((i) => i === colr.id);
          return (
            <p
              style={{ background: colr.id }}
              key={colr.id}
              onClick={() => toggle(colr.id)}
              className={`py-[8px] px-[16px] text-center rounded-md bg-white bg-[${
                colr.code
              }] text-transparent select-none cursor-pointer transition hover:bg-zinc-400 ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
