"use client";

import { Search } from "lucide-react";
import { FC, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "./ui/button";

const suggestions = [
  { id: crypto.randomUUID(), title: "Software development" },
  { id: crypto.randomUUID(), title: "React issues" },
  { id: crypto.randomUUID(), title: "Tiims metrics 2023" },
  { id: crypto.randomUUID(), title: "Advertisements" },
];

const settings = [
  { id: crypto.randomUUID(), title: "Profile" },
  { id: crypto.randomUUID(), title: "Billing" },
  { id: crypto.randomUUID(), title: "Settings" },
];

const SearchEngine: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        className="focus:ring-0 hover:bg-transparent focus:bg-transparent p-0"
      >
        <Search className="text-muted-foreground h-5.5 w-5.5 antialiased" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {suggestions.map((suggestion) => (
              <CommandItem key={suggestion.id}>
                <span>{suggestion.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            {settings.map((setting) => (
              <CommandItem key={setting.id}>
                <span>{setting.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchEngine;
