"use client";

import { useState } from "react";
import { ListFilterIcon, SearchIcon } from "lucide-react";
import { CustomCategory } from "../types";
import { CategoriesSidebar } from "./categories-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  data: CustomCategory[];
  disabled?: boolean;
}

export const SearchInput = ({ disabled, data }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar
        data={data}
        onOpenChange={setIsSidebarOpen}
        open={isSidebarOpen}
      />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/50" />
        <Input
          className="pl-8"
          placeholder="Search Products"
          disabled={disabled}
        />
      </div>
      <Button
        variant="elevated"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
    </div>
  );
};
