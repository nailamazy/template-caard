export type CardTemplateLayout = "classic" | "executive" | "modern" | "minimal";

export interface CardTemplateModel {
  id: CardTemplateLayout;
  name: string;
  description: string;
}

export const cardTemplateModels: CardTemplateModel[] = [
  {
    id: "classic",
    name: "Classic Kampus",
    description: "Model standar formal dengan komposisi data seimbang.",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Tampilan tegas dengan orientasi konten yang lebih premium.",
  },
  {
    id: "modern",
    name: "Modern Split",
    description: "Nuansa modern dengan aksen visual dan ritme layout dinamis.",
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Model ringkas, fokus pada data utama dan keterbacaan.",
  },
];

export interface UploadedCardTemplate {
  id: string;
  name: string;
  frontImageUrl: string | null;
  backImageUrl: string | null;
}

export const defaultCardTemplateModel = cardTemplateModels[0];
