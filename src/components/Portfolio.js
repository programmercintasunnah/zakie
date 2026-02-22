import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBuilding, FaTools, FaLaptopCode, FaMapMarker, FaClock } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
// import SyirkahWeb from "../../assets/syirkah-web.png"
// import DashboardSyirkah from "../../assets/dashboard-syirkah.png"
// import SyirkahWebTenant from "../../assets/web-mumtazah.png"
// import IBankMobileApp from "../../assets/homescreen-ibank.png"
// import LandingCompanyWeb from "../../assets/landing-company.png"
// import JKTHalalExpoWeb from "../../assets/jakarta-halal-expo.png"
// import SiamMianHomePage from "../../assets/siam-mian-homepage.png"

const Portfolio = () => {
  const { experiences, personalProjects, loading } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState("hunayn-teknologi");
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeTab, setActiveTab] = useState("work");
  const projectRefs = useRef({});

  const portfolioData = {
    hunayn: {
      name: "Hunayn Teknologi",
      nameEn: "Hunayn Teknologi",
      nameId: "Hunayn Teknologi",
      description: "Perusahaan teknologi yang fokus pada pengembangan solusi digital untuk sektor keuangan syariah, khususnya sistem manajemen Koperasi Syariah dengan arsitektur modern dan skalabel.",
      website: "https://hunayn.tech",
      period: "Mei 2023 - Sekarang (2 tahun 8 bulan)",
      periodEn: "May 2023 - Present (2 years 8 months)",
      role: "Software Engineer",
      projects: [
        {
          id: "syirkah-app",
          name: "Syirkah Web Application",
          description: {
            ar: "...",
            en: "Core multi-tenant Sharia cooperative system covering backend and frontend, designed with Clean Architecture to support scalability, security, and complex business processes",
            id: "Sistem inti koperasi syariah multi-tenant yang mencakup backend dan frontend, dirancang dengan Clean Architecture untuk mendukung skalabilitas, keamanan, dan proses bisnis yang kompleks",
          },
          techStack: [
            "Golang",
            "React.js",
            "PostgreSQL",
            "Clean Architecture",
            "Docker",
            "Azure",
          ],
          features: {
            ar: ["....."],
            en: [
              "Multi-tenant architecture supporting multiple Sharia cooperatives with isolated schemas",
              "Super admin capability to switch between cooperatives seamlessly",
              "Version-based database migration system with automatic schema updates",
              "Clean Architecture implementation across backend layers",
              "Secure authentication system with login, registration, and Two-Factor Authentication (2FA)",
              "Role-based access control (RBAC) with granular permissions",
              "Comprehensive cooperative management modules (members, products, branches, roles, and configurations)",
              "Accounting and financial modules including chart of accounts, journals, ledger, and financial reports",
              "Financing lifecycle management (request, approval, realization, installment, and recalculation)",
              "Dashboard and reporting features for operational and financial insights",
              "Dynamic content management per cooperative (logos, banners, content, and configurations)",
              "Document generation and storage integration (PDF export, cloud storage)",
              "Reusable base CRUD system optimized for multi-tenant environments",
              "Frontend UI implementation for dashboards, forms, and cooperative operations",
            ],
            id: [
              "Arsitektur multi-tenant dengan pemisahan schema untuk setiap koperasi syariah",
              "Fitur utama super admin untuk melakukan switch antar koperasi",
              "Sistem migrasi database berbasis versi dengan pembaruan schema otomatis",
              "Implementasi Clean Architecture di sisi backend",
              "Sistem autentikasi aman dengan login, registrasi, dan Two-Factor Authentication (2FA)",
              "Manajemen hak akses berbasis role (RBAC) dengan permission yang granular",
              "Modul manajemen koperasi yang lengkap (anggota, produk, cabang, role, dan konfigurasi)",
              "Modul akuntansi dan keuangan meliputi chart of account, jurnal, buku besar, dan laporan keuangan",
              "Manajemen siklus pembiayaan (pengajuan, persetujuan, realisasi, cicilan, dan perhitungan ulang)",
              "Dashboard dan laporan untuk monitoring operasional dan keuangan",
              "Manajemen konten dinamis per koperasi (logo, banner, konten, dan konfigurasi)",
              "Generasi dokumen dan integrasi penyimpanan cloud (export PDF, storage)",
              "Base CRUD reusable yang dioptimalkan untuk kebutuhan multi-tenant",
              "Pengembangan UI frontend untuk dashboard, form, dan operasional koperasi",
            ],
          },
          type: "fullstack",
          role: "Full Stack Developer",
          image: "/assets/dashboard-syirkah.png",
        },
        {
          id: "hyn-be-core",
          name: "Hunayn Ghazi - Core Backend",
          description: {
            ar: "...",
            en: "Core backend service for a multi-tenant Sharia cooperative system, designed with Clean Architecture to ensure scalability, maintainability, and reusability across multiple applications.",
            id: "Backend inti untuk sistem koperasi syariah multi-tenant, dirancang dengan Clean Architecture untuk memastikan skalabilitas, kemudahan pemeliharaan, dan reusabilitas di berbagai aplikasi.",
          },
          techStack: ["Golang", "PostgreSQL", "SQLX", "AWS S3", "Azure Blob Storage"],
          features: {
            ar: ["....."],
            en: [
              "Reusable core backend modules shared across multiple projects",
              "Multi-tenant database architecture with schema-based isolation",
              "Generic Base CRUD implementation using GORM",
              "Migration of Base CRUD from GORM to SQLX for better performance and control",
              "Integration with AWS S3 for secure file and document storage",
              "Integration with Azure Blob Storage as an alternative storage provider",
            ],
            id: [
              "Modul backend inti yang reusable dan digunakan di berbagai proyek",
              "Arsitektur database multi-tenant dengan isolasi berbasis skema",
              "Implementasi Base CRUD generik menggunakan GORM",
              "Migrasi Base CRUD dari GORM ke SQLX untuk performa dan kontrol yang lebih baik",
              "Integrasi AWS S3 untuk penyimpanan file dan dokumen secara aman",
              "Integrasi Azure Blob Storage sebagai alternatif penyimpanan",
            ],
          },
          type: "backend",
          role: "Backend Developer",
        },
        {
          id: "syirkah-web",
          name: "Syirkah Website",
          description: {
            ar: "...",
            en: "Main web for Sharia cooperatives",
            id: "Web utama untuk koperasi syariah",
          },
          techStack: ["React.js"],
          features: {
            ar: ["....."],
            en: [
              "Static informational website for Sharia cooperative products",
              "Feature overview pages explaining system capabilities",
              "Pricing page with clear and structured service plans",
              "Solutions page tailored for cooperative business needs",
              "Partner and collaboration showcase",
              "Contact page for inquiries and business communication",
            ],
            id: [
              "Website statis informatif untuk produk koperasi syariah",
              "Halaman fitur untuk menjelaskan kapabilitas sistem",
              "Halaman harga dengan paket layanan yang jelas dan terstruktur",
              "Halaman solusi yang disesuaikan dengan kebutuhan koperasi",
              "Halaman mitra dan kolaborasi",
              "Halaman kontak untuk kebutuhan informasi dan komunikasi bisnis",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/syirkah-web.png",
        },
        {
          id: "syirkah-web-tenant",
          name: "Syirkah Website Per Tenant",
          description: {
            ar: "...",
            en: "Main web and dynamic per-tenant websites for Sharia cooperatives",
            id: "Web utama dan website dinamis per-tenant untuk koperasi syariah",
          },
          techStack: ["React.js", "REST API"],
          features: {
            ar: ["....."],
            en: [
              "Dynamic tenant-specific customization",
              "Content driven by REST API for each tenant",
              "Dynamic sections such as logo, banners, and testimonials",
              "Shared static sections across tenants (FAQ, products, etc.)",
              "Reusable and scalable component-based architecture",
              "User authentication (login and registration)",
              "Sharia financing simulation feature for prospective members",
            ],
            id: [
              "Kustomisasi dinamis spesifik per-tenant",
              "Konten berbasis REST API untuk setiap tenant",
              "Bagian dinamis seperti logo, banner, dan testimoni",
              "Bagian statis yang digunakan bersama antar tenant (FAQ, produk, dan lainnya)",
              "Arsitektur komponen yang reusable dan scalable",
              "Fitur autentikasi pengguna (login dan registrasi)",
              "Fitur simulasi pembiayaan syariah untuk calon anggota",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/web-mumtazah.png",
        },
        {
          id: "ibank-syirkah",
          name: "iBank Syirkah Mobile App",
          description: {
            ar: "...",
            en: "Mobile banking application for Syirkah cooperatives built with React Native Expo",
            id: "Aplikasi mobile banking untuk koperasi Syirkah yang dibangun dengan React Native Expo",
          },
          techStack: ["React Native", "Expo", "TypeScript", "REST API"],
          features: {
            ar: ["....."],
            en: [
              "Web-based mobile application",
              "transaction and mutation history",
              "Download mutation pdf",
              "Update profile and password",
              "Create and update transaction PIN"
            ],
            id: [
              "Aplikasi mobile berbasis web",
              "Riwayat transaksi dan mutasi",
              "Unduh mutasi pdf",
              "Perbarui profil dan kata sandi",
              "Buat dan update pin transaksi"
            ],
          },
          type: "mobile",
          role: "Mobile Developer",
          image: "/assets/homescreen-ibank.png",
        },
        {
          id: "jakarta-halal-expo",
          name: "Jakarta Halal Expo Website",
          description: {
            ar: "...",
            en: "Modern and responsive web for Jakarta Halal Expo event",
            id: "Web modern dan responsif untuk acara Jakarta Halal Expo",
          },
          techStack: ["Svelte", "JavaScript"],
          features: {
            ar: ["....."],
            en: [
              "Event information and schedule display",
              "Interactive floor plan",
              "Responsive design for all devices",
            ],
            id: [
              "Tampilan informasi acara dan jadwal",
              "Denah lantai interaktif",
              "Desain responsif untuk semua perangkat",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/jakarta-halal-expo.png",
        },
        {
          id: "corporate-website",
          name: "Hunayn Corporate Website",
          description: {
            ar: "...",
            en: "Maintained the company's corporate website with a focus on UI refinements.",
            id: "Melakukan pemeliharaan pada website korporat perusahaan dengan fokus pada penyempurnaan tampilan.",
          },
          techStack: ["Svelte", "JavaScript"],
          features: {
            ar: ["....."],
            en: [
              "UI enhancements on existing pages",
            ],
            id: [
              "Penyempurnaan tampilan UI pada halaman yang sudah ada",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/landing-company.png",
        },
        {
          id: "siam-mian",
          name: "Sistem Informasi Akademik MIAN",
          description: {
            ar: ".....",
            en: "A web-based academic information system for Ma'had Imam An-Nawawi (MIAN) designed for Santri to access schedules, quizzes, attendance, learning materials, muroja'ah videos, profile, and payments through a modern and responsive mobile-first interface with API integration.",
            id: "Sistem informasi akademik berbasis web untuk Ma'had Imam An-Nawawi (MIAN) yang dirancang untuk Santri agar dapat mengakses jadwal, kuis, presensi, materi pembelajaran, video muroja'ah, profil, dan pembayaran melalui antarmuka modern dan responsif dengan pendekatan mobile-first serta integrasi API.",
          },
          techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Strapi"],
          features: {
            ar: ["....."],
            en: [
              "Authentication system (login, register) with step validation and error handling",
              "Home page with schedule, quiz/deadline, muroja'ah video, presensi (clock in/out)",
              "Class page with course listing and detail page with schedule & quiz tabs",
              "Lesson detail with description, content, and zoom in/out functionality",
              "Quiz page supporting multiple_choice, single_choice, true_false, and essay (with image in RTE)",
              "Quiz result and detail with score visualization (ScoreCircle component)",
              "Profile page with user data, avatar upload, and SP payment integration",
              "Payment page with sorting, filter, and load more functionality",
              "Overdue modal notification for payment obligations",
              "Payment gateway integration (Doku) with webhook n8n",
              "Reusable components: Bottom Navigation, Tab Navigation, Modal, Loading State (Skeleton)",
              "API integration with service layer abstraction and error handling",
              "Route protection based on authentication status",
              "Responsive mobile-first UI deployed to Cloudflare Pages",
            ],
            id: [
              "Sistem autentikasi (login, register) dengan validasi bertahap dan penanganan error",
              "Halaman utama dengan jadwal, kuis/batas waktu, video muroja'ah, presensi (clock in/out)",
              "Halaman kelas dengan daftar kursus dan halaman detail dengan tab jadwal & kuis",
              "Detail pelajaran dengan deskripsi, konten, dan fungsi zoom in/out",
              "Halaman kuis mendukung multiple_choice, single_choice, true_false, dan essay (dengan gambar di RTE)",
              "Hasil kuis dan detail dengan visualisasi skor (komponen ScoreCircle)",
              "Halaman profil dengan data pengguna, upload avatar, dan integrasi pembayaran SPP",
              "Halaman pembayaran dengan pengurutan, filter, dan fungsionalitas load more",
              "Modal notifikasi tunggakan untuk kewajiban pembayaran",
              "Integrasi payment gateway (Doku) dengan webhook n8n",
              "Komponen reusable: Bottom Navigation, Tab Navigation, Modal, Loading State (Skeleton)",
              "Integrasi API dengan lapisan abstraksi service dan penanganan error",
              "Route protection berdasarkan status autentikasi",
              "Tampilan responsif mobile-first yang di-deploy ke Cloudflare Pages",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/siam-mian-homepage.png",
        }
      ],
    },
    "pps-ibnu-masud": {
      name: "PPS Ibnu Mas'ud",
      nameEn: "PPS Ibnu Mas'ud",
      nameId: "PPS Ibnu Mas'ud",
      description: "Sekolah Tahfiz tingkat SD yang berada di Koto Perambahan, Kampar, Riau. Pondok Pengajian Subulan fokus pada pendidikan agama Islam dan hafalan Al-Quran untuk siswa-siswa usia sekolah dasar.",
      website: null,
      period: "Februari 2020 - Maret 2020 (1 bulan)",
      periodEn: "February 2020 - March 2020 (1 month)",
      role: "Software Developer",
      projects: [
        {
          id: "presence-app",
          name: "Presence App",
          description: {
            ar: "...",
            en: "Employee attendance management system for college internship assignment at PPS Ibnu Mas'ud",
            id: "Sistem manajemen kehadiran karyawan untuk tugas magang kampus di PPS Ibnu Mas'ud",
          },
          techStack: ["PHP", "CodeIgniter", "MySQL"],
          features: {
            en: [
              "Employee attendance tracking",
              "Presence functionality",
              "Attendance reports",
              "Admin dashboard for managing attendance",
            ],
            id: [
              "Pelacakan kehadiran karyawan",
              "Fitur absensi kehadiran",
              "Laporan kehadiran",
              "Dashboard admin untuk mengelola kehadiran",
            ],
          },
          type: "fullstack",
          role: "Developer",
          image: "/assets/kp-app.png",
        }
      ],
    },
    rkit: {
      name: "Ruang Kreasi Inovasi Teknologi",
      nameEn: "Ruang Kreasi Inovasi Teknologi (RKIT)",
      nameId: "Ruang Kreasi Inovasi Teknologi",
      description: "Perusahaan yang bergerak di bidang teknologi informasi, pengembangan software, dan solusi digital untuk berbagai sektor bisnis termasuk manajemen coworking space dan event.",
      website: "https://rakitek.com",
      period: "April 2022 - February 2023 (11 bulan)",
      periodEn: "April 2022 - February 2023 (11 months)",
      role: "Web Programmer",
      projects: [
        {
          id: "rakomsis-v3",
          name: "Rakomsis v3.0",
          description: {
            ar: "...",
            en: "Complete redevelopment of business management system for serviced offices, coworking spaces, and event spaces",
            id: "Pengembangan ulang lengkap sistem manajemen bisnis untuk serviced office, coworking space, dan event space",
          },
          techStack: ["Laravel", "MySQL", "JavaScript", "jQuery", "Ajax"],
          features: {
            ar: ["....."],
            en: [
              "Integrated management for multiple business types",
              "Data migration from v1.5 to v3.0",
              "Booking and reservation system",
              "Invoice and payment management",
              "Customer relationship management",
            ],
            id: [
              "Manajemen terintegrasi untuk berbagai jenis bisnis",
              "Migrasi data dari v1.5 ke v3.0",
              "Sistem booking dan reservasi",
              "Manajemen invoice dan pembayaran",
              "Manajemen hubungan pelanggan",
            ],
          },
          type: "fullstack",
          role: "Full Stack Developer",
          image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
        },
        {
          id: "rakomsis-portal",
          name: "Rakomsis Portal",
          description: {
            ar: "...",
            en: "Customer-facing portal for Rakomsis users built with Vue.js",
            id: "Portal customer untuk pengguna Rakomsis yang dibangun dengan Vue.js",
          },
          techStack: ["Vue.js", "JavaScript", "REST API", "CSS3"],
          features: {
            ar: ["....."],
            en: [
              "User-friendly booking interface",
              "Real-time availability checking",
              "Payment gateway integration",
              "Booking history and management",
            ],
            id: [
              "Antarmuka booking yang user-friendly",
              "Pengecekan ketersediaan real-time",
              "Integrasi payment gateway",
              "Riwayat booking dan manajemen",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        },
        {
          id: "atm-checklist",
          name: "ATM Checklist Application",
          description: {
            ar: "...",
            en: "Mobile application for ATM maintenance checklist and monitoring",
            id: "Aplikasi mobile untuk checklist pemeliharaan dan monitoring ATM",
          },
          techStack: ["Flutter", "Dart", "REST API"],
          features: {
            ar: ["....."],
            en: [
              "Digital checklist forms",
              "Photo documentation",
              "Offline support with sync",
              "Reporting and analytics",
            ],
            id: [
              "Formulir checklist digital",
              "Dokumentasi foto",
              "Dukungan offline dengan sinkronisasi",
              "Pelaporan dan analitik",
            ],
          },
          type: "mobile",
          role: "Support Developer",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        },
      ],
    },
    pragma: {
      name: "Pragma Informatika",
      nameEn: "Pragma Informatika",
      nameId: "Pragma Informatika",
      description: "Perusahaan teknologi informasi yang fokus pada pengembangan sistem manajemen untuk sektor industri, khususnya sistem HSSE (Health, Safety, Security, Environment) untuk PLN dan perusahaan energi lainnya.",
      website: "https://pragmainf.id",
      period: "Oktober 2021 - Maret 2022 (6 bulan)",
      periodEn: "October 2021 - March 2022 (6 months)",
      role: "Web Developer",
      projects: [
        {
          id: "hsse-kalimantan",
          name: "HSSE Kalimantan Multi-Tenant",
          description: {
            ar: "...",
            en: "Health, Safety, Security, and Environment management system with multi-tenant architecture for PLN units",
            id: "Sistem manajemen Health, Safety, Security, dan Environment dengan arsitektur multi-tenant untuk unit PLN",
          },
          techStack: ["Laravel 8", "MySQL", "JavaScript", "Multi-tenant"],
          features: {
            ar: ["....."],
            en: [
              "Upgraded from Laravel 5.7 to Laravel 8",
              "Multi-tenant architecture implementation",
              "Support for multiple PLN units across Kalimantan",
              "Centralized data management with tenant isolation",
            ],
            id: [
              "Upgrade dari Laravel 5.7 ke Laravel 8",
              "Implementasi arsitektur multi-tenant",
              "Dukungan untuk berbagai unit PLN di Kalimantan",
              "Manajemen data terpusat dengan isolasi tenant",
            ],
          },
          type: "fullstack",
          role: "Full Stack Developer",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        },
        {
          id: "hsse-pin-security",
          name: "HSSE PIN Security Feature",
          description: {
            ar: "...",
            en: "Enhanced security feature with PIN authentication for HSSE application",
            id: "Fitur keamanan yang ditingkatkan dengan autentikasi PIN untuk aplikasi HSSE",
          },
          techStack: ["Laravel", "MySQL", "JavaScript", "Security"],
          features: {
            ar: ["....."],
            en: [
              "PIN-based authentication system",
              "User documentation creation",
              "Security enhancement implementation",
              "Integration with existing HSSE system",
            ],
            id: [
              "Sistem autentikasi berbasis PIN",
              "Pembuatan dokumentasi pengguna",
              "Implementasi peningkatan keamanan",
              "Integrasi dengan sistem HSSE yang ada",
            ],
          },
          type: "backend",
          role: "Backend Developer",
        },
        {
          id: "waskita-karya",
          name: "Waskita Karya",
          description: {
            ar: "...",
            en: "Custom features development for Waskita Karya based on specific requirements",
            id: "Pengembangan fitur khusus untuk Waskita Karya berdasarkan kebutuhan spesifik",
          },
          techStack: ["Laravel", "MySQL", "JavaScript", "jQuery"],
          features: {
            ar: ["....."],
            en: [
              "Custom feature implementation",
              "Requirements analysis and development",
              "Database design and optimization",
              "Client-specific functionality",
            ],
            id: [
              "Implementasi fitur khusus",
              "Analisis kebutuhan dan pengembangan",
              "Desain dan optimasi database",
              "Fungsionalitas spesifik klien",
            ],
          },
          type: "fullstack",
          role: "Full Stack Developer",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
        },
      ],
    },
    personal: {
      name: "Personal & Side Projects",
      period: "Various",
      role: "Independent Developer",
      projects: [
        {
          id: "personal-portfolio",
          name: "Personal Portfolio Website",
          description: {
            ar: "...",
            en: "Modern portfolio website built with React and Framer Motion",
            id: "Website portfolio modern yang dibangun dengan React dan Framer Motion",
          },
          techStack: ["React", "Framer Motion", "TailwindCSS", "Vercel"],
          features: {
            ar: ["....."],
            en: [
              "Smooth animations and transitions",
              "Responsive design",
              "Project showcase",
              "Contact form integration",
            ],
            id: [
              "Animasi dan transisi yang smooth",
              "Desain responsif",
              "Showcase project",
              "Integrasi formulir kontak",
            ],
          },
          type: "frontend",
          role: "Full Stack Developer",
          image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
          github: "https://github.com/yourusername/portfolio",
          demo: "https://zakie.vercel.app/",
        },
        {
          id: "rest-api-boilerplate",
          name: "Golang REST API Boilerplate",
          description: {
            ar: "...",
            en: "Production-ready REST API boilerplate with clean architecture",
            id: "REST API boilerplate siap produksi dengan clean architecture",
          },
          techStack: ["Golang", "PostgreSQL", "JWT", "Docker", "Clean Architecture"],
          features: {
            ar: ["....."],
            en: [
              "Clean Architecture structure",
              "JWT authentication",
              "CRUD operations template",
              "Database migration setup",
              "Docker containerization",
              "Unit test examples",
            ],
            id: [
              "Struktur Clean Architecture",
              "Autentikasi JWT",
              "Template operasi CRUD",
              "Setup migrasi database",
              "Containerisasi Docker",
              "Contoh unit test",
            ],
          },
          type: "backend",
          role: "Backend Developer",
          github: "https://github.com/yourusername/go-rest-api",
        },
        {
          id: "task-management",
          name: "Task Management App",
          description: {
            ar: "...",
            en: "Full-stack task management application with real-time updates",
            id: "Aplikasi manajemen tugas full-stack dengan update real-time",
          },
          techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
          features: {
            ar: ["....."],
            en: [
              "Real-time task updates",
              "Project and team management",
              "Drag-and-drop interface",
              "Progress tracking",
              "Notification system",
            ],
            id: [
              "Update tugas real-time",
              "Manajemen project dan tim",
              "Antarmuka drag-and-drop",
              "Tracking progress",
              "Sistem notifikasi",
            ],
          },
          type: "fullstack",
          role: "Full Stack Developer",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
          github: "https://github.com/yourusername/task-management",
        },
      ],
    },
  };

  const scrollToProject = (projectId) => {
    const project = portfolioData[selectedCategory].projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProjectModal(project);
    }
  };

  const translations = {
    // en: {
    //   title: "Portfolio Projects",
    //   subtitle: "Muhammad Zakie - Software Engineer",
    //   filterBy: "Filter by Company",
    //   projects: "Projects",
    //   techStack: "Tech Stack:",
    //   keyFeatures: "Key Features:",
    //   companies: {
    //     hunayn: "Hunayn Teknologi",
    //     rkit: "RKIT",
    //     pragma: "Pragma Informatika",
    //     personal: "Personal Projects",
    //   },
    // },
    id: {
      title: "Proyek Portfolio",
      subtitle: "Muhammad Zakie - Software Engineer",
      filterBy: "Filter Berdasarkan Perusahaan",
      projects: "Proyek",
      techStack: "Teknologi:",
      keyFeatures: "Fitur Utama:",
      companies: {
        hunayn: "Hunayn Teknologi",
        rkit: "RKIT",
        pragma: "Pragma Informatika",
        personal: "Proyek Pribadi",
      },
    },
  };

  const t = translations.id;

  const categoryButtons = [
    { key: "hunayn", label: t.companies.hunayn, icon: <FaBuilding /> },
    { key: "rkit", label: t.companies.rkit, icon: <FaBuilding /> },
    { key: "pragma", label: t.companies.pragma, icon: <FaBuilding /> },
    { key: "personal", label: t.companies.personal, icon: <FaBuilding /> },
  ];

  const tabs = [
    { key: "work", label: "Pengalaman Kerja", icon: <FaBuilding /> },
    { key: "skills", label: "Skills", icon: <FaTools /> },
    { key: "personal", label: "Proyek Pribadi", icon: <FaLaptopCode /> },
  ];

  // Helper function to get features from portfolioData
  const getProjectFeatures = (projectName) => {
    for (const companyKey in portfolioData) {
      const company = portfolioData[companyKey];
      const project = company.projects.find(p => p.name.toLowerCase().includes(projectName.toLowerCase()) || projectName.toLowerCase().includes(p.name.toLowerCase()));
      if (project && project.features) {
        return project.features.id || project.features.en || null;
      }
    }
    return null;
  };

  return (
    <div id="portfolio" className="bg-slate-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">{t.title}</h1>

        {/* Main Tabs */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white rounded-lg p-1 shadow-md flex flex-col sm:flex-row gap-1 w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base ${
                  activeTab === tab.key
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <span className="flex-shrink-0">{tab.icon}</span>
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Work Tab */}
        {activeTab === "work" && (
          <>
            {loading ? (
              <div className="text-center py-8">Loading...</div>
            ) : (
              <>
                {/* Company Tabs with Logo */}
                <div className="flex justify-center mb-8 px-4">
                  <div className="bg-white rounded-lg p-1 shadow-md flex flex-col sm:flex-row gap-1 w-full sm:w-auto">
                    {experiences?.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => setSelectedCategory(exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-'))}
                        className={`px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base ${
                          selectedCategory === exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-')
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-6 h-6 rounded-full object-contain"
                        />
                        <span className="whitespace-nowrap">{exp.company}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Company Info & Projects */}
                {experiences?.map((exp) => {
                  const categoryKey = exp.company.toLowerCase().replace(/[^a-z0-9]/g, '-');
                  if (selectedCategory !== categoryKey) return null;
                  
                  return (
                    <div key={exp.id}>
                      {/* Company Info */}
                      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center gap-4">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-20 h-20 rounded-full object-contain bg-gray-50 p-2"
                          />
                          <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-800">{exp.company}</h2>
                            <p className="text-gray-600 font-medium">{exp.position}</p>
                            <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <FaMapMarker /> {exp.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaClock /> {exp.period}
                              </span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{exp.type}</p>
                          </div>
                        </div>
                        
                        {/* Company Description & Website */}
                        {(() => {
                          // Find matching company in portfolioData by checking if company name contains the key
                          let companyData = null;
                          const companyLower = exp.company.toLowerCase();
                          
                          // Map company names to portfolioData keys
                          const companyKeyMap = {
                            'hunayn': 'hunayn',
                            'rakitek': 'rkit',
                            'pragma': 'pragma',
                            'ibnu': 'pps-ibnu-masud',
                          };
                          
                          // Try to find matching key
                          for (const [searchKey, portfolioKey] of Object.entries(companyKeyMap)) {
                            if (companyLower.includes(searchKey)) {
                              companyData = portfolioData[portfolioKey];
                              break;
                            }
                          }
                          
                          if (!companyData) return null;
                          return (
                            <div className="mt-6 pt-4 border-t border-gray-200">
                              {companyData.description && (
                                <p className="text-gray-600 mb-3">{companyData.description}</p>
                              )}
                              {companyData.website && (
                                <a
                                  href={companyData.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 font-medium"
                                >
                                  <FaExternalLinkAlt /> Kunjungi Website
                                </a>
                              )}
                            </div>
                          );
                        })()}
                      </div>

                      {/* Company Projects */}
                      {exp.projects && exp.projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {exp.projects.map((project) => (
                            <div
                              key={project.id}
                              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                            >
                              {project.screenshot && (
                                <div className="bg-gray-100 flex items-center justify-center p-4">
                                  <img
                                    src={project.screenshot}
                                    alt={project.name}
                                    className="w-full h-48 object-contain rounded"
                                  />
                                </div>
                              )}
                              <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                  {project.technologies?.slice(0, 5).map((tech, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                                <button
                                  onClick={() => setSelectedProjectModal(project)}
                                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm"
                                >
                                  Lihat Detail
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-4">Tidak ada proyek untuk ditampilkan</p>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="min-h-[50vh] bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 text-orange-600">⚙️</span>
                <span className="text-lg font-medium">Backend</span>
                <span className="text-sm text-gray-500">Golang, Node.js, Python, PHP, Laravel</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 text-blue-600">💻</span>
                <span className="text-lg font-medium">Frontend</span>
                <span className="text-sm text-gray-500">React, Vue, Svelte, TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 text-green-600">📱</span>
                <span className="text-lg font-medium">Mobile</span>
                <span className="text-sm text-gray-500">React Native, Flutter</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 text-purple-600">🗄️</span>
                <span className="text-lg font-medium">Database</span>
                <span className="text-sm text-gray-500">PostgreSQL, MySQL, MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-6xl mb-2 text-gray-600">☁️</span>
                <span className="text-lg font-medium">DevOps</span>
                <span className="text-sm text-gray-500">Docker, AWS, Azure</span>
              </div>
            </div>
          </div>
        )}

        {/* Personal Tab */}
        {activeTab === "personal" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {project.screenshot && (
                  <div className="bg-gray-100 flex items-center justify-center p-4">
                    <img
                      src={project.screenshot}
                      alt={project.name}
                      className="w-full h-48 object-contain rounded"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies?.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedProjectModal(project)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-3 rounded text-sm"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProjectModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProjectModal(null)}
          >
            <div 
              className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-blue-600 px-6 py-4 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold">{selectedProjectModal.name}</h2>
                    <p className="text-blue-100 text-sm mt-1">{selectedProjectModal.role || selectedProjectModal.position}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProjectModal(null)}
                    className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {/* Project Image */}
                {(selectedProjectModal.screenshot || selectedProjectModal.image) && (
                  <div className="mb-6 bg-gray-100 rounded-lg p-4">
                    <img
                      src={selectedProjectModal.screenshot || selectedProjectModal.image}
                      alt={selectedProjectModal.name}
                      className="w-full h-auto object-contain rounded"
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Deskripsi</h3>
                  <p className="text-gray-600">
                    {selectedProjectModal.description?.id || selectedProjectModal.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.techStack}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(selectedProjectModal.technologies || selectedProjectModal.techStack || []).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features - get from portfolioData */}
                {(() => {
                  const features = getProjectFeatures(selectedProjectModal.name);
                  return features && features.length > 0 ? (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.keyFeatures}</h3>
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <span className="text-blue-500 mr-2 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null;
                })()}

                {/* Links for Personal Projects */}
                {selectedProjectModal.photoLink && (
                  <div className="mb-4">
                    <a
                      href={selectedProjectModal.photoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
                    >
                      📷 Photos
                    </a>
                  </div>
                )}
                {selectedProjectModal.youtubeLink && (
                  <div className="mb-4">
                    <a
                      href={selectedProjectModal.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      📹 Video
                    </a>
                  </div>
                )}
                {selectedProjectModal.fileLink && (
                  <div className="mb-4">
                    <a
                      href={selectedProjectModal.fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      📄 Files
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Portfolio;