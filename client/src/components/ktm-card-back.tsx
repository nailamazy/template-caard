import Barcode from "react-barcode";
import type { StudentData, UniversityData, CardTheme } from "@/lib/ktm-data";
import { cardThemes, signatureImages } from "@/lib/ktm-data";
import {
  CARD_PREVIEW_HEIGHT_PX,
  CARD_PREVIEW_RADIUS_PX,
  CARD_PREVIEW_WIDTH_PX,
} from "@/lib/card-dimensions";

interface KTMCardBackProps {
  student: StudentData;
  university: UniversityData;
  theme?: CardTheme;
  templateBackgroundUrl?: string | null;
}

export function KTMCardBack({
  student,
  university,
  theme,
  templateBackgroundUrl,
}: KTMCardBackProps) {
  const t = theme || cardThemes[0];
  const sigImg = signatureImages[student.signatureIndex % signatureImages.length];

  const terms = [
    `Kartu ini merupakan identitas resmi mahasiswa ${university.name}.`,
    "Kartu ini tidak dapat dipindahtangankan kepada pihak lain.",
    "Jika kartu ini ditemukan, harap mengembalikan ke alamat kampus.",
    "Penyalahgunaan kartu ini akan dikenakan sanksi sesuai peraturan yang berlaku.",
    "Kartu ini berlaku selama mahasiswa berstatus aktif.",
    "Jika kartu hilang atau rusak, segera lapor ke bagian akademik.",
  ];

  return (
    <div
      data-testid="ktm-card-back"
      style={{
        width: `${CARD_PREVIEW_WIDTH_PX}px`,
        height: `${CARD_PREVIEW_HEIGHT_PX}px`,
        borderRadius: `${CARD_PREVIEW_RADIUS_PX}px`,
        overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
      }}
    >
      {templateBackgroundUrl && (
        <img
          src={templateBackgroundUrl}
          alt="Template Back"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "30px", // Safe area padding
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div style={{ padding: "15px 19px 11px" }}>
            <div
              style={{
                padding: "6px 15px",
                borderRadius: "999px",
                backgroundColor: `${t.accentColor}19`,
                color: "#0f172a",
                fontSize: "16px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "center",
              }}
            >
              Syarat dan Ketentuan
            </div>
          </div>

          <div style={{ padding: "15px 22px", flex: 1, minHeight: 0, color: "#1f2937" }}>
            <ol style={{ margin: 0, paddingLeft: "26px", fontSize: "14px", lineHeight: "1.45" }}>
              {terms.map((item, index) => (
                <li key={index} style={{ marginBottom: "7px" }}>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div style={{ padding: "11px 19px", display: "flex", justifyContent: "space-between", gap: "15px", alignItems: "flex-end" }}>
            <div style={{ fontSize: "12px", color: "#475569", lineHeight: "1.35" }}>
              <div>No. Kartu: {student.noKartu}</div>
              <div>Diterbitkan: {student.diterbitkan}</div>
              <div style={{ marginTop: "6px" }}>
                <Barcode
                  value={student.noKartu || "KTM-0000"}
                  width={1.5}
                  height={30}
                  fontSize={0}
                  margin={0}
                  displayValue={false}
                  background="transparent"
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "247px", flexShrink: 0 }}>
              <div style={{ fontSize: "13px", color: "#64748b", marginBottom: "4px" }}>Dosen Wali,</div>
              <div style={{ height: "67px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <img src={sigImg} alt="Tanda Tangan" style={{ height: "64px", width: "auto", maxWidth: "225px", objectFit: "contain" }} />
              </div>
              <div style={{ width: "225px", borderTop: "2px solid #334155", paddingTop: "4px", textAlign: "center" }}>
                <span style={{ fontSize: "12px", color: "#1e293b", fontWeight: 700 }}>{student.dosenWali}</span>
              </div>
            </div>

            <div>
              {university.logoUrl ? (
                <img
                  src={university.logoUrl}
                  alt="Logo"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    opacity: 0.45,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: t.photoBg,
                    border: `2px solid ${t.photoBorder}88`,
                    fontSize: "12px",
                    fontWeight: 700,
                    color: t.accentColor,
                    opacity: 0.75,
                  }}
                >
                  LOGO
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
