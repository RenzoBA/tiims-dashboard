import { FC } from "react";
import UserNav from "./UserNav";
import NotificationBell from "./NotificationBell";
import SearchEngine from "./SearchEngine";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="fixed top-0 inset-x-0 sm:pl-60 h-fit bg-background z-10 py-4">
      <div className="container px-4 sm:px-8 max-w-full w-full h-full flex items-center justify-between">
        <div className="sm:flex items-center hidden">
          <h1 className="text-muted-foreground text-xs">
            Project:{" "}
            <span className="uppercase font-semibold text-lg text-primary">
              My coolest project
            </span>
          </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="ml-2 h-5 w-5 cursor-pointer text-muted-foreground hover:text-primary" />
              </TooltipTrigger>
              <TooltipContent
                className="border-none bg-muted-foreground text-primary-foreground"
                align="start"
              >
                <p>
                  This project was created <strong>10d ago</strong> by{" "}
                  <strong>Tiims</strong>. Description: The coolest project is a
                  tech project related with ...
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <SearchEngine />
          <NotificationBell />
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
