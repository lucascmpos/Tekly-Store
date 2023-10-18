import { Badge } from "@/components/ui/badge";
import { CATEGORY_ICON } from "@/contants/category-icon";
import { Category } from "@prisma/client";
import React from "react";

interface CategoryItemProps {
  category: Category;
}


const CategoryItem = ({ category }: CategoryItemProps) => {
    

  return (
    <div>
      <Badge variant='outline' className="py-3 flex justify-center items-center gap-2 rounded-lg">
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </div>
  );
};

export default CategoryItem;
