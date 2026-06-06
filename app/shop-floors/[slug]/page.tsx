import { SiteHeader } from "../../components/FoundWellBrand";
import ProductDetailClient from "./ProductDetailClient";

type Product = {
  name: string;
  slug: string;
  code: string;
  referenceSlug: string;
  description: string;
  tone: string;
};

const products: Product[] = [
  { name: "Castle Oak", slug: "castle-oak", code: "VL-01", referenceSlug: "nordic-blonde-oak", description: "Bright blonde oak for airy, refined spaces. Warm-neutral undertone with clean embossed grain.", tone: "Blonde / Warm neutral" },
  { name: "Cairo", slug: "cairo-oak", code: "VL-02", referenceSlug: "cairo-oak", description: "Golden midtone oak with grounded texture and project-ready warmth.", tone: "Golden / Warm" },
  { name: "Royal Oak", slug: "royal-oak", code: "VL-03", referenceSlug: "smoked-taupe-oak", description: "Rich taupe-brown oak with an elevated character for darker palettes.", tone: "Taupe brown" },
  { name: "Sutton", slug: "sutton-oak", code: "VL-04", referenceSlug: "coastal-greige-oak", description: "Soft taupe oak with quiet sophistication and balanced warmth.", tone: "Soft taupe" },
  { name: "Washed Grey", slug: "washed-oak", code: "VL-05", referenceSlug: "warm-sand-oak", description: "Soft greige oak with contemporary character.", tone: "Greige" },
  { name: "Nevada", slug: "nevada-oak", code: "VL-06", referenceSlug: "castle-oak", description: "Cool contemporary oak with understated natural variation.", tone: "Cool neutral" },
  { name: "Suprem", slug: "suprem-oak", code: "VL-07", referenceSlug: "soft-honey-oak", description: "Warm honeyed oak with a smooth premium showroom feel.", tone: "Honey" },
  { name: "Oxford Oak", slug: "oxford-oak", code: "VL-08", referenceSlug: "raw-linen-oak", description: "Light neutral oak tailored for modern interior palettes.", tone: "Light neutral" },
  { name: "Stardust", slug: "stardust-oak", code: "VL-09", referenceSlug: "natural-beige-oak", description: "Balanced beige oak with subtle grain and luminous warmth.", tone: "Balanced beige" },
  { name: "Sherwood Oak", slug: "sherwood-oak", code: "VL-10", referenceSlug: "light-ash-oak", description: "Classic oak character with balanced warmth and depth.", tone: "Classic oak" },
];

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug) ?? products[0];

  return (
    <main className="fw-grid-bg min-h-screen bg-white text-[#20201D]">
      <SiteHeader />
      <ProductDetailClient product={product} />
    </main>
  );
}
