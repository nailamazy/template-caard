import Barcode from "react-barcode";
import type { StudentData, UniversityData, CardTheme } from "@/lib/ktm-data";
import { cardThemes, signatureImages } from "@/lib/ktm-data";
import type { CardTemplateModel } from "@/lib/card-templates";
import { defaultCardTemplateModel } from "@/lib/card-templates";
import {
  CARD_PREVIEW_HEIGHT_PX,
  CARD_PREVIEW_RADIUS_PX,
  CARD_PREVIEW_WIDTH_PX,
} from "@/lib/card-dimensions";

interface KTMCardBackProps {
  student: StudentData;
  university: UniversityData;
  theme?: CardTheme;
  templateModel?: CardTemplateModel;
  templateBackgroundUrl?: string | null;
}

export function KTMCardBack({
  student,
  university,
  theme,
  templateModel,
  templateBackgroundUrl,
}: KTMCardBackProps) {
  const t = theme || cardThemes[0];
  const model = templateModel || defaultCardTemplateModel;
  const isExecutive = model.id === "executive";
  const isModern = model.id === "modern";
  const isMinimal = model.id === "minimal";
  const cardOutline = isExecutive ? `1.5px solid ${t.photoBorder}44` : "none";
  const headerPadding = isMinimal ? "12px 14px" : isExecutive ? "14px 20px" : "16px 20px";
  const contentPadding = isMinimal ? "10px 14px" : "16px 20px";
  const contentFontSize = isMinimal ? "7.8px" : "8.5px";
  const footerPadding = isMinimal ? "6px 14px 8px" : "8px 20px 12px";
  const bottomBarHeight = isMinimal ? "4px" : "6px";
  const signatureBoxWidth = isMinimal ? "140px" : "165px";
  const signatureLineWidth = isMinimal ? "130px" : "150px";
  const terms = [
    `Kartu ini merupakan identitas resmi mahasiswa ${university.name}.`,
    "Kartu ini tidak dapat dipindahtangankan kepada pihak lain.",
    "Jika kartu ini ditemukan, harap mengembalikan ke alamat kampus.",
    "Penyalahgunaan kartu ini akan dikenakan sanksi sesuai peraturan yang berlaku.",
    "Kartu ini berlaku selama mahasiswa berstatus aktif.",
    "Jika kartu hilang atau rusak, segera lapor ke bagian akademik.",
  ];
  const sigImg = signatureImages[student.signatureIndex % signatureImages.length];

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
        display: "flex",
        flexDirection: "column",
        border: cardOutline,
      }}
    >
      {templateBackgroundUrl && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${templateBackgroundUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: isMinimal ? 0.3 : 0.24,
            zIndex: 0,
          }}
        />
      )}

      {isModern && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 10% 24%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 50%), radial-gradient(circle at 78% 80%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 46%)",
            zIndex: 0,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          background: t.gradient,
          padding: headerPadding,
          color: "white",
          textAlign: isExecutive ? "left" : "center",
        }}
      >
        <div style={{ fontSize: isMinimal ? "10px" : "12px", fontWeight: 700, letterSpacing: isMinimal ? "1.5px" : "2px", textTransform: "uppercase" }}>
          SYARAT DAN KETENTUAN
        </div>
      </div>

      <div style={{ padding: contentPadding, flex: 1, fontSize: contentFontSize, color: "#444", lineHeight: isMinimal ? "1.45" : "1.6" }}>
        {isModern ? (
          <ul style={{ margin: 0, paddingLeft: "14px", listStyleType: "none" }}>
            {terms.map((item, i) => (
              <li key={i} style={{ marginBottom: "4px", position: "relative", paddingLeft: "10px" }}>
                <span style={{ position: "absolute", left: 0, color: t.accentColor, fontWeight: 700 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <ol style={{ margin: 0, paddingLeft: "16px" }}>
            {terms.map((item, i) => (
              <li key={i} style={{ marginBottom: "4px" }}>{item}</li>
            ))}
          </ol>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: footerPadding,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: "6.5px", color: "#888", lineHeight: "1.5" }}>
          <div>No. Kartu: {student.noKartu}</div>
          <div>Diterbitkan: {student.diterbitkan}</div>
          <div style={{ marginTop: "4px" }}>
            <Barcode
              value={student.noKartu || "KTM-0000"}
              width={1}
              height={22}
              fontSize={0}
              margin={0}
              displayValue={false}
              background="transparent"
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: signatureBoxWidth }}>
          <div style={{ fontSize: isMinimal ? "7px" : "8px", color: "#666", marginBottom: "2px" }}>Dosen Wali,</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: isMinimal ? "44px" : "52px", width: "100%" }}>
            <img
              src={sigImg}
              alt="Tanda Tangan"
              style={{
                height: isMinimal ? "42px" : "50px",
                width: "auto",
                maxWidth: signatureLineWidth,
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ width: signatureLineWidth, borderTop: "1px solid #333", paddingTop: "3px", textAlign: "center" }}>
            <span style={{ fontSize: isMinimal ? "6.5px" : "7.5px", color: "#333", fontWeight: 600 }}>
              {student.dosenWali}
            </span>
          </div>
        </div>

        <div>
          {university.logoUrl ? (
            <img
              src={university.logoUrl}
              alt="Logo"
              style={{
                width: isMinimal ? "34px" : "40px",
                height: isMinimal ? "34px" : "40px",
                borderRadius: "50%",
                objectFit: "cover",
                opacity: 0.5,
              }}
            />
          ) : (
            <div
              style={{
                width: isMinimal ? "34px" : "40px",
                height: isMinimal ? "34px" : "40px",
                borderRadius: "50%",
                backgroundColor: t.photoBg,
                border: `1px solid ${t.photoBorder}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7px",
                color: t.accentColor,
                opacity: 0.6,
                fontWeight: 600,
              }}
            >
              LOGO
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: bottomBarHeight,
          background: t.bottomBar,
        }}
      />
      </div>
    </div>
  );
}
