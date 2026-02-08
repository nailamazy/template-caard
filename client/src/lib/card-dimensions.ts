// ISO/IEC 7810 ID-1 nominal card size used by most physical ID cards.
export const ID1_CARD_WIDTH_MM = 85.6;
export const ID1_CARD_HEIGHT_MM = 53.98;
export const ID1_CORNER_RADIUS_MM = 3.18;
export const ID1_CARD_ASPECT_RATIO = ID1_CARD_WIDTH_MM / ID1_CARD_HEIGHT_MM;

export const CARD_PREVIEW_WIDTH_PX = 540;
export const CARD_PREVIEW_HEIGHT_PX = Number(
  (CARD_PREVIEW_WIDTH_PX / ID1_CARD_ASPECT_RATIO).toFixed(2),
);
export const CARD_PREVIEW_RADIUS_PX = Number(
  ((ID1_CORNER_RADIUS_MM / ID1_CARD_HEIGHT_MM) * CARD_PREVIEW_HEIGHT_PX).toFixed(2),
);

export const ID1_EXPORT_DPI = 300;
export const ID1_EXPORT_WIDTH_PX = Math.round((ID1_CARD_WIDTH_MM / 25.4) * ID1_EXPORT_DPI);
export const ID1_EXPORT_HEIGHT_PX = Math.round((ID1_CARD_HEIGHT_MM / 25.4) * ID1_EXPORT_DPI);
