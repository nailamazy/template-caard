const assetBase = import.meta.env.BASE_URL;

export interface BuiltInCardTemplate {
  id: string;
  name: string;
  frontImageUrl: string;
  backImageUrl: string;
}

export const builtInCardTemplates: BuiltInCardTemplate[] = Array.from({ length: 16 }, (_, index) => {
  const file = `${index + 1}.png`;
  const imageUrl = `${assetBase}templates/${file}`;

  return {
    id: `template-${index + 1}`,
    name: `Template ${index + 1}`,
    frontImageUrl: imageUrl,
    backImageUrl: imageUrl,
  };
});

export const defaultBuiltInCardTemplate = builtInCardTemplates[0];

export interface UploadedCardTemplate {
  id: string;
  name: string;
  frontImageUrl: string | null;
  backImageUrl: string | null;
}
