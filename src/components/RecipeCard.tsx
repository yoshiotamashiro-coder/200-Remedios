import { getAllRecipes, getAllCategories } from "@/lib/data";
import RecipeBrowser from "@/components/RecipeBrowser";

export default function Home() {
  const recipes = getAllRecipes();
  const categories = getAllCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-8">
      <section className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">
          Los 200 Remedios Naturales
        </h1>
        <p className="text-foreground/70 max-w-2xl">
          Un catálogo de {recipes.length} remedios naturales — tés, tónicos,
          elixires, compresas y más — organizados por sistema del cuerpo.
          Busca por síntoma, ingrediente o nombre.
        </p>
        <blockquote className="border-l-2 border-brand pl-4 py-1 max-w-2xl text-brand-dark/80 italic">
          &ldquo;Prepara estos remedios como quien enciende una vela: con
          atención tranquila.&rdquo;
        </blockquote>
      </section>
      <RecipeBrowser recipes={recipes} categories={categories} />
    </div>
  );
}
