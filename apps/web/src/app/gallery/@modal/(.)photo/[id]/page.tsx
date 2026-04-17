"use client";

import { useRouter } from "next/navigation";
import React from "react";

const images: Record<number, { src: string; alt: string }> = {
  1: {
    src: "https://picsum.photos/800/600?random=1",
    alt: "Mountain landscape",
  },
  2: { src: "https://picsum.photos/800/600?random=2", alt: "Ocean sunset" },
  3: { src: "https://picsum.photos/800/600?random=3", alt: "Forest path" },
  4: { src: "https://picsum.photos/800/600?random=4", alt: "City skyline" },
};

export default function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = React.use(params);
  const photo = images[Number(id)];

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={() => router.back()}>
      <div
        className="relative max-h-[90vh] max-w-3xl"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => router.back()}
          className="absolute -top-10 right-0 text-white text-xl">
          ✕ Close
        </button>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[80vh] rounded-lg object-contain"
        />
        <p className="mt-2 text-center text-white">{photo.alt}</p>
      </div>
    </div>
  );
}
