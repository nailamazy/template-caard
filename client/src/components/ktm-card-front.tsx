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
        boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
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
          padding: "18px 22px", // Tighter safe area padding
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
          <div style={{ padding: "12px 18px 8px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "18px", letterSpacing: "3.5px", color: "#000000", textTransform: "uppercase", fontWeight: 800 }}>
                  Republik Indonesia
                </div>
                <div style={{ fontSize: "32px", fontWeight: 900, color: "#000000", textTransform: "uppercase", lineHeight: "1.15" }}>
                  {university.name}
                </div>
                <div style={{ fontSize: "17px", color: "#000000", lineHeight: "1.2", marginTop: "3px", fontWeight: 700 }}>
                  {university.address}
                </div>
              </div>
              {university.logoUrl ? (
                <img
                  src={university.logoUrl}
                  alt="Logo"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#888888",
                    flexShrink: 0,
                  }}
                >
                  LOGO
                </div>
              )}
            </div>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "6px",
                padding: "7px 18px",
                borderRadius: "999px",
                backgroundColor: `${t.accentColor}19`,
                color: "#000000",
                fontSize: "22px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "4px",
                textAlign: "center",
              }}
            >
              Kartu Tanda Mahasiswa
            </div>
          </div>

          <div style={{ display: "flex", gap: "18px", padding: "14px 18px 10px", flex: 1, minHeight: 0 }}>
            <div
              style={{
                width: "170px",
                height: "212px",
                borderRadius: "12px",
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#f0f0f0",
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
                    color: "#888888",
                    fontSize: "18px",
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

            <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "flex-start", paddingTop: "4px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {identityRows.map(([label, value], i) => (
                    <tr key={i}>
                      <td style={{ fontSize: "18px", color: "#000000", padding: "2.5px 0", verticalAlign: "top", whiteSpace: "nowrap", fontWeight: 700 }}>{label}</td>
                      <td style={{ fontSize: "18px", color: "#000000", padding: "2.5px 8px", verticalAlign: "top", fontWeight: 700 }}>:</td>
                      <td
                        style={{
                          fontSize: "18px",
                          color: label === "Status" ? t.statusColor : "#000000",
                          fontWeight: label === "Nama" || label === "NIM" || label === "Status" ? 800 : 700,
                          padding: "2.5px 0",
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

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", flexShrink: 0, justifyContent: "center" }}>
              <QRCodeSVG value={qrValue} size={130} level="M" style={{ borderRadius: "8px", border: "4px solid white" }} />
              <span style={{ fontSize: "15px", color: "#000000", fontWeight: 800 }}>QR</span>
            </div>
          </div>

          <div style={{ padding: "0 18px 14px", display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "flex-end" }}>
            <div style={{ fontSize: "16px", color: "#000000", lineHeight: "1.35", fontWeight: 700 }}>
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

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "280px", flexShrink: 0 }}>
              <div style={{ fontSize: "17px", color: "#000000", marginBottom: "3px", fontWeight: 700 }}>Dosen Wali,</div>
              <div style={{ height: "120px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <img src={sigImg} alt="Tanda Tangan" style={{ height: "120px", width: "auto", maxWidth: "260px", objectFit: "contain" }} />
              </div>
              <div style={{ width: "260px", borderTop: "2.5px solid #000000", paddingTop: "5px", textAlign: "center" }}>
                <span style={{ fontSize: "16px", color: "#000000", fontWeight: 800 }}>{student.dosenWali}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
