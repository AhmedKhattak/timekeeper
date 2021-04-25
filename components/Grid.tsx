import { Card } from "../components/Card";
import { useMediaQuery } from "react-responsive";

export function Grid() {
  const isTabletSize = useMediaQuery({ query: "(min-width: 640px)" });
  const isLaptopSize = useMediaQuery({ query: "(min-width: 989px)" });
  let style = "mt-5 grid gap-y-3 ";
  if (isTabletSize) {
    style = "mt-5   grid grid-cols-2 gap-x-3 gap-y-3";
  }

  if (isLaptopSize) {
    style = "mt-5   grid grid-cols-3 gap-x-3 gap-y-3";
  }

  return (
    <div className={style}>
      {[1, 2, 3, 4, 5].map(() => (
        <Card />
      ))}
    </div>
  );
}
