// TODO: Convert to next/image (Section 4 Lesson 4)
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "https://picsum.photos/800/600?random=1",
    alt: "Mountain landscape",
  },
  { id: 2, src: "https://picsum.photos/800/600?random=2", alt: "Ocean sunset" },
  { id: 3, src: "https://picsum.photos/800/600?random=3", alt: "Forest path" },
  { id: 4, src: "https://picsum.photos/800/600?random=4", alt: "City skyline" },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-8 font-bold text-3xl">Photo Gallery</h1>

      <div className="grid grid-cols-2 gap-4">
        {images.map((image, i) => (
          <Link key={i} href={`/gallery/photo/${image.id}`}>
            <div className="relative aspect-[4/3]">
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-8 rounded bg-gray-100 p-4">
        <h2 className="mb-2 font-semibold">Performance Issues</h2>
        <ul className="list-inside list-disc text-gray-600 text-sm">
          <li>Images not optimized (no WebP/AVIF)</li>
          <li>No lazy loading</li>
          <li>No responsive sizing</li>
          <li>Layout shift on load</li>
        </ul>
      </section>
    </main>
  );
}
