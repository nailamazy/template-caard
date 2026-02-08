import { QRCodeSVG } from "qrcode.react";
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

interface KTMCardFrontProps {
  student: StudentData;
  university: UniversityData;
  theme?: CardTheme;
  templateModel?: CardTemplateModel;
  templateBackgroundUrl?: string | null;
}

export function KTMCardFront({
  student,
  university,
  theme,
  templateModel,
  templateBackgroundUrl,
}: KTMCardFrontProps) {
  const t = theme || cardThemes[0];
  const model = templateModel || defaultCardTemplateModel;
  const isExecutive = model.id === "executive";
  const isModern = model.id === "modern";
  const isMinimal = model.id === "minimal";
  const showBanner = !isMinimal;
  const bodyDirection = isExecutive ? "row-reverse" : "row";

  const bulanMap: Record<string, string> = {
    "01": "Januari", "02": "Februari", "03": "Maret", "04": "April",
    "05": "Mei", "06": "Juni", "07": "Juli", "08": "Agustus",
    "09": "September", "10": "Oktober", "11": "November", "12": "Desember",
  };

  const formatTTL = () => {
    const parts = student.tanggalLahir.split("/");
    if (parts.length === 3) {
      const bulan = bulanMap[parts[1]] || parts[1];
      return `${student.tempatLahir}, ${parseInt(parts[0])} ${bulan} ${parts[2]}`;
    }
    return `${student.tempatLahir}, ${student.tanggalLahir}`;
  };

  const qrValue = student.noKartu || `KTM-${student.nim}-${new Date().getFullYear()}`;
  const sigImg = signatureImages[student.signatureIndex % signatureImages.length];
  const identityRows: Array<[string, string]> = isMinimal
    ? [
        ["Nama", student.nama],
        ["NIM", student.nim],
        ["TTL", formatTTL()],
        ["Fakultas", student.fakultas],
        ["Program Studi", student.programStudi],
        ["Jenjang", student.jenjang],
        ["Status", ""],
      ]
    : [
        ["Nama", student.nama],
        ["NIM", student.nim],
        ["TTL", formatTTL()],
        ["Fakultas", student.fakultas],
        ["Program Studi", student.programStudi],
        ["Jenjang", student.jenjang],
        ["Tahun Akademik", student.tahunAkademik],
        ["Masa Aktif", student.masaAktif],
        ["Status", ""],
      ];
  const headerPadding = isMinimal ? "10px 14px 8px" : isExecutive ? "10px 18px 8px" : "12px 20px 10px";
  const logoSize = isMinimal ? "44px" : isExecutive ? "50px" : "52px";
  const bodyPadding = isMinimal ? "8px 12px 4px" : isModern ? "10px 14px 6px" : "10px 16px 6px";
  const photoWidth = isMinimal ? "84px" : isExecutive ? "98px" : "95px";
  const photoHeight = isMinimal ? "110px" : isExecutive ? "126px" : "120px";
  const qrSize = isMinimal ? 50 : isExecutive ? 56 : 58;
  const infoFontSize = isMinimal ? "8px" : "9px";
  const lineFontSize = isMinimal ? "7.4px" : "8px";
  const footerPadding = isMinimal ? "4px 12px 8px" : "4px 16px 10px";
  const signatureBoxWidth = isMinimal ? "140px" : "165px";
  const signatureLineWidth = isMinimal ? "130px" : "150px";
  const bottomBarHeight = isMinimal ? "4px" : "6px";
  const cardOutline = isExecutive ? `1.5px solid ${t.photoBorder}44` : "none";

  return (
    <div
      data-testid="ktm-card-front"
      style={{
        width: `${CARD_PREVIEW_WIDTH_PX}px`,
        height: `${CARD_PREVIEW_HEIGHT_PX}px`,
        borderRadius: `${CARD_PREVIEW_RADIUS_PX}px`,
        overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
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
            opacity: isMinimal ? 0.28 : 0.22,
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
              "radial-gradient(circle at 14% 20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 52%), radial-gradient(circle at 80% 76%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 45%)",
            zIndex: 0,
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          background: t.gradient,
          padding: headerPadding,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          position: "relative",
        }}
      >
        {university.logoUrl ? (
          <img
            src={university.logoUrl}
            alt="Logo"
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "white",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          />
        ) : (
          <div
            style={{
              width: logoSize,
              height: logoSize,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.3)",
              fontSize: "10px",
              color: "white",
              textAlign: "center",
              lineHeight: "1.1",
              fontWeight: 600,
            }}
          >
            LOGO
          </div>
        )}
        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "white",
              fontSize: isMinimal ? "8px" : "9px",
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            REPUBLIK INDONESIA
          </div>
          <div
            style={{
              color: "white",
              fontSize: isMinimal ? "11px" : isExecutive ? "12px" : "13px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              lineHeight: "1.2",
            }}
          >
            {university.name}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: isMinimal ? "7px" : "8px",
              marginTop: "2px",
            }}
          >
            {university.address}
          </div>
        </div>
      </div>

      {showBanner && (
        <div
          style={{
            background: t.bannerGradient,
            textAlign: "center",
            padding: isExecutive ? "5px 0" : "4px 0",
            marginTop: "-1px",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: isExecutive ? "11px" : "12px",
              fontWeight: 800,
              letterSpacing: isExecutive ? "2px" : "3px",
              textTransform: "uppercase",
            }}
          >
            KARTU TANDA MAHASISWA
          </span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: bodyDirection,
          padding: bodyPadding,
          gap: isMinimal ? "10px" : "14px",
          flex: 1,
        }}
      >
        <div
          style={{
            width: photoWidth,
            height: photoHeight,
            borderRadius: "6px",
            overflow: "hidden",
            border: `2px solid ${t.photoBorder}`,
            flexShrink: 0,
            backgroundColor: t.photoBg,
          }}
        >
          {student.photoUrl ? (
            <img
              src={student.photoUrl}
              alt="Foto Mahasiswa"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: t.photoBg,
                color: t.accentColor,
                fontSize: "10px",
                fontWeight: 600,
                textAlign: "center",
                padding: "4px",
              }}
            >
              Foto<br />Mahasiswa
            </div>
          )}
        </div>

        <div style={{ flex: 1, fontSize: infoFontSize, color: "#333" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {identityRows.map(([label, value], i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: isMinimal ? "1px 0" : "1.5px 0",
                      color: "#666",
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                      fontSize: lineFontSize,
                    }}
                  >
                    {label}
                  </td>
                  <td
                    style={{
                      padding: isMinimal ? "1px 3px" : "1.5px 4px",
                      color: "#666",
                      verticalAlign: "top",
                      fontSize: lineFontSize,
                    }}
                  >
                    :
                  </td>
                  <td
                    style={{
                      padding: isMinimal ? "1px 0" : "1.5px 0",
                      fontWeight: label === "Nama" || label === "NIM" ? 700 : 500,
                      color: label === "Status" ? t.statusColor : "#222",
                      verticalAlign: "top",
                      fontSize: lineFontSize,
                    }}
                  >
                    {label === "Status" ? (
                      <span style={{ color: t.statusColor, fontWeight: 700 }}>
                        Mahasiswa Aktif
                      </span>
                    ) : (
                      value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            flexShrink: 0,
          }}
        >
          <QRCodeSVG
            value={qrValue}
            size={qrSize}
            level="M"
            style={{ borderRadius: "4px" }}
          />
          <span style={{ fontSize: "6px", color: "#999" }}>SCAN QR</span>
        </div>
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
          <div style={{ fontSize: isMinimal ? "7px" : "7.5px", color: "#666", marginBottom: "2px" }}>Dosen Wali,</div>
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
          <div style={{ width: signatureLineWidth, borderTop: "1px solid #333", paddingTop: "2px", textAlign: "center" }}>
            <span style={{ fontSize: isMinimal ? "6px" : "6.5px", color: "#333", fontWeight: 600 }}>
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
                width: isMinimal ? "32px" : "38px",
                height: isMinimal ? "32px" : "38px",
                borderRadius: "50%",
                objectFit: "cover",
                opacity: 0.4,
              }}
            />
          ) : (
            <div
              style={{
                width: isMinimal ? "32px" : "38px",
                height: isMinimal ? "32px" : "38px",
                borderRadius: "50%",
                backgroundColor: t.photoBg,
                border: `1px solid ${t.photoBorder}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7px",
                color: t.accentColor,
                opacity: 0.5,
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
