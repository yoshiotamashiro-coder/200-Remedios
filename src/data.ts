import raw from "@/data/recipes.json";
import type { Recipe } from "./types";

const recipes = raw as Recipe[];

export function getAllRecipes(): Recipe[] {
  return recipes;
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(recipes.map((r) => r.category))).sort((a, b) =>
    a.localeCompare(b, "es")
  );
}

export function getAllIngredients(): string[] {
  const set = new Set<string>();
  for (const r of recipes) {
    for (const ing of r.ingredientes) {
      set.add(ing);
    }
  }
  return Array.from(set);
}
