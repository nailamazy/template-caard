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
                padding: "8px 20px",
                borderRadius: "999px",
                backgroundColor: `${t.accentColor}19`,
                color: "#000000",
                fontSize: "20px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "3px",
                textAlign: "center",
              }}
            >
              Syarat dan Ketentuan
            </div>
          </div>

          <div style={{ padding: "15px 22px", flex: 1, minHeight: 0, color: "#000000" }}>
            <ol style={{ margin: 0, paddingLeft: "26px", fontSize: "18px", lineHeight: "1.5", fontWeight: 600 }}>
              {terms.map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div style={{ padding: "0 25px 20px", display: "flex", justifyContent: "space-between", gap: "15px", alignItems: "flex-end" }}>
            <div style={{ fontSize: "14px", color: "#000000", lineHeight: "1.35", fontWeight: 600 }}>
              <div>No. Kartu: {student.noKartu}</div>
              <div>Diterbitkan: {student.diterbitkan}</div>
              <div style={{ marginTop: "8px" }}>
                <Barcode
                  value={student.noKartu || "KTM-0000"}
                  width={1.8}
                  height={40}
                  fontSize={0}
                  margin={0}
                  displayValue={false}
                  background="transparent"
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "260px", flexShrink: 0 }}>
              <div style={{ fontSize: "15px", color: "#000000", marginBottom: "4px", fontWeight: 600 }}>Dosen Wali,</div>
              <div style={{ height: "110px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <img src={sigImg} alt="Tanda Tangan" style={{ height: "110px", width: "auto", maxWidth: "240px", objectFit: "contain" }} />
              </div>
              <div style={{ width: "240px", borderTop: "2px solid #334155", paddingTop: "6px", textAlign: "center" }}>
                <span style={{ fontSize: "14px", color: "#000000", fontWeight: 700 }}>{student.dosenWali}</span>
              </div>
            </div>

            <div>
              {university.logoUrl ? (
                <img
                  src={university.logoUrl}
                  alt="Logo"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    opacity: 0.45,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#888888",
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
