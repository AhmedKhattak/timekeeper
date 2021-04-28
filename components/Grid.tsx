import { Card } from "../components/Card";
import { useMediaQuery } from "react-responsive";

export function Grid() {
  return (
    <div
      className={`mt-5 grid gap-y-4 sm:grid-cols-2 md-one:grid-cols-3 gap-x-3  mb-24 `}
    >
      {Array(4)
        .fill(0)
        .map(() => (
          <Card />
        ))}
    </div>
  );
}
