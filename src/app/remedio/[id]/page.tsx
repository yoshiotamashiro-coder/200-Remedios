import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipes, getRecipeById } from "@/lib/data";

export function generateStaticParams() {
  return getAllRecipes().map((r) => ({ id: r.id }));
}

export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) return notFound();

  const meta = [
    { label: "Ideal para", value: recipe.idealPara },
    { label: "Tipo", value: recipe.tipo },
    { label: "Cuándo usarlo", value: recipe.cuandoUsarlo },
    { label: "Dosis", value: recipe.dosis },
    { label: "Almacenamiento y uso", value: recipe.almacenamiento },
    { label: "Efecto", value: recipe.efecto },
  ].filter((m) => m.value);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">
      <Link href="/" className="text-sm text-brand hover:underline w-fit">
        ← Volver al catálogo
      </Link>

      <div>
        <p className="text-xs font-medium text-brand/80 mb-1">
          {recipe.category}
          {recipe.isQuick ? " · Remedio rápido" : ""}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-brand-dark">
          {recipe.title}
        </h1>
        {recipe.description && (
          <p className="mt-3 text-foreground/70">{recipe.description}</p>
        )}
      </div>

      {recipe.precauciones && (
        <div className="rounded-lg border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent">
          <strong>Precauciones:</strong> {recipe.precauciones}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <section>
          <h2 className="font-semibold text-brand-dark mb-2">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
            {recipe.ingredientes.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        {recipe.instrucciones.length > 0 && (
          <section>
            <h2 className="font-semibold text-brand-dark mb-2">
              Instrucciones
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-foreground/80">
              {recipe.instrucciones.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {meta.length > 0 && (
        <section className="rounded-lg border border-brand-light bg-white p-4">
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="font-medium text-brand-dark">{m.label}</dt>
                <dd className="text-foreground/70">{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  );
}
