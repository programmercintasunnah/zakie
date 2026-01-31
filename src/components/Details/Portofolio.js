import { useState, useRef } from "react";
// import { motion } from "framer-motion";
import { FaHome, FaGithub, FaExternalLinkAlt, FaBuilding, FaGlobe } from "react-icons/fa";
// import SyirkahWeb from "../../assets/syirkah-web.png"
// import DashboardSyirkah from "../../assets/dashboard-syirkah.png"
// import SyirkahWebTenant from "../../assets/web-mumtazah.png"
// import IBankMobileApp from "../../assets/homescreen-ibank.png"
// import LandingCompanyWeb from "../../assets/landing-company.png"
// import JKTHalalExpoWeb from "../../assets/jakarta-halal-expo.png"
// import SiamMianHomePage from "../../assets/siam-mian-homepage.png"

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("hunayn");
  const [selectedProject, setSelectedProject] = useState(null);
  const [language, setLanguage] = useState("en");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const projectRefs = useRef({});

  const portfolioData = {
    hunayn: {
      name: "Hunayn Teknologi",
      period: "May 2023 - Present (2 years 8 months)",
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
            en: "A web-based academic information system for Ma'had Imam An-Nawawi that helps students access schedules, quizzes, attendance, learning materials, and academic activities through a modern and responsive interface.",
            id: "Sistem informasi akademik berbasis web untuk Ma'had Imam An-Nawawi yang memudahkan santri mengakses jadwal, kuis, presensi, materi pembelajaran, dan aktivitas akademik melalui antarmuka yang modern dan responsif.",
          },
          techStack: ["React", "Typescript"],
          features: {
            ar: ["....."],
            en: [
              "Student dashboard with academic overview",
              "Quiz and exam listing with deadline information",
              "Attendance management (present, permission, etc)",
              "Class schedule and detailed schedule modal",
              "Responsive mobile-first UI",
              "Interactive tab navigation and smooth scrolling",
            ],
            id: [
              "Dashboard santri dengan ringkasan akademik",
              "Daftar kuis dan ujian beserta batas waktu",
              "Manajemen presensi (hadir, izin, dll)",
              "Jadwal pelajaran dan detail jadwal dalam modal",
              "Tampilan responsif dengan pendekatan mobile-first",
              "Navigasi tab interaktif dengan scroll yang halus",
            ],
          },
          type: "frontend",
          role: "Frontend Developer",
          image: "/assets/siam-mian-homepage.png",
        }
      ],
    },
    rkit: {
      name: "Ruang Kreasi Inovasi Teknologi",
      period: "April 2022 - February 2023 (11 months)",
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
      period: "October 2021 - March 2022 (6 months)",
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
    setSelectedProject(projectId);
    // DISABLED SCROLL
    // setTimeout(() => {
    //   projectRefs.current[projectId]?.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }, 100);
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  const languages = {
    en: { flag: "🇬🇧", name: "English" },
    id: { flag: "🇮🇩", name: "Indonesia" },
    ar: { flag: "🇸🇦", name: "العربية" },
  };

  const translations = {
    en: {
      title: "Portfolio Projects",
      subtitle: "Muhammad Zakie - Software Engineer",
      filterBy: "Filter by Company",
      projects: "Projects",
      techStack: "Tech Stack:",
      keyFeatures: "Key Features:",
      companies: {
        hunayn: "Hunayn Teknologi",
        rkit: "RKIT",
        pragma: "Pragma Informatika",
        personal: "Personal Projects",
      },
    },
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
    ar: {
      title: "مشاريع الحافظة",
      subtitle: "محمد زكي - مهندس برمجيات",
      filterBy: "تصفية حسب الشركة",
      projects: "المشاريع",
      techStack: "التقنيات:",
      keyFeatures: "الميزات الرئيسية:",
      companies: {
        hunayn: "حنين تكنولوجي",
        rkit: "راكيتك",
        pragma: "براغما إنفورماتيكا",
        personal: "المشاريع الشخصية",
      },
    },
  };

  const t = translations[language];

  const categoryButtons = [
    { key: "hunayn", label: t.companies.hunayn, icon: <FaBuilding /> },
    // { key: "rkit", label: t.companies.rkit, icon: <FaBuilding /> },
    // { key: "pragma", label: t.companies.pragma, icon: <FaBuilding /> },
    // { key: "personal", label: t.companies.personal, icon: <FaLaptopCode /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex justify-between items-center">
              <div div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                
              >
                <h1 className="text-3xl md:text-4xl font-bold text-white">{t.title}</h1>
                <p className="text-blue-100 mt-2">{t.subtitle}</p>
              </div>
              <div className="flex items-center space-x-3">
                {/* Language Selector */}
                <div className="relative">
                  <div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                    className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-50  shadow-lg flex items-center space-x-2"
                  >
                    <FaGlobe className="text-xl" />
                    <span className="text-sm font-medium hidden sm:inline">
                      {languages[language].flag}
                    </span>
                  </div>

                  {showLanguageMenu && (
                    <div div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden"
                    >
                      {Object.entries(languages).map(([code, { flag, name }]) => (
                        <button
                          key={code}
                          onClick={() => {
                            setLanguage(code);
                            setShowLanguageMenu(false);
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-blue-50  ${language === code ? "bg-blue-100" : ""
                            }`}
                        >
                          <span className="text-2xl">{flag}</span>
                          <span className="text-gray-700 font-medium">{name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Home Button */}
                <div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBack}
                  className="p-3 rounded-full bg-white text-blue-600 hover:bg-blue-50  shadow-lg"
                >
                  <FaHome className="text-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              
              className="lg:w-80 bg-gray-50 border-r border-gray-200 p-6"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.filterBy}</h2>

              {/* Category Buttons */}
              <div className="space-y-2 mb-6">
                {categoryButtons.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => {
                      setSelectedCategory(category.key);
                      setSelectedProject(null);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg  ${selectedCategory === category.key
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium text-sm">{category.label}</span>
                  </button>
                ))}
              </div>

              {/* Project List */}
              {portfolioData[selectedCategory] && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3 uppercase">
                    {t.projects} ({portfolioData[selectedCategory].projects.length})
                  </h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {portfolioData[selectedCategory].projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => scrollToProject(project.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg  ${selectedProject === project.id
                          ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        <div className="font-medium text-sm">{project.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{project.role}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-8 overflow-y-auto" style={{ maxHeight: "calc(150vh - 200px)" }}>
              {portfolioData[selectedCategory] && (
                <>
                  {/* Company Info */}
                  <div div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    
                    className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
                  >
                    <h2 className="text-2xl font-bold text-gray-800">{portfolioData[selectedCategory].name}</h2>
                    <p className="text-gray-600 mt-2">{portfolioData[selectedCategory].role}</p>
                    <p className="text-sm text-gray-500 mt-1">{portfolioData[selectedCategory].period}</p>
                  </div>

                  {/* Projects Grid */}
                  <div className="space-y-6">
                    {portfolioData[selectedCategory].projects.map((project, index) => (
                      <div div
                        key={project.id}
                        ref={(el) => (projectRefs.current[project.id] = el)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        
                        className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl  ${selectedProject === project.id ? "ring-4 ring-blue-400" : ""
                          }`}
                      >
                        <div className={`flex flex-col ${project.image ? "md:flex-row" : ""}`}>
                          {/* Project Image */}
                          {project.image && (
                            <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-4">
                              <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-auto object-contain rounded-lg shadow-md"
                                style={{ maxHeight: "400px" }}
                              />
                            </div>
                          )}

                          {/* Project Content */}
                          <div className={`p-6 ${project.image ? "md:w-3/5" : "w-full"}`}>
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                                  {project.type}
                                </span>
                              </div>
                              <div className="flex space-x-2">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 "
                                  >
                                    <FaGithub />
                                  </a>
                                )}
                                {project.demo && (
                                  <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
                                  >
                                    <FaExternalLinkAlt />
                                  </a>
                                )}
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4">{project.description[language]}</p>

                            {/* Tech Stack */}
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.techStack}</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">{t.keyFeatures}</h4>
                              <ul className="space-y-1">
                                {project.features[language].map((feature, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;