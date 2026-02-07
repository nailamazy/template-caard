import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Signature placeholders - base64 transparent PNGs
const sig1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAACg3i1RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACcSURBVHhe7dGxCsMwDAXQ5f//6Wbo0iYl0JaioIdz4CJY0s1KAgAAAAAAgL91X9f57u3xeD/3ff/yD+v1eT6Xy+V43/fL/6zH4zH7tn22bdv3vP9Yr9frvT3P8/I/6/F4zL77vt/b8z//s16v13t7nuf7//gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8I0Xn5oB/0v4Fz8AAAAASUVORK5CYII=";
const sig2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAACg3i1RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACdSURBVHhe7dGxCgIxDAXQ5f//6Wbo0iYl0JaioIdz4CJY0s1KAgAAAAAAgL913/f57u3xeD/3ff/yD+v1eT6Xy+V43/fL/6zH4zH7tn22bdv3vP9Yr9frvT3P8/I/6/F4zL77vt/b8z//s16v13t7nuf7//gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8I0XoJoB/5i4Fz8AAAAASUVORK5CYII=";
const sig3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAACg3i1RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACdSURBVHhe7dGxCsMwDAXQ5f//6Wbo0iYl0JaioIdz4CJY0s1KAgAAAAAAgL91X9f57u3xeD/3ff/yD+v1eT6Xy+V43/fL/6zH4zH7tn22bdv3vP9Yr9frvT3P8/I/6/F4zL77vt/b8z//s16v13t7nuf7//gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8I0Xn5oB/0v4Fz8AAAAASUVORK5CYII=";
const sig4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAACg3i1RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACdSURBVHhe7dGxCgIxDAXQ5f//6Wbo0iYl0JaioIdz4CJY0s1KAgAAAAAAgL913/f57u3xeD/3ff/yD+v1eT6Xy+V43/fL/6zH4zH7tn22bdv3vP9Yr9frvT3P8/I/6/F4zL77vt/b8z//s16v13t7nuf7//gHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8I0XoJoB/5i4Fz8AAAAASUVORK5CYII=";

export const signatureImages = [sig1, sig2, sig3, sig4];

export interface CardTheme {
  id: string;
  name: string;
  primary: string;
  primaryLight: string;
  gradient: string;
  bannerGradient: string;
  accentColor: string;
  bottomBar: string;
  photoBorder: string;
  photoBg: string;
  statusColor: string;
}

export const cardThemes: CardTheme[] = [
  {
    id: "green",
    name: "Hijau (Default)",
    primary: "#0d9668",
    primaryLight: "#14b8a6",
    gradient: "linear-gradient(135deg, #0d9668 0%, #14b8a6 50%, #0d9668 100%)",
    bannerGradient: "linear-gradient(90deg, #0a7b54 0%, #0d9668 100%)",
    accentColor: "#0d9668",
    bottomBar: "linear-gradient(90deg, #0d9668, #14b8a6, #0d9668)",
    photoBorder: "#0d9668",
    photoBg: "#e0f2f1",
    statusColor: "#0d9668",
  },
  {
    id: "blue",
    name: "Biru",
    primary: "#1d4ed8",
    primaryLight: "#3b82f6",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #1d4ed8 100%)",
    bannerGradient: "linear-gradient(90deg, #1a3fb0 0%, #1d4ed8 100%)",
    accentColor: "#1d4ed8",
    bottomBar: "linear-gradient(90deg, #1d4ed8, #3b82f6, #1d4ed8)",
    photoBorder: "#1d4ed8",
    photoBg: "#dbeafe",
    statusColor: "#1d4ed8",
  },
  {
    id: "red",
    name: "Merah",
    primary: "#b91c1c",
    primaryLight: "#ef4444",
    gradient: "linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #b91c1c 100%)",
    bannerGradient: "linear-gradient(90deg, #991b1b 0%, #b91c1c 100%)",
    accentColor: "#b91c1c",
    bottomBar: "linear-gradient(90deg, #b91c1c, #ef4444, #b91c1c)",
    photoBorder: "#b91c1c",
    photoBg: "#fee2e2",
    statusColor: "#b91c1c",
  },
  {
    id: "purple",
    name: "Ungu",
    primary: "#7e22ce",
    primaryLight: "#a855f7",
    gradient: "linear-gradient(135deg, #7e22ce 0%, #a855f7 50%, #7e22ce 100%)",
    bannerGradient: "linear-gradient(90deg, #6b21a8 0%, #7e22ce 100%)",
    accentColor: "#7e22ce",
    bottomBar: "linear-gradient(90deg, #7e22ce, #a855f7, #7e22ce)",
    photoBorder: "#7e22ce",
    photoBg: "#f3e8ff",
    statusColor: "#7e22ce",
  },
  {
    id: "orange",
    name: "Oranye",
    primary: "#c2410c",
    primaryLight: "#f97316",
    gradient: "linear-gradient(135deg, #c2410c 0%, #f97316 50%, #c2410c 100%)",
    bannerGradient: "linear-gradient(90deg, #9a3412 0%, #c2410c 100%)",
    accentColor: "#c2410c",
    bottomBar: "linear-gradient(90deg, #c2410c, #f97316, #c2410c)",
    photoBorder: "#c2410c",
    photoBg: "#ffedd5",
    statusColor: "#c2410c",
  },
  {
    id: "navy",
    name: "Navy",
    primary: "#1e3a5f",
    primaryLight: "#2563eb",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 50%, #1e3a5f 100%)",
    bannerGradient: "linear-gradient(90deg, #172e4d 0%, #1e3a5f 100%)",
    accentColor: "#1e3a5f",
    bottomBar: "linear-gradient(90deg, #1e3a5f, #2563eb, #1e3a5f)",
    photoBorder: "#1e3a5f",
    photoBg: "#e0e7ff",
    statusColor: "#1e3a5f",
  },
  {
    id: "teal",
    name: "Teal",
    primary: "#0f766e",
    primaryLight: "#2dd4bf",
    gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 50%, #0f766e 100%)",
    bannerGradient: "linear-gradient(90deg, #0d5f58 0%, #0f766e 100%)",
    accentColor: "#0f766e",
    bottomBar: "linear-gradient(90deg, #0f766e, #2dd4bf, #0f766e)",
    photoBorder: "#0f766e",
    photoBg: "#ccfbf1",
    statusColor: "#0f766e",
  },
  {
    id: "pink",
    name: "Pink",
    primary: "#be185d",
    primaryLight: "#ec4899",
    gradient: "linear-gradient(135deg, #be185d 0%, #ec4899 50%, #be185d 100%)",
    bannerGradient: "linear-gradient(90deg, #9d174d 0%, #be185d 100%)",
    accentColor: "#be185d",
    bottomBar: "linear-gradient(90deg, #be185d, #ec4899, #be185d)",
    photoBorder: "#be185d",
    photoBg: "#fce7f3",
    statusColor: "#be185d",
  },
];

export interface UniversityData {
  name: string;
  address: string;
  logoUrl: string | null;
}

export interface StudentData {
  nama: string;
  nim: string;
  tempatLahir: string;
  tanggalLahir: string;
  fakultas: string;
  programStudi: string;
  jenjang: string;
  tahunAkademik: string;
  masaAktif: string;
  dosenWali: string;
  jenisKelamin: string;
  photoUrl: string | null;
  noKartu: string;
  diterbitkan: string;
  signatureIndex: number;
}

export const defaultUniversity: UniversityData = {
  name: "Universitas Negeri Yogyakarta",
  address: "Jl. Colombo No.1, Karang Malang",
  logoUrl: null,
};

function generateNoKartu(nim: string): string {
  const year = new Date().getFullYear();
  return `KTM-${nim}-${year}`;
}

