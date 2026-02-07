import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";
import type { StudentData, UniversityData, CardTheme } from "@/lib/ktm-data";
import { cardThemes, signatureImages } from "@/lib/ktm-data";

interface KTMCardFrontProps {
  student: StudentData;
  university: UniversityData;
  theme?: CardTheme;
}

export function KTMCardFront({ student, university, theme }: KTMCardFrontProps) {
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

  return (
    <div
      data-testid="ktm-card-front"
      style={{
        width: "540px",
        height: "380px",
        borderRadius: "12px",
        overflow: "hidden",
        fontFamily: "'Open Sans', sans-serif",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          background: t.gradient,
          padding: "12px 20px 10px",
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
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "white",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          />
        ) : (
          <div
            style={{
              width: "52px",
              height: "52px",
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
              fontSize: "9px",
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
              fontSize: "13px",
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
              fontSize: "8px",
              marginTop: "2px",
            }}
          >
            {university.address}
          </div>
        </div>
      </div>

      <div
        style={{
          background: t.bannerGradient,
          textAlign: "center",
          padding: "4px 0",
          marginTop: "-1px",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          KARTU TANDA MAHASISWA
        </span>
      </div>

      <div
        style={{
          display: "flex",
          padding: "10px 16px 6px",
          gap: "14px",
        }}
      >
        <div
          style={{
            width: "95px",
            height: "120px",
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

        <div style={{ flex: 1, fontSize: "9px", color: "#333" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {[
                ["Nama", student.nama],
                ["NIM", student.nim],
                ["TTL", formatTTL()],
                ["Fakultas", student.fakultas],
                ["Program Studi", student.programStudi],
                ["Jenjang", student.jenjang],
                ["Tahun Akademik", student.tahunAkademik],
                ["Masa Aktif", student.masaAktif],
                ["Status", ""],
              ].map(([label, value], i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "1.5px 0",
                      color: "#666",
                      whiteSpace: "nowrap",
                      verticalAlign: "top",
                      fontSize: "8px",
                    }}
                  >
                    {label}
                  </td>
                  <td
                    style={{
                      padding: "1.5px 4px",
                      color: "#666",
                      verticalAlign: "top",
                      fontSize: "8px",
                    }}
                  >
                    :
                  </td>
                  <td
                    style={{
                      padding: "1.5px 0",
                      fontWeight: label === "Nama" || label === "NIM" ? 700 : 500,
                      color: label === "Status" ? t.statusColor : "#222",
                      verticalAlign: "top",
                      fontSize: "8px",
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
            size={58}
            level="M"
            style={{ borderRadius: "4px" }}
          />
          <span style={{ fontSize: "6px", color: "#999" }}>SCAN QR</span>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "4px 16px 10px",
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

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px" }}>
          <div style={{ fontSize: "7.5px", color: "#666", marginBottom: "2px" }}>Dosen Wali,</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "42px", width: "100%" }}>
            <img
              src={sigImg}
              alt="Tanda Tangan"
              style={{
                height: "40px",
                width: "auto",
                maxWidth: "130px",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ width: "130px", borderTop: "1px solid #333", paddingTop: "2px", textAlign: "center" }}>
            <span style={{ fontSize: "6.5px", color: "#333", fontWeight: 600 }}>
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
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                objectFit: "cover",
                opacity: 0.4,
              }}
            />
          ) : (
            <div
              style={{
                width: "38px",
                height: "38px",
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
          height: "6px",
          background: t.bottomBar,
        }}
      />
    </div>
  );
}
