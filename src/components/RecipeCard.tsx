import Link from "next/link";
import type { Recipe } from "@/lib/types";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/remedio/${recipe.id}`}
      className="group flex flex-col gap-2 rounded-xl border border-brand-light bg-white p-4 shadow-sm transition hover:shadow-md hover:border-brand"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-brand-dark group-hover:text-brand">
          {recipe.title}
        </h3>
        {recipe.isQuick && (
          <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
            Rápido
          </span>
        )}
      </div>
      <p className="text-xs font-medium text-brand/80">{recipe.category}</p>
      <p className="text-sm text-foreground/70 line-clamp-3">
        {recipe.description || recipe.efecto}
      </p>
      {recipe.idealPara && (
        <p className="text-xs text-foreground/50 mt-auto pt-2">
          Ideal para: {recipe.idealPara}
        </p>
      )}
    </Link>
  );
}
