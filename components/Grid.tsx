import { Card } from "../components/Card";
import { useMediaQuery } from "react-responsive";

export function Grid() {
  const isTabletSize = useMediaQuery({ query: "(min-width: 640px)" });
  const isLaptopSize = useMediaQuery({ query: "(min-width: 989px)" });
  let style = "mt-5 grid gap-y-4 ";
  if (isTabletSize) {
    style = "mt-5   grid grid-cols-2 gap-x-3 gap-y-4";
  }

  if (isLaptopSize) {
    style = "mt-5   grid grid-cols-3 gap-x-3 gap-y-4";
  }

  return (
    <div className={`${style} mb-24`}>
      {Array(4)
        .fill(0)
        .map(() => (
          <Card />
        ))}
    </div>
  );
}
