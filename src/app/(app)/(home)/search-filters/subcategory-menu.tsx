import { Category } from "@/payload-types";
import Link from "next/link";

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubCategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-100"
      style={{ top: position.top, left: position.left }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className="h-3 w-60" />
      <div
        style={{ backgroundColor: backgroundColor }}
        className="w-60 text-black rounded-md overflow-hidden border shadow-shadow -translate-x-[2px] -translate-y-[2px]"
      >
        {category.subcategories?.map((subcategory) => (
          <Link
            key={subcategory.slug}
            href={`/${category.slug}/${subcategory.slug}`}
            className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium "
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
