"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import {
  CreditCard,
  Loader2,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

const UserNav: FC = () => {
  return (
    <>
      {/* small screens */}
      <div className="sm:hidden flex">
        <Sheet>
          <SheetTrigger>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/91631215?s=400&u=3122ccad5d472cf620c6fe383e46a33bee39499a&v=4"
                alt="user-image"
              />
              <AvatarFallback>
                <Loader2 className="w-6 h-6 animate-spin text-soft-2" />
              </AvatarFallback>
            </Avatar>
          </SheetTrigger>

          <SheetContent>
            <SheetTitle>My Account</SheetTitle>

            <Separator className="my-4" />

            <nav>
              <ul>
                <li className="flex items-center my-3">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </li>
                <li className="flex items-center my-3">
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                </li>
                <li className="flex items-center my-3">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </li>
              </ul>

              <Separator className="my-4" />

              <ul>
                <li className="flex items-center my-3">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </li>
                <li>
                  <div className="flex items-center mt-3 mb-2">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </div>
                  <ul className="pl-5">
                    <li className="flex items-center my-2">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </li>
                    <li className="flex items-center my-2">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </li>
                    <li className="flex items-center my-2">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </li>
                  </ul>
                </li>
                <li className="flex items-center my-3">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                </li>
              </ul>

              <Separator className="my-4" />

              <div className="flex items-center justify-between my-3">
                <span>Dark Mode</span>
                <DarkModeToggle />
              </div>

              <Separator className="my-4" />

              <div className="flex items-center my-3">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* large screens */}
      <div className="sm:flex hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/91631215?s=400&u=3122ccad5d472cf620c6fe383e46a33bee39499a&v=4"
                alt="user-image"
              />
              <AvatarFallback>
                <Loader2 className="w-6 h-6 animate-spin text-soft-2" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 z-10 shadow rounded-md bg-background border-none"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <div className="relative flex justify-between cursor-default items-center rounded-sm px-2 py-1.5 text-sm focus:bg-accent focus:text-accent-foreground">
              <span>Dark Mode</span>
              <DarkModeToggle />
            </div>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>{" "}
      </div>
    </>
  );
};

export default UserNav;
