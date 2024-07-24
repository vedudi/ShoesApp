import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";

const Gender = ({selected,setSelected}:SelectedProps) => {
  const [params, setParams] = useSearchParams();

  const toggle = (gen: string) => {
    const found = selected.find((i) => i === gen);
    if (found) {
      setSelected(selected.filter((i) => i !== gen));
    } else {
      setSelected([...selected, gen]);
    }
  };
  useEffect(() => {
    if (selected.length > 0) {
      params.set("gen", selected.join(","));
      setParams(params);
    } else {
      params.delete("gen");
      setParams(params);
    }
  }, [selected]);
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Gender</h2>
      <div className="flex gap-4 items-center">
        <input
          checked={selected.includes("men")}
          onChange={() => {
            toggle("men");
          }}
          id="men"
          type="checkbox"
        />
        <label htmlFor="men" className="font-semibold select-none">
          Man
        </label>
      </div>
      <div className="flex gap-4 items-center">
        <input
          checked={selected.includes("women")}
          onChange={() => {
            toggle("women");
          }}
          id="women"
          type="checkbox"
        />
        <label htmlFor="women" className="font-semibold select-none">
          Woman
        </label>
      </div>
    </div>
  );
};

export default Gender;
