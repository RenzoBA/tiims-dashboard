import { FC } from "react";
import Action from "./Action";
import { Bug, Delete, Edit, Filter, PieChart, Plus } from "lucide-react";

const actions = [
  { id: crypto.randomUUID(), title: "Add", image: <Plus /> },
  { id: crypto.randomUUID(), title: "Remove", image: <Delete /> },
  { id: crypto.randomUUID(), title: "Edit", image: <Edit /> },
  { id: crypto.randomUUID(), title: "Filter", image: <Filter /> },
  { id: crypto.randomUUID(), title: "Resume", image: <PieChart /> },
  { id: crypto.randomUUID(), title: "Issues", image: <Bug /> },
];

const MainActions: FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 items-center justify-around">
      {actions.map((action) => (
        <Action key={action.id} data={action} />
      ))}
    </div>
  );
};

export default MainActions;
