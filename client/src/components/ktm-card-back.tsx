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
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
          padding: "52px 18px 48px",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(15,23,42,0.12)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div style={{ padding: "8px 10px 6px", borderBottom: "1px solid rgba(15,23,42,0.1)" }}>
            <div
              style={{
                padding: "3px 8px",
                borderRadius: "999px",
                backgroundColor: `${t.accentColor}19`,
                color: "#0f172a",
                fontSize: "8px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                textAlign: "center",
              }}
            >
              Syarat dan Ketentuan
            </div>
          </div>

          <div style={{ padding: "8px 12px", flex: 1, minHeight: 0, color: "#1f2937" }}>
            <ol style={{ margin: 0, paddingLeft: "14px", fontSize: "7px", lineHeight: "1.45" }}>
              {terms.map((item, index) => (
                <li key={index} style={{ marginBottom: "4px" }}>
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div style={{ borderTop: "1px solid rgba(15,23,42,0.1)", padding: "6px 10px", display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-end" }}>
            <div style={{ fontSize: "6.3px", color: "#475569", lineHeight: "1.35" }}>
              <div>No. Kartu: {student.noKartu}</div>
              <div>Diterbitkan: {student.diterbitkan}</div>
              <div style={{ marginTop: "3px" }}>
                <Barcode
                  value={student.noKartu || "KTM-0000"}
                  width={0.82}
                  height={16}
                  fontSize={0}
                  margin={0}
                  displayValue={false}
                  background="transparent"
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "132px", flexShrink: 0 }}>
              <div style={{ fontSize: "6.6px", color: "#64748b", marginBottom: "2px" }}>Dosen Wali,</div>
              <div style={{ height: "36px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <img src={sigImg} alt="Tanda Tangan" style={{ height: "34px", width: "auto", maxWidth: "120px", objectFit: "contain" }} />
              </div>
              <div style={{ width: "120px", borderTop: "1px solid #334155", paddingTop: "2px", textAlign: "center" }}>
                <span style={{ fontSize: "6.2px", color: "#1e293b", fontWeight: 700 }}>{student.dosenWali}</span>
              </div>
            </div>

            <div>
              {university.logoUrl ? (
                <img
                  src={university.logoUrl}
                  alt="Logo"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    opacity: 0.45,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: t.photoBg,
                    border: `1px solid ${t.photoBorder}88`,
                    fontSize: "6px",
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
