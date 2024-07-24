import { colors } from "../../utils/Constant";

const Color = ({ data }: { data: string }) => {
  const arr = data.split(",");

  return (
    <div>
      <h2 className="mb-4">Color</h2>
      <div className="flex gap-4">
        {arr.map((item) => {
          const color = colors.find((i) => i.id === item);
          return (
            <div
              style={{ background: color?.code || "gray" }}
              className="h-8 w-8 rounded-full cursor-pointer"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
