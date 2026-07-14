"use client";

import { useMemo, useState } from "react";
import type { Recipe } from "@/lib/types";
import RecipeCard from "./RecipeCard";

export default function RecipeBrowser({
  recipes,
  categories,
}: {
  recipes: Recipe[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todas");
  const [quickOnly, setQuickOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      if (category !== "Todas" && r.category !== category) return false;
      if (quickOnly && !r.isQuick) return false;
      if (!q) return true;
      const haystack = [
        r.title,
        r.description,
        r.idealPara,
        r.efecto,
        ...r.ingredientes,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [recipes, query, category, quickOnly]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <input
          type="search"
          placeholder="Buscar por nombre, síntoma o ingrediente..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:max-w-sm rounded-lg border border-brand-light bg-white px-4 py-2 text-sm outline-none focus:border-brand"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-brand-light bg-white px-3 py-2 text-sm outline-none focus:border-brand"
        >
          <option>Todas</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-foreground/70">
          <input
            type="checkbox"
            checked={quickOnly}
            onChange={(e) => setQuickOnly(e.target.checked)}
            className="accent-brand"
          />
          Solo remedios rápidos
        </label>
      </div>

      <p className="text-sm text-foreground/50">
        {filtered.length} remedio{filtered.length === 1 ? "" : "s"} encontrado
        {filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <p className="text-foreground/60 py-12 text-center">
          No se encontraron remedios con esos criterios.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
