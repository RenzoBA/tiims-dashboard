import { Bell } from "lucide-react";
import { FC } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import NotificationsList from "./NotificationsList";

interface NotificationBellProps {}

const NotificationBell: FC<NotificationBellProps> = ({}) => {
  return (
    <>
      {/* small screens */}
      <div className="sm:hidden flex">
        <Sheet>
          <SheetTrigger>
            <div className="relative hover:text-primary transition-colors cursor-pointer">
              <Bell className="text-muted-foreground h-5.5 w-5.5 antialiased" />
              <div className="bg-foreground rounded-full w-3.5 h-3.5 absolute -top-1 -right-0.5 bg-red-500 text-white text-[0.6rem] text-center">
                5
              </div>
            </div>
          </SheetTrigger>

          <SheetContent>
            <SheetTitle>Notifications</SheetTitle>

            <Separator className="my-4" />

            <NotificationsList />
          </SheetContent>
        </Sheet>
      </div>

      {/* large screens */}
      <div className="sm:flex hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative hover:text-primary transition-colors cursor-pointer">
              <Bell className="text-muted-foreground h-5.5 w-5.5 antialiased" />
              <div className="bg-foreground rounded-full w-3.5 h-3.5 absolute -top-1 -right-0.5 bg-red-500 text-white text-[0.6rem] text-center">
                5
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-80 z-10 shadow rounded-md bg-background border-none"
          >
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>

            <DropdownMenuGroup className="mt-4">
              <NotificationsList />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default NotificationBell;
