// gallery/photo/[id]/page.tsx
import Link from "next/link";

const images: Record<number, { src: string; alt: string }> = {
  1: {
    src: "https://picsum.photos/800/600?random=1",
    alt: "Mountain landscape",
  },
  2: { src: "https://picsum.photos/800/600?random=2", alt: "Forest path" },
  3: { src: "https://picsum.photos/800/600?random=3", alt: "Forest path" },
  4: { src: "https://picsum.photos/800/600?random=4", alt: "City skyline" },
};

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo = images[Number(id)];

  if (!photo) {
    return <p>Photo not found</p>;
  }

  return (
    <main className="mx-auto max-w-4xl p-8">
      <Link
        href="/gallery"
        className="mb-4 inline-block text-blue-600 hover:underline">
        ← Back to Gallery
      </Link>
      <div className="flex flex-col items-center">
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] rounded-lg object-contain"
        />
        <h1 className="mt-4 font-bold text-2xl">{photo.alt}</h1>
      </div>
    </main>
  );
}
