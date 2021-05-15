import { Card } from "../components/Card";
import { useMediaQuery } from "react-responsive";
import { useLiveQuery } from "dexie-react-hooks";
import { EmptyState } from "../components/EmptyState";
import { db, ITimeCard } from "../database/db";
import { useEffect, useState } from "react";

interface IGrid {
  onCreateButtonClick: () => void;
  searchText: string;
}
export function Grid({ onCreateButtonClick, searchText }: IGrid) {
  const [searchData, setSearchData] = useState<ITimeCard[]>(null);
  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };
  const liveData = useLiveQuery(() => {
    toggleRefresh();
    return db.timecards.reverse().toArray();
  });

  useEffect(() => {
    db.timecards
      .filter((item) =>
        item.text.toLowerCase().includes(searchText.toLowerCase())
      )
      .reverse()
      .toArray()
      .then((res) => {
        console.log("search req");
        setSearchData(res);
      });
  }, [searchText, refresh]);

  if (!liveData) {
    return <p>Loading...</p>;
  }

  if (liveData?.length === 0) {
    return <EmptyState onCreateButtonClick={onCreateButtonClick} />;
  }

  if (searchData?.length === 0 && searchText) {
    return <p>No cards found</p>;
  }

  if (searchData?.length > 0) {
    return (
      <div
        className={`mt-5 grid gap-y-4 grid-cols-1 sm:grid-cols-2 md-one:grid-cols-3 gap-x-3  mb-24 `}
      >
        {searchData?.map((timeCard) => (
          <Card key={timeCard.id} {...timeCard} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`mt-5 grid gap-y-4 grid-cols-1 sm:grid-cols-2 md-one:grid-cols-3 gap-x-3  mb-24 `}
    >
      {liveData?.map((timeCard) => (
        <Card key={timeCard.id} {...timeCard} />
      ))}
    </div>
  );
}
