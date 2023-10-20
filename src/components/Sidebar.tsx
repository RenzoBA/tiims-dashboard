import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../public/assets/images/logo.png";
import { Home, Loader2, Menu, Percent, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

const Sidebar: FC = () => {
  return (
    <>
      {/* small screens */}
      <div className="sm:hidden flex h-[72px] sm:h-full pl-4 z-20">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-muted-foreground h-5.5 w-5.5" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="h-full flex flex-col justify-between items-center bg-white dark:bg-slate-900"
          >
            <SheetTitle className="self-start">
              <Link href="/" className="flex flex-col items-center w-fit">
                <Image src={logo} width={80} alt="tiims-logo" />
              </Link>
            </SheetTitle>

            <Separator className="-my-4" />

            <div className="space-y-4 w-full self-start px-10">
              <h1 className="text-sm text-orange-600 font-semibold">Menu</h1>
              <ul className="space-y-5 text-sm">
                <Link
                  href="/"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/user/renzo-bocanegra"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span>User</span>
                </Link>
                <Link
                  href="/statistics"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Percent className="h-5 w-5" />
                  <span>Statistics</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </ul>
            </div>

            <Separator className="-my-4" />

            <div className="space-y-4 w-full self-start px-10">
              <h1 className="text-sm text-orange-600 font-semibold">
                Project Team
              </h1>
              <ul className="space-y-5">
                <Link
                  href="/user/luisa-cardenas"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/assets/images/user1.png"
                      alt="user-image"
                    />
                    <AvatarFallback>
                      <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Luisa Cardenas</span>
                </Link>
                <Link
                  href="/user/miguel-contreras"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/assets/images/user2.jpg"
                      alt="user-image"
                    />
                    <AvatarFallback>
                      <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Miguel Contreras</span>
                </Link>
                <Link
                  href="/user/renzo-bocanegra"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/91631215?s=400&u=3122ccad5d472cf620c6fe383e46a33bee39499a&v=4"
                      alt="user-image"
                    />
                    <AvatarFallback>
                      <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Renzo Bocanegra</span>
                </Link>
                <Link
                  href="/user/sandra-trauco"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/assets/images/user3.jpg"
                      alt="user-image"
                    />
                    <AvatarFallback>
                      <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Sandra Trauco</span>
                </Link>
                <Link
                  href="/user/carlos-peralta"
                  className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/assets/images/user4.jpg"
                      alt="user-image"
                    />
                    <AvatarFallback>
                      <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Carlos Peralta</span>
                </Link>
              </ul>
            </div>

            <p className="text-xs text-muted-foreground/60 font-light">
              Made by Renzo B
            </p>
          </SheetContent>
        </Sheet>
      </div>

      {/* large screens */}
      <div className="bg-white dark:bg-slate-900 z-10 w-60 h-full border border-r sm:flex hidden flex-col justify-between items-center py-5">
        <Link href="/" className="flex flex-col items-center w-fit">
          <Image src={logo} width={110} alt="tiims-logo" />
        </Link>

        <div className="space-y-4 w-full self-start px-10 -mt-4">
          <h1 className="text-sm text-orange-600 font-semibold">Menu</h1>
          <ul className="space-y-5 text-sm">
            <Link
              href="/"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/user/renzo-bocanegra"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <User className="h-5 w-5" />
              <span>User</span>
            </Link>
            <Link
              href="/statistics"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Percent className="h-5 w-5" />
              <span>Statistics</span>
            </Link>
            <Link
              href="/settings"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </ul>
        </div>

        <div className="space-y-4 w-full self-start px-10">
          <h1 className="text-sm text-orange-600 font-semibold">
            Project Team
          </h1>
          <ul className="space-y-5">
            <Link
              href="/user/luisa-cardenas"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/assets/images/user1.png" alt="user-image" />
                <AvatarFallback>
                  <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Luisa Cardenas</span>
            </Link>
            <Link
              href="/user/miguel-contreras"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/assets/images/user2.jpg" alt="user-image" />
                <AvatarFallback>
                  <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Miguel Contreras</span>
            </Link>
            <Link
              href="/user/renzo-bocanegra"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/91631215?s=400&u=3122ccad5d472cf620c6fe383e46a33bee39499a&v=4"
                  alt="user-image"
                />
                <AvatarFallback>
                  <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Renzo Bocanegra</span>
            </Link>
            <Link
              href="/user/sandra-trauco"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/assets/images/user3.jpg" alt="user-image" />
                <AvatarFallback>
                  <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Sandra Trauco</span>
            </Link>
            <Link
              href="/user/carlos-peralta"
              className="flex gap-4 items-center hover:text-primary text-muted-foreground transition-colors"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/assets/images/user4.jpg" alt="user-image" />
                <AvatarFallback>
                  <Loader2 className="w-4 h-4 animate-spin text-soft-2" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">Carlos Peralta</span>
            </Link>
          </ul>
        </div>

        <p className="text-xs text-muted-foreground/60 font-light">
          Made by Renzo B
        </p>
      </div>
    </>
  );
};

export default Sidebar;