function generateDiterbitkan(): string {
  const today = new Date();
  const dd = today.getDate().toString().padStart(2, "0");
  const mm = (today.getMonth() + 1).toString().padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export const defaultStudent: StudentData = {
  nama: "Hendra Wijaya",
  nim: "20243704854",
  tempatLahir: "Pandeglang",
  tanggalLahir: "27/08/2006",
  fakultas: "Fakultas Keguruan dan Ilmu Pendidikan",
  programStudi: "Pendidikan Bahasa Inggris",
  jenjang: "S1",
  tahunAkademik: "2024 - 2028",
  masaAktif: "14 - Maret - 2028",
  dosenWali: "Dr. Dedi Kurniawan, S.T., M.T.",
  jenisKelamin: "Laki-laki",
  photoUrl: null,
  noKartu: generateNoKartu("20243704854"),
  diterbitkan: generateDiterbitkan(),
  signatureIndex: 0,
};

export const fakultasList = [
  "Fakultas Ilmu Sosial dan Politik",
  "Fakultas Keguruan dan Ilmu Pendidikan",
  "Fakultas Teknik",
  "Fakultas Ekonomi dan Bisnis",
  "Fakultas Hukum",
  "Fakultas Kedokteran",
  "Fakultas MIPA",
  "Fakultas Pertanian",
  "Fakultas Ilmu Budaya",
  "Fakultas Psikologi",
  "Fakultas Ilmu Komunikasi",
  "Fakultas Farmasi",
];

export const jenjangList = ["D3", "D4", "S1", "S2", "S3"];

export const tempatLahirList = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Semarang",
  "Medan",
  "Makassar",
  "Palembang",
  "Denpasar",
  "Malang",
  "Bogor",
  "Tangerang",
  "Bekasi",
  "Depok",
  "Serang",
  "Pandeglang",
  "Solo",
  "Pontianak",
  "Banjarmasin",
  "Manado",
];

export const dosenWaliList = [
  "Dr. Dedi Kurniawan, S.T., M.T.",
  "Prof. Dr. Siti Aminah, M.Pd.",
  "Dr. Bambang Susanto, M.Si.",
  "Dr. Rina Wulandari, M.Hum.",
  "Prof. Dr. Ahmad Hidayat, M.Sc.",
  "Dr. Dewi Lestari, S.Pd., M.Ed.",
  "Dr. Agus Prasetyo, M.Eng.",
  "Prof. Dr. Nurul Huda, M.A.",
];

export const bulanList = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

export function generateRandomNIM(): string {
  const year = "2024";
  const random = Math.floor(Math.random() * 9000000 + 1000000).toString();
  return year + random;
}

export function generateRandomStudent(): StudentData {
  const namaLaki = ["Hendra Wijaya", "Andi Prasetyo", "Budi Santoso", "Rizki Ramadhan", "Fajar Nugroho", "Dimas Saputra", "Arif Rahman", "Gilang Pratama"];
  const namaPerempuan = ["Nadia Permata", "Siti Nurhaliza", "Dewi Anggraini", "Putri Rahayu", "Anisa Fitri", "Maya Sari", "Rina Kartika", "Dian Puspita"];

  const isLaki = Math.random() > 0.5;
  const names = isLaki ? namaLaki : namaPerempuan;
  const nama = names[Math.floor(Math.random() * names.length)];
  const tempat = tempatLahirList[Math.floor(Math.random() * tempatLahirList.length)];
  const fakultas = fakultasList[Math.floor(Math.random() * fakultasList.length)];
  const jenjang = jenjangList[Math.floor(Math.random() * jenjangList.length)];
  const dosen = dosenWaliList[Math.floor(Math.random() * dosenWaliList.length)];

  const day = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
  const month = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
  const year = Math.floor(Math.random() * 5 + 2002).toString();

  const nim = generateRandomNIM();
  const sigIdx = Math.floor(Math.random() * signatureImages.length);

  const masaDay = Math.floor(Math.random() * 28 + 1);
  const masaMonth = bulanList[Math.floor(Math.random() * 12)];
  const masaYear = Math.floor(Math.random() * 3 + 2027);

  const diterbitDay = Math.floor(Math.random() * 28 + 1).toString().padStart(2, '0');
  const diterbitMonth = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
  const diterbitYear = Math.floor(Math.random() * 2 + 2025);

  return {
    nama,
    nim,
    tempatLahir: tempat,
    tanggalLahir: `${day}/${month}/${year}`,
    fakultas,
    programStudi: "Ilmu Komunikasi",
    jenjang,
    tahunAkademik: "2024 - 2028",
    masaAktif: `${masaDay} - ${masaMonth} - ${masaYear}`,
    dosenWali: dosen,
    jenisKelamin: isLaki ? "Laki-laki" : "Perempuan",
    photoUrl: null,
    noKartu: generateNoKartu(nim),
    diterbitkan: `${diterbitDay}/${diterbitMonth}/${diterbitYear}`,
    signatureIndex: sigIdx,
  };
}
