import { FC } from "react";

interface NotificationProps {
  data: {
    title: string;
    description: string;
    date: string;
  };
}

const Notification: FC<NotificationProps> = ({
  data: { title, description, date },
}) => {
  return (
    <div className="bg-muted-foreground/10 hover:bg-muted-foreground/20 p-2 rounded-md flex flex-col space-y-2 h-28">
      <div className="flex flex-col">
        <span className="text-primary/20 text-xs">{date}</span>
        <h2 className="truncate font-medium">{title}</h2>
      </div>
      <p className="truncate text-sm text-primary/30 whitespace-normal">
        {description}
      </p>
    </div>
  );
};

export default Notification;
