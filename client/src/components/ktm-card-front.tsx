import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";
import type { StudentData, UniversityData, CardTheme } from "@/lib/ktm-data";
import { cardThemes, signatureImages } from "@/lib/ktm-data";
import {
  CARD_PREVIEW_HEIGHT_PX,
  CARD_PREVIEW_RADIUS_PX,
  CARD_PREVIEW_WIDTH_PX,
} from "@/lib/card-dimensions";

interface KTMCardFrontProps {
  student: StudentData;
  university: UniversityData;
  theme?: CardTheme;
  templateBackgroundUrl?: string | null;
}

export function KTMCardFront({
  student,
  university,
  theme,
  templateBackgroundUrl,
}: KTMCardFrontProps) {
  const t = theme || cardThemes[0];

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

  const identityRows: Array<[string, string]> = [
    ["Nama", student.nama],
    ["NIM", student.nim],
    ["TTL", formatTTL()],
    ["Fakultas", student.fakultas],
    ["Program Studi", student.programStudi],
    ["Jenjang", student.jenjang],
    ["Tahun Akademik", student.tahunAkademik],
    ["Masa Aktif", student.masaAktif],
    ["Status", "Mahasiswa Aktif"],
  ];

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
      }}
    >
      {templateBackgroundUrl && (
        <img
          src={templateBackgroundUrl}
          alt="Template Front"
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "7px", letterSpacing: "1px", color: "#334155", textTransform: "uppercase", fontWeight: 700 }}>
                  Republik Indonesia
                </div>
                <div style={{ fontSize: "10px", fontWeight: 800, color: "#111827", textTransform: "uppercase", lineHeight: "1.2" }}>
                  {university.name}
                </div>
                <div style={{ fontSize: "7px", color: "#475569", lineHeight: "1.2", marginTop: "1px" }}>
                  {university.address}
                </div>
              </div>
              {university.logoUrl ? (
                <img
                  src={university.logoUrl}
                  alt="Logo"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `1.5px solid ${t.photoBorder}`,
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: t.photoBg,
                    border: `1.5px solid ${t.photoBorder}`,
                    fontSize: "7px",
                    fontWeight: 700,
                    color: t.accentColor,
                    flexShrink: 0,
                  }}
                >
                  LOGO
                </div>
              )}
            </div>
            <div
              style={{
                marginTop: "6px",
                padding: "3px 8px",
                borderRadius: "999px",
                backgroundColor: `${t.accentColor}19`,
                color: "#0f172a",
                fontSize: "8px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1.1px",
                textAlign: "center",
              }}
            >
              Kartu Tanda Mahasiswa
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", padding: "8px 10px", flex: 1, minHeight: 0 }}>
            <div
              style={{
                width: "78px",
                height: "98px",
                borderRadius: "6px",
                overflow: "hidden",
                border: `1.8px solid ${t.photoBorder}`,
                flexShrink: 0,
                backgroundColor: t.photoBg,
              }}
            >
              {student.photoUrl ? (
                <img src={student.photoUrl} alt="Foto Mahasiswa" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: t.accentColor,
                    fontSize: "8px",
                    fontWeight: 700,
                    textAlign: "center",
                    lineHeight: "1.2",
                  }}
                >
                  Foto
                  <br />
                  Mahasiswa
                </div>
              )}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {identityRows.map(([label, value], i) => (
                    <tr key={i}>
                      <td style={{ fontSize: "7px", color: "#475569", padding: "1px 0", verticalAlign: "top", whiteSpace: "nowrap" }}>{label}</td>
                      <td style={{ fontSize: "7px", color: "#475569", padding: "1px 3px", verticalAlign: "top" }}>:</td>
                      <td
                        style={{
                          fontSize: "7px",
                          color: label === "Status" ? t.statusColor : "#111827",
                          fontWeight: label === "Nama" || label === "NIM" || label === "Status" ? 700 : 600,
                          padding: "1px 0",
                          verticalAlign: "top",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3px", flexShrink: 0 }}>
              <QRCodeSVG value={qrValue} size={52} level="M" style={{ borderRadius: "4px" }} />
              <span style={{ fontSize: "6px", color: "#64748b", fontWeight: 700 }}>QR</span>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
