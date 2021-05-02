import { Card } from "../components/Card";
import { useMediaQuery } from "react-responsive";
import { useLiveQuery } from "dexie-react-hooks";
import { EmptyState } from "../components/EmptyState";
import { db } from "../database/db";

interface IGrid {
  onCreateButtonClick: () => void;
}
export function Grid({ onCreateButtonClick }: IGrid) {
  const data = useLiveQuery(() => db.timecards.toArray());

  if (!data) {
    return <p>Loading...</p>;
  }

  if (data?.length === 0) {
    return <EmptyState onCreateButtonClick={onCreateButtonClick} />;
  }

  return (
    <div
      className={`mt-5 grid gap-y-4 sm:grid-cols-2 md-one:grid-cols-3 gap-x-3  mb-24 `}
    >
      {data?.map((timeCard) => (
        <Card key={timeCard.id} {...timeCard} />
      ))}
    </div>
  );
}
