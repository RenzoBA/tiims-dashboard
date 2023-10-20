import { FC } from "react";
import Notification from "./Notification";

const notifications = [
  {
    id: crypto.randomUUID(),
    title: "New Interface Design",
    description:
      "We have updated the application interface with a more modern and appealing design to enhance the user experience.",
    date: "2023-03-15",
  },
  {
    id: crypto.randomUUID(),
    title: "Online Payment Integration",
    description:
      "Users can now make secure and convenient online payments through the application.",
    date: "2023-04-02",
  },
  {
    id: crypto.randomUUID(),
    title: "Real-Time Tracking Feature",
    description:
      "We've added a real-time tracking feature that allows users to track the live location of service providers.",
    date: "2023-04-20",
  },
  {
    id: crypto.randomUUID(),
    title: "Customized Notifications",
    description:
      "Users can now customize notifications to receive relevant information about the services that interest them.",
    date: "2023-05-10",
  },
  {
    id: crypto.randomUUID(),
    title: "Improved Loading Speed",
    description:
      "We have optimized the application's performance to reduce load times and make it faster than ever.",
    date: "2023-06-05",
  },
];

const NotificationsList: FC = () => {
  return (
    <div className="flex flex-col space-y-2">
      {notifications.map((notification) => (
        <Notification key={notification.id} data={notification} />
      ))}
    </div>
  );
};

export default NotificationsList;
