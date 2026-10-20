LAPORAN KEGIATAN PEKERJAAN HARIAN
27 Desember 2025 – 12 Januari 2026
mengerjakan project di Hunayn Technologies.
Project: SIAM MIAN (Frontend – React + Vite)
13 Januari 2026
Melakukan pengembangan frontend pada project SIAM MIAN, termasuk perbaikan halaman ubah password dan validasi input pengguna.
14 Januari 2026
Melakukan penyesuaian dan perapihan struktur folder project agar selaras dengan arsitektur SIAM MIAN versi 1, serta melakukan:
Setup Tailwind CSS v4
Pengujian integrasi Tailwind ke App.tsx
Pengembangan UI Landing Page, Login Page dan Register Page
Mengimplementasikan service API sebagai lapisan abstraksi komunikasi frontend–backend
15 Januari 2026
Mengembangkan dan melengkapi halaman utama aplikasi, meliputi:
Implementasi bottom navigation (reusable)
Pengembangan UI Home Page menggunakan data dummy
16 Januari 2026
Libur tanggal merah (Isra Mi’raj Nabi Muhammad Shallallahu ‘alaihi wasallam).
17 Januari 2026
Libur kerja.
18 Januari 2026
Libur kerja.
19 Januari 2026
Melanjutkan dan menyelesaikan pengembangan frontend SIAM MIAN, termasuk:
Pengembangan UI Profile Page yang termasuk UI Pengaturan Profil, UI Ubah Password menggunakan data dummy
Implementasi modal, loading state (reusable)
untuk melihat demo nya, bisa di klik link berikut : https://drive.google.com/file/d/1R4nzT6qRN1G5bpfdKp6EqK9AuelEhQkB/view?usp=sharing 
20 Januari 2026
Melakukan pengembangan UI pada modul Kelas dan Kuis, meliputi:
Pengembangan UI Class Page (jadwal, kuis/ujian) menggunakan data dummy
Pengembangan UI Detail Pelajaran dan Detail Pertemuan
Pengembangan UI Quiz (halaman pengerjaan kuis)
Pengembangan UI Quiz Result dan Detail Quiz Result
Pengembangan tab navigasi pada halaman kelas dan kuis
deploy UI ke cloudflare.com 
Serta melakukan implementasi komponen dan utilitas reusable, meliputi:
Tab Navigation (reusable)
ScrollToTop component
ScoreCircle component untuk visualisasi nilai
Custom hook useScrollToTop
untuk melihat demo nya, khusus halaman ClassPage, bisa klik link ni: https://drive.google.com/file/d/1zcf1p3jEfFYOrnAWpTzU0C02ffBLHgUI/view?usp=sharing
bisa coba disini juga : https://siam-mian-v2.pages.dev/ 

21 Januari 2026
Melakukan perubahan dan peningkatan UX pada halaman registrasi, meliputi:
Mengubah komponen pemilihan kelas dari dropdown select menjadi selection cards untuk meningkatkan user experience
Menambahkan fitur input lokasi menggunakan peta (map) untuk penentuan titik koordinat lokasi pengguna
Penyesuaian UI/UX agar lebih intuitif dan user-friendly
22 Januari 2026
Melakukan integrasi API authentication dan persiapan infrastruktur backend, meliputi:
Integrasi API authentication untuk fitur login dan register
Setup dan konfigurasi service layer sebagai abstraksi komunikasi frontend–backend
Implementasi error handling dan response formatting untuk API calls
Pengembangan struktur auth service untuk manajemen token dan session
23 Januari 2026
Melanjutkan integrasi API dan pengembangan komponen layout, meliputi:
Integrasi API untuk modul course (mata pelajaran/kelas)
Implementasi fitur upload file/gambar dengan validasi dan preview
Pengembangan auth.layout sebagai wrapper komponen untuk halaman yang memerlukan autentikasi
Implementasi route protection dan redirect logic berdasarkan status autentikasi
Testing dan debugging integrasi API untuk memastikan komunikasi frontend–backend berjalan lancar
24 Januari 2026
Libur kerja.
25 Januari 2026
Libur kerja.
26 Januari 2026
Melakukan integrasi API dan pengembangan fitur pada Home Page, meliputi:
Integrasi API untuk menampilkan data jadwal pelajaran (schedule) dari backend dengan filter 3 hari ke depan
Integrasi API untuk menampilkan data kuis/ujian dengan filter berdasarkan deadline yang masih aktif
Implementasi fitur presensi kehadiran dengan integrasi API lesson attendances, termasuk:
Presensi "Masuk" dengan validasi waktu (hanya dapat dilakukan pada jam pelajaran)
Presensi "Izin" dengan kebebasan waktu (dapat dilakukan kapan saja di hari yang sama)
Fitur dropdown pemilihan alasan izin dan textarea keterangan
Integrasi API untuk menampilkan video pembelajaran (Muroja'ah)
Implementasi logic filter data berdasarkan tab course yang dipilih
Pengembangan utilitas dateFormatter.ts untuk formatting tanggal dan waktu secara konsisten
Implementasi helper functions untuk validasi waktu presensi
Perbaikan dan optimasi performa dengan penggunaan useMemo dan useCallback
Refactoring kode untuk menghilangkan duplikasi dan meningkatkan reusability
halaman profile menggunakan data dari getDetailedUser() 
update password sudah berjalan menggunakan api
untuk melihat demo nya, dari auth login register sampai halaman homepage & profilepage, bisa klik link ni: https://drive.google.com/file/d/1l2vSyPvAhzJIOUSfyM8HvSeKI6jBcWsu/view?usp=sharing

27 Januari 2026
membuat component skeleton untuk card course, card course detail, lesson detail, quiz detail. termasuk buat agar pengumuman pake skeleton dan juga tagihan spp di profile.
perbaiki ui murojaah di homepage agar sesuai ui di figma.
membuat halaman jika quiz tidak ada
28 Januari 2026
integrasi dengan api untuk banner pengumuman (api site config).
integrasi dengan api untuk halaman kelas, baru kelas reguler dan arsip kelas.
apabila card kelas di klik, maka akan ke halaman detail kelas yang sudah diintegrasikan dengan api (tab jadwal & kuis/ujian)
apabila card di tab jadwal di klik, maka ke halaman detail pertemuan yang sudah di integrasikan dengan api beserta ada deskripsi & kontent dan juga tombol zoom in dan zoom out.
29 Januari 2026
di tab kuis/ujian ada card yang jika di klik “kerjakan kuis” maka ke halaman detail dari quiz yang sudah integrasi dengan api.
tombol mulai kerjain quiz akan disabled jika soal tidak ada dan muncul alert bahwa soal tidak ada.
perbaiki ui tagihan spp di profile page agar sesuai ui di figma.
30 Januari 2026
jika klik tombol mulai kuis, maka akan di cek apakah sudah mengerjakan atau belum, jika ‘no retake’ alias 1 kali percobaan (sudah pernah), maka gk bisa lagi kerjain ulang.
jika no retake tapi masih ada waktu tersisa, maka bisa mengerjakan nya lagi.
halaman untuk quiz yaitu yang isi nya soal dan option soal sudah dengan api dan baru support soal multiple_choice, single_choice, true_false.
sudah support teks arabic di soal quiz dan di detail (deskripsi & kontent) dari pertemuan.
dan ada juga tombol zoom in/out siapa tau ada bapak2 mau perbesar huruf.
31 Januari 2026
Libur kerja.

1 Februari 2026
Libur kerja.
untuk melihat demo nya, task pengerjaan dari tangga 27 januari - 30 januari 2026: https://drive.google.com/file/d/1Ow9fllRC7UD3i3oH21akFqDQUKxmCOig/view?usp=drive_link
demo setelah fix bug di card murojaah home-page + lanjutkan kerjain kuis agar jika user keluar dari quiz maka dia bisa kembali kerjakan kuis jika waktu masih ada + kondisi lainnya: https://drive.google.com/file/d/1I6o4uZb1Pny3CHw_vnoJw1o7k6L73wgZ/view?usp=sharing
2 Februari 2026
fixing agar course yang tampil di homepage hanya yang OPEN aja.
fixing agar course yang tampil di class-detail-page yang OPEN & DONE aja.
mengimplementasikan api ke submit quiz
perbaiki halaman class-detail (tab jadwal) agar ui nya sama dengan ui figma
perbaiki halaman class-detail (tab kuis & tugas) agar ui nya sama dengan ui figma
3 Februari 2026
berhasil mengimpelemtasikan API ke submit quiz
mencoba membuat func untuk get quiz beserta user-answers dan pilihan jawaban dan jawaban bener dan salah, tapi gagal karna is_true (jawaban nya private)
jadi, pake endpoint getStudentAnswer untuk mendapatkan quiz beserta pilihan nya dan jawaban user dan juga pilihan/jawaban yang bener tanpa mengubah is_true menjadi public (di halaman quiz-result-detail)
4 Februari 2026
nampilin registration_image di halaman class-page.tsx, jika tidak ada image nya maka tampilkan no-image
success mengimplementasikan API endpoint yang sama (getStudentAnswer) di halaman quiz-result yang hanya nampilin total jumlah benar dan salah.
support image di RTE (Rich Text Editor) yang nampil di halaman pengerjaan quiz dan detail result quiz.
membuat inputan untuk essay di quiz-page beserta di result detail nya, tapi masih dalam data dummy, krna api dari backend nya belum support soal type essay
demo kerjaan dari 2 februari - 4 februari: https://drive.google.com/file/d/1mIb2V4PFUNZ_LX9AgvYgzg_EjlPDd6Ef/view?usp=sharing 
5 Februari 2026
menampil data profile (user) ke halaman profil dan ke halaman setting user beserta avatar (foto profile nya) dengan API (tidak dummy data lagi)
upload avatar/foto profil di halaman profile-settings berhasil (sudah menggunakan api upload dari strapi
update data profile (user) berhasil menggunakan API updateAwait untuk update data.
demo integrasi api untuk upload avatar / foto profile user beserta update data profile user: https://drive.google.com/file/d/1D2MRw_S_q60AoCkF1MjCt6YIJQkubx74/view?usp=sharing 
6 Februari 2026
LoginPage.tsx - tambahkan error display mode (modal vs input)
RegisterPage.tsx - implement step validation dengan error persistence beserta tambahin konfirmasi dialog dan error feedback
integrasikan api financial-payments & financial-responsibility (menampilkan) ke profile-page (tepat nya di tagihan spp)
setting & rebuild https://siam-mian-v2.pages.dev/ agar menggunakan api production (api dari backend strapi)
demo login-page (munculin error 2 pilihan yaitu modal atau diatas form) & login-register (ada konfirmasi jika belum ngisi saat mau lanjut step) https://drive.google.com/file/d/1NhrsZ-LOvHd_L3HpzCOap6KA9kPyHB_c/view?usp=sharing 
demo nampilin data total tagihan spp sudah diintegrasikan dengan api (profile page): https://drive.google.com/file/d/1ZSXplEPjqDWhh3_V9hJ_uTmJBa_WaiPh/view?usp=sharing
7 Februari 2026
Libur kerja.
8 Februari 2026
Libur kerja.
9 Februari 2026
Melakukan pengembangan dan perbaikan fitur navigasi serta struktur tampilan pada halaman Home dan Class, meliputi:
Menambahkan sub tab navigasi pada halaman Home untuk memisahkan tab Semua Course dan Course Parent
Melakukan perbaikan logic dan tampilan tab navigation homepage
Memperbaiki fitur tab Quiz agar mendukung struktur course parent & child
hanya menampilkan maksimal 5 data Muroja’ah dan Menambahkan tombol Load Muroja’ah untuk menampilkan daftar video pembelajaran secara bertahap
Melakukan refactoring dan penyempurnaan UI tab navigasi agar lebih konsisten dan mudah digunakan
10 Februari 2026
Melakukan pengembangan fitur filtering dan manajemen tampilan data pembelajaran serta kuis, meliputi:
Menambahkan fitur sorting Muroja’ah berdasarkan course_date pada halaman Home
Menambahkan fitur mode Quiz tanpa deadline & dengan deadline (default with deadline) untuk debugging lalu dihapus.
redesign tab di class-page beserta card nya. tab nya sama seperti di tab quiz/tugas di home-page yaitu sama sama ada course_parent
11 Februari 2026
Melakukan pengembangan fitur presensi aktivitas pengguna pada aplikasi, meliputi:
Menambahkan fitur Clock In dan Clock Out pada halaman Home
Implementasi UI dan logic presensi aktivitas pengguna harian
Penyesuaian state management dan integrasi data presensi dengan tampilan homepage
membuat service untuk Clock In & Clock Out (ClockAttendancesService.ts)
demo langsung dengan data dari production (tab-nav pake course root & child dan perbaikan lainnya) : https://drive.google.com/file/d/1RhtOMnpDgy-k01hkLGMcY9uKEwEwUx9I/view?usp=sharing
demo clock in & clock out (untuk user yang lupa bawa ID CARD): https://drive.google.com/file/d/1hXh4CVAJqnaF7n14IxC_sxQhqdSqzs4F/view?usp=sharing
12 Februari 2026
Melakukan refactoring code bagian HomePage.tsx yang sebelum nya monolithic menjadi modular component sehingga mudah dipelihara
perbaikan bagian presensi kehadiran karna ada bug & issues setelah melakukan refactoring
refactoring code di halaman profile-page yang sebelum nya semua fungsi ada di file tersebut, sekarang pake hook, sehingga kode mudah dibaca dan di maintainance oleh programmer selanjutnya.
13 Februari 2026
refactoring halaman change-password-page, sehingga dipisah antara UI dan fungsi untuk hit API, sehingga kode mudah di baca dan di maintainance selajutnya.
refactoring code di halaman profile-settings-page yang untuk update informasi pribadi seperti foto profile & data username, email, nomor hp. sekarang sudah dipisahkan antara kode UI dengan kode fungsi
refactoring code di halaman class-page, class-detail-page, lesson-detail-page sehingga kode nya lebih clean dan mudah di maintainance.
14 Februari 2026
Libur kerja.
15 Februari 2026
Libur kerja.
16 Februari 2026
Melakukan penambahan fitur filter kuis pada halaman utama, termasuk toggle untuk menampilkan semua kuis atau hanya kuis yang memiliki batas waktu (deadline).
Melakukan perbaikan logika filter kuis agar kuis tanpa deadline tetap dapat ditampilkan ketika toggle deadline dinonaktifkan serta menyembunyikan kuis yang sudah melewati batas waktu.
Melakukan peningkatan pengalaman pengguna pada halaman kelas dengan menjadikan seluruh area kartu kelas dapat diklik untuk navigasi ke halaman detail kelas.
Melakukan refactoring pada halaman-halaman kuis dengan memisahkan logic ke dalam hooks, types, dan utils sehingga struktur kode menjadi lebih modular, mudah dibaca, dan mudah dipelihara.
Melakukan standarisasi import dengan menambahkan alias @/ untuk mempermudah pengelolaan path dan meningkatkan keterbacaan kode.
Melakukan perbaikan tampilan dan informasi pada ringkasan tagihan dengan menambahkan informasi tipe pembayaran (paymentType).
Melakukan perbaikan teks tombol pada fitur muroja’ah agar lebih sesuai dengan kebutuhan tampilan dan penggunaan.
Melakukan pengembangan halaman pembayaran (payment page) yang dilengkapi fitur sorting, load more data, serta filter data berdasarkan user.
Melakukan peningkatan pengalaman pengguna pada halaman utama dengan menjadikan kartu kuis dapat diklik untuk langsung menuju halaman detail kuis.
Melakukan perbaikan section muroja’ah dengan menggunakan gambar subject yang bersumber dari API serta memperbaiki dependency pada useMemo untuk mencegah render yang tidak diperlukan.
17 Februari 2026
Libur tanggal merah (Tahun baru imlek).
18 Februari 2026
Menambahkan overdue modal yang muncul saat login jika terdapat tunggakan pembayaran.
Memperbaiki logika agar overdue modal hanya muncul saat login atau refresh halaman.
Merestrukturisasi tab menjadi responsibility, payment, dan jatuh tempo.
Menambahkan responsibility_group, detail modal dengan progress, serta payment_late_date_count.
Mengkonsolidasikan pengambilan data SPP ke dalam hook useSPPData.
Mengimplementasikan integrasi payment gateway Doku melalui webhook n8n.
19 Februari 2026
Menambahkan overdue modal yang muncul saat login jika terdapat tunggakan pembayaran.
Melakukan pengujian menyeluruh terhadap integrasi payment gateway Doku untuk memastikan webhook, update status pembayaran, dan sinkronisasi data berjalan dengan baik.
Melakukan perapihan kode pada modul pembayaran agar lebih modular dan mudah dikembangkan ke depannya.
Melakukan penyesuaian tampilan kartu pembayaran agar informasi tanggung jawab dan jatuh tempo lebih jelas terbaca oleh pengguna.
Melakukan pengecekan dan perbaikan minor bug pada alur login terkait pemunculan overdue modal.
Melakukan finalisasi dan validasi alur pembayaran manual serta payment gateway sebelum tahap deployment.
20 Februari 2026
Memperbaiki auto-refresh data setelah pembayaran manual dan payment gateway berhasil agar status langsung ter-update tanpa reload.
Menambahkan payment config serta meningkatkan tampilan payment modal.
Memperbaiki logika jatuh tempo agar lebih akurat dan konsisten.
Menyesuaikan request ke FormData untuk kompatibilitas webhook n8n.
Melakukan pengujian ulang end-to-end untuk memastikan sinkronisasi data berjalan stabil.
harusnya masuk pesan LINK pembayaran spp ke nomor whatsApp tapi belum diaktifkan oleh tim backend (masvergie)
demo pembayaran spp dengan payment gateway (webhook) + transfer manual (tanp webhook): https://drive.google.com/file/d/1mfxJWRj4rk-tWnXMcQFfmVWoqIzb1Tj3/view?usp=sharing
21 Februari 2026
Libur kerja.
22 Februari 2026
Libur kerja.
23 Februari 2026
Memperbaiki filter dan tampilan quiz tabs agar hanya menampilkan course yang memiliki kuis (termasuk child course).
Menghapus sub-tabs di ClassPage dan memperbaiki logika kategori (main-reguler & arsip).
Mengambil data teacher langsung dari database dan mengaktifkan populate pada schedule.
Optimasi performa homepage & class detail (reduce unused populate).
Memfilter murojaah 7 hari terakhir serta memperbaiki UI modal dan penggunaan useMemo.
24 Februari 2026
refactor UI bagian beranda, kelas, quiz result, quiz detail yang mana sebelum nya pake card dan diubah tidak pakai card lagi untuk menyesuikan dengan UI Figma yang sudah di design mas ayyas.
update juga skeleton nya menyesuaikan dengan perubahan UI nya
tambahkan loading lazy ke semua image untuk performa yang lebih baik.
Memperbaiki perhitungan jumlah jawaban benar dan salah berdasarkan actual answers, bukan lagi dari score.
Menampilkan tombol "Lihat Hasil" ketika quiz_user_status bernilai DONE.
Mengambil data quiz_user melalui API terpisah (bukan populate) untuk mencegah tampilnya data kuis milik user lain.
Memperbaiki header homepage agar tidak sticky dan kembali mengikuti alur scroll normal halaman.
25 Februari 2026
Mengubah background halaman pada Profile, Profile Setting, Change Password, Payment, dan E-Maktabah agar lebih konsisten dengan desain global.
Melakukan berbagai perbaikan UI pada ClassPage, QuizPage, dan QuizResultDetailPage untuk meningkatkan kerapian dan konsistensi tampilan.
Menyesuaikan layout scrolltop di QuizPage, menghapus padding pada BannerCarousel, memperbarui warna divider attendance di ClassDetailPage, serta memperbaiki tinggi tab silabus dan nilai.
Meningkatkan konsistensi tampilan mobile dengan menambahkan max-width pada sticky header dan tabs, menambahkan body background, serta menambahkan prop showSort pada MurojaahSection.
Memperbarui class tabs dengan default tab dinamis, menambahkan ikon peringatan pada kategori arsip, serta menyempurnakan logika penentuan kategori berdasarkan parent name.
26 Februari 2026
mengerjakan project di Hunayn Technologies.
27 Februari 2026
mengerjakan project di Hunayn Technologies.
28 Februari 2026
Libur kerja.
1 Maret 2026
Libur kerja.
2 Maret 2026
Menambahkan fitur Nilai & Rapor di ClassDetailPage dengan filter Nilai Utama / Nilai Lain, serta perbaikan perhitungan rata-rata (unscored = 0, tampil 1 desimal, hanya quiz yang dinilai).
Menambahkan link pembayaran DOKU di bawah tombol Bayar Sekarang dan memperbaiki webhook URL serta teks agar lebih jelas.
Memperbaiki sorting MurojaahSection dengan secondary sort createdAt.
3 Maret 2026
Menambahkan fitur e-Maktabah lengkap dengan search, filter tab, modal filter (course & lesson), auto-filter sesuai course user, hover animation, dan halaman detail buku.
Menggabungkan info buku, deskripsi, dan PDF dalam satu card serta menambahkan download silabus (menggunakan getFullImageUrl).
Memperbaiki logika filter (book_id, book_part_id, status, reset button, pencarian book_name_ar) dan penanganan null/empty string.
Refactor dengan memindahkan seluruh halaman e-Maktabah ke folder khusus dan memperbaiki import path.
Menyesuaikan background ke #f5f3f1 dan shadow menjadi shadow-sm pada halaman login, register, dan landing page.
demo fitur baru yaitu e-Maktabah dan Silabus di class-detail-page dan juga Nilai & Rapor di class-detail-page: https://drive.google.com/file/d/1tAmU0jOEr7BCohtUYyD0LAZE5JZVuheZ/view?usp=sharing
4 Maret 2026
Lanjut mengerjakan Dashboard untuk ROLE_TEACHER, yang mana tidak ada UI Figma nya dan saya nge-design UI sendiri.
Menambahkan role-based homepage redirect dan melewati pengecekan API finansial untuk role Teacher.
Melakukan refactor struktur folder untuk pemisahan role student dan teacher serta merapikan struktur komponen.
5 Maret 2026
Menambahkan fitur Teacher role lengkap dengan dashboard, sidebar, navbar, dan halaman kelas.
Menambahkan Teacher Profile Page dengan inline editing serta halaman Lesson Detail dengan tab dan scroll persistence.
6 Maret 2026
Menambahkan dark mode dengan toggle switch serta tema warna orange/teal.
Memperbaiki layout responsif pada beberapa halaman termasuk TeacherProfilePage.
Memperbarui UI teacher profile, logo, dan sidebar badge.
Menambahkan generation_number dan course_id pada data class serta tombol edit pada card dan tombol tambah lesson.
demo hasil kerja dari tanggal 4 - 6 maret 2026 mengerjakan UI untuk Dashboard ROLE_TEACHER tanpa UI Figma, dan saat ini masih pake data dummy dan fokus ke sidebar, navbar dan panel list lesson aja, karena untuk isi konten nya belum fix: https://drive.google.com/file/d/1EkMNxnZRSLdOKBff28lP5ctEQCMWbWH2/view?usp=sharing
7 Maret 2026
Libur kerja.
8 Maret 2026
Libur kerja.
9 Maret 2026
Memperbaiki perilaku sidebar dan lesson panel pada halaman teacher.
Melakukan refactor untuk meningkatkan reusability kode serta memperbaiki bug pada sidebar.
Melakukan refactor CollapsiblePanel menjadi pola collapse/expand yang lebih sederhana.
Melakukan refactor UI sidebar dan lesson panel dengan memperbaiki active item pada kelas arsip, menyesuaikan lebar layout, serta merestrukturisasi area scroll agar lebih rapi.
10 Maret 2026
Melakukan refactor halaman teacher dengan memindahkan logika data ke custom hooks agar lebih reusable.
Menambahkan fungsi refetch pada hooks untuk mempermudah refresh data.
Melakukan cleanup kode serta mengekstrak komponen tabs agar struktur kode lebih modular dan rapi.
Melakukan refactor halaman teacher dengan memindahkan logika data ke custom hooks, menambahkan fungsi refetch, serta melakukan cleanup kode dan ekstraksi komponen tabs agar lebih modular.
Menambahkan tampilan detail absensi dan informasi lengkap lessons pada tab detail kelas.
Menambahkan React Query untuk caching API classes dan lessons guna meningkatkan performa.
Menambahkan loading spinner pada sidebar dan lesson panel saat proses loading data.
Mengimplementasikan caching (React Query) untuk API class detail, lesson detail, dan attendance guna meningkatkan performa dan mengurangi request berulang.
Memperbaiki API courses dengan menambahkan populate students serta memanfaatkan data dari cache untuk efisiensi loading.
11 Maret 2026
Cuti Kerja dari hunayn
12 Maret 2026
Cuti Kerja dari hunayn
13 Maret 2026
Cuti Kerja dari hunayn
14 Maret 2026
Libur Kerja
15 Maret 2026
Libur Kerja
16 Maret 2026
Cuti Kerja dari hunayn
17 Maret 2026
Cuti Kerja dari hunayn
18 Maret 2026
Cuti Kerja dari hunayn
19 Maret 2026
Cuti Kerja dari hunayn
20 Maret 2026
Cuti Kerja dari hunayn
21 Maret 2026
Libur Kerja (Hari raya idul fitri)
22 Maret 2026
Libur Kerja
23 Maret 2026
Libur Kerja
24 Maret 2026
Libur Kerja
25 Maret 2026
Kerja untuk hunyan
26 Maret 2026
Kerja untuk hunyan
27 Maret 2026
Kerja untuk hunyan
28 Maret 2026
Libur Kerja
29 Maret 2026
Libur Kerja
30 Maret 2026
Mengimplementasikan edit course dan lesson (termasuk lesson detail dengan rich text editor menggunakan custom QuillEditor yang kompatibel dengan React 19).
Menambahkan integrasi penuh Teacher Profile (update profile, change password, upload avatar).
Melakukan optimasi API dan kompatibilitas Strapi v5, termasuk format tanggal ke ISO dan fallback ke numeric ID.
Menambahkan lazy load ReactQuill serta custom editor untuk stabilitas.
Mengoptimalkan React Query (cache cleanup, gcTime, limit retry).
Melakukan berbagai perbaikan pada halaman course dan lesson detail.
31 Maret 2026
Meningkatkan fitur grades/rapor (sorting, toggle nilai utama/non-utama, kolom kuis dinamis, ikon trophy, dan perbaikan perhitungan nilai rata-rata).
Memperbaiki dan melengkapi fitur attendance (persentase, detail per siswa, serta penambahan kolom waktu, alasan, dan catatan).
Meningkatkan tampilan lesson & silabus (edit, rich text, dan dukungan dark mode).
Memperbaiki pengambilan data quiz (fetch terpisah) serta error TypeScript terkait documentId.
Melakukan perbaikan UI tabel (header, tooltip, dan styling).
1 April 2026
Memperbaiki pengambilan dan struktur data quiz questions (menggunakan documentId, populate option_group, dan fetch terpisah) agar mendapatkan data jawaban benar (is_true) dengan akurat.
Meningkatkan tampilan quiz & hasil (highlight jawaban benar, tampilkan waktu lengkap, auto-expand, label lebih rapi, dan dukungan dark mode + Arabic styling).
Menambahkan fitur search & sorting pada tabel attendance dan lesson (nama, waktu, kode).
Menampilkan semua siswa di hasil quiz (termasuk yang belum mengerjakan) serta menambahkan informasi started_at.
Melakukan berbagai perbaikan UI dan cleanup kode kecil (hapus unused variable, perbaikan label, dan layout tabel).
2 April 2026
Menambahkan TeacherHomePage (stats, pengumuman, dan kelas aktif) dengan layout responsif dan scroll yang optimal.
Menambahkan fitur refresh per tab (attendance & grades) serta merapikan posisi tombol refresh.
Menampilkan semua siswa di Absensi dengan auto-alpha serta perbaikan logika pertemuan (0 jika belum ada).
Meningkatkan sidebar (sorting berdasarkan lesson terbaru, active state arsip, dan perbaikan TypeScript).
Menambahkan modal Tambah Pertemuan pada halaman teacher.
Melakukan berbagai perbaikan UI, height/layout (ResizeObserver, max-height), serta cleanup kode (hapus console.log, dll).
3 April 2026
Libur Kerja (tanggal merah)
4 April 2026
Libur Kerja (tanggal merah)
5 April 2026
Libur Kerja (tanggal merah)
6 April 2026
Melakukan perbaikan fitur pada role student, meliputi peningkatan loading state (spinner pada Murojaah & Attendance serta pemisahan loading courses dan banner), penambahan fallback untuk menampilkan 1 pertemuan terakhir jika tidak ada data 7 hari terakhir, serta perbaikan pesan kosong agar dinamis sesuai filter hari.
Melakukan penyesuaian label tab menjadi Tanggungan dan Pembayaran, serta menambahkan tab Mulakhash dan pola kategorisasi kelas .MASDAR.
Menambahkan greeting dinamis berdasarkan gender (Akh/Ukh/Ahlan Wa Sahlan) dan ubah icon dolar menjadi wallet di biaya kelas pada detail kelas.
Memperbaiki query attendance (tanpa limit & pagination tinggi) serta memperbaiki bug mismatch lesson ID pada tab persentase.
7 April 2026
Melakukan migrasi repository ke repo baru serta membuat project Cloudflare baru dengan URL staging: https://siamv2-mian.pages.dev/
Menambahkan fitur create lesson lengkap dengan form (termasuk field book_id dan book_part_id) serta perbaikan format request ke Strapi.
Meningkatkan lesson panel (default expand, persist ke localStorage, toggle lebih jelas, support mobile & dark mode).
Mengoptimalkan TeacherHomePage (sorting kelas berdasarkan kedekatan tanggal, perbaikan scroll & responsive card).
Melakukan perbaikan validasi input (support alphanumeric) dan konsistensi layout form add/edit lesson.
Menambahkan CI/CD Cloudflare Pages (GitHub Actions) serta perbaikan konfigurasi project.
8 April 2026
Menambahkan theme landing page baru (Full Image Background) serta menjadikan “Tanpa Design” sebagai default, termasuk update font (Noto Sans Arabic & Poppins) dan responsive di semua device.
Memperbaiki perhitungan attendance (hanya pertemuan yang sudah lewat, PRESENT = 100%, lainnya 0%) serta menambahkan sorting dan timestamp update.
Memindahkan tombol “+ Bayar” menjadi floating di kanan bawah agar selalu terlihat di semua tab.
Memperbaiki responsive button (320px) dan berbagai penyesuaian UI.
9 April 2026
Melakukan cleanup konfigurasi Tailwind CSS serta penyesuaian theme.
Memperbaiki tampilan landing page (button responsive & layout).
Mengupdate halaman login dengan styling theme (background wave, input & toggle password lebih rapi).
Mengubah halaman register dengan styling theme dengan background image, input menyesuaikan background image dan lebih rapi.
tambahkan thema 6 untuk landing page, diubah bukan lagi pake full-image tapi hanya pake background image lalu pake card dan text biasa dengan coding.
Melakukan cleanup konfigurasi Tailwind CSS serta penyesuaian theme.
Memperbaiki tampilan landing page (button responsive & layout) dan halaman login/register (styling & ukuran teks).
Menambahkan dan memperbaiki responsive UI pada role teacher (auto-collapse lesson panel di tablet, hamburger button, sidebar, serta bottom navigation & floating button di mobile).
Melakukan perbaikan tambahan pada layout teacher (menyembunyikan hamburger di layar besar dan menambahkan padding bawah untuk bottom navigation).
10 April 2026
Menambahkan fitur quiz management untuk teacher.
Menyamakan background teacher dan student agar konsisten.
Memperbaiki posisi tombol floating Bayar pada PaymentPage.
Melakukan perbaikan UI pada quiz tab student, skeleton loading, dan halaman tambah lesson teacher.
11 April 2026
Libur Kerja (tanggal merah)
12 April 2026
Libur Kerja (tanggal merah)
13 April 2026
Menambahkan back button pada halaman lesson dan quiz.
Memperbaiki fitur pembuatan quiz serta meningkatkan UI quiz dan form.
Menambahkan field quiz_status pada form quiz.
Memperbaiki deteksi kategori Masdar dan Mulakhash agar konsisten dengan resolveCategory.
Menambahkan konfigurasi overdueEnabled untuk mengontrol fitur OverdueModal.
Menyembunyikan sementara tombol floating “+ Bayar”.
14 April 2026
Meningkatkan fitur attendance/presensi dengan penambahan config PRESENSI_VIA_APP, helper perhitungan keterlambatan, dan pengecekan akhir lesson.
Memperbarui flow presensi (on-time = PRESENT, terlambat/selesai = ALPA dengan catatan).
Memperbarui UI AttendanceSection (kontrol tombol, info ID Card, dan tampilan clock in/out).
Melakukan update workflow n8n untuk presensi serta penyesuaian untuk development lokal.
Memperbaiki tampilan status izin dengan menampilkan reason dan note.
15 April 2026
Mengembangkan fitur presensi (clock in & clock out) berbasis workflow n8n yang sudah berjalan dengan baik, termasuk integrasi pembuatan lesson-attendance secara otomatis.
Melakukan perbaikan dan penyempurnaan alur (flow), validasi duplikasi, serta penggunaan DEVICE_INPUT, dengan tujuan meningkatkan keakuratan, stabilitas, dan kesiapan untuk pengembangan logic presensi yang lebih kompleks ke depannya.
16 April 2026
Melakukan penyempurnaan Presensi Flow (n8n), khususnya pada logic duplicate check (berdasarkan card_id dan waktu lesson), penggunaan query COUNT(*), serta perbaikan alur IF dan handling data agar lebih stabil.
Memperbaiki logika keterlambatan (grace period & kondisi ALPA), serta menambahkan atribut data_status dan dispute_status pada proses clock in.
Melakukan refactor dan perapihan node workflow agar lebih mudah dibaca, serta perbaikan minor pada alert UI pertemuan.
17 April 2026
Membuat flow untuk SPP Workflow khusus nya untuk bayar spp menggunakan doku payment dan termasuk doku callback
18 April 2026
Libur Kerja (tanggal merah)
19 April 2026
Libur Kerja (tanggal merah)
20 April 2026
memperbaiki Presensi Flow
21 April 2026
Melakukan update konfigurasi UI dan styling.
Menambahkan loading state pada modal konfirmasi quiz.
Menyembunyikan fitur bank soal pada form add/edit quiz serta menyimpan catatan pengembangannya.
Mengatur mode tema: student selalu light mode, sementara teacher mengikuti preferensi (dark/light).
22 April 2026
mengerjakan project di Hunayn Technologies.
23 April 2026
mengerjakan project di Hunayn Technologies.
24 April 2026
mengerjakan project di Hunayn Technologies.
25 April 2026
Libur Kerja (tanggal merah)
26 April 2026
Libur Kerja (tanggal merah)
27 April 2026
mengerjakan project di Hunayn Technologies.
28 April 2026
mengerjakan project di Hunayn Technologies.
29 April 2026
mengerjakan project di Hunayn Technologies.
30 April 2026
mengerjakan project di Hunayn Technologies.
1 Mei 2026
Libur Kerja (tanggal merah)
2 Mei 2026
Libur Kerja (tanggal merah)
3 Mei 2026
Libur Kerja (tanggal merah)
4 Mei 2026
Menambahkan opsi configurable validation bypass pada form registrasi serta penggunaan public user (tanpa auth token).
Memperbaiki UI/UX halaman register (label field, input tanggal lahir, placeholder, icon, warna dropzone, dan responsive button).
Memperbaiki behavior success modal agar tidak tertutup saat klik tombol “Gabung Group”.
Melakukan peningkatan UI quiz (floating button lebih sederhana & hide saat scroll, serta styling opsi jawaban).
Mengupdate informasi kontak admin & link grup WhatsApp.
5 Mei 2026
Menambahkan fitur Top Panel layout pada halaman teacher (termasuk mode mobile) beserta settings dropdown untuk pengaturan layout dan tema.
Menambahkan tombol “Tambah Pertemuan” di beberapa area (ClassDetail & Top Panel) untuk mempermudah akses.
Memperbaiki berbagai perilaku Top Panel (auto-open/close, sinkronisasi URL, dan visibilitas LessonPanel).
6 Mei 2026
Melakukan penyesuaian UI (posisi tombol settings, alignment navbar & padding, serta rename label agar lebih jelas).
Menambahkan integrasi DOKU Payment Gateway pada alur registrasi dengan opsi metode pembayaran yang dapat diaktif/nonaktifkan.
Memperbaiki handling error pembayaran agar tidak redirect ke halaman login saat terjadi error 401.
7 Mei 2026
Menyempurnakan flow registrasi + pembayaran DOKU (workflow n8n, callback notification, status PENDING_PAYMENT, waiting modal, dan refresh status pembayaran).
Menambahkan mekanisme restore session setelah redirect pembayaran menggunakan sessionStorage.
Memperbaiki flow pembukaan tab pembayaran agar tidak terkena popup blocker serta mengembalikan alur submit-on-click yang lebih stabil.
Menambahkan field payment tracking pada schema register di backend Strapi untuk integrasi DOKU Payment Gateway, serta status default PENDING_PAYMENT ketika biaya registrasi lebih dari 0.
8 Mei 2026
Menyempurnakan flow pembayaran registrasi DOKU dengan penyimpanan payment_url, penggunaan parameter ?invoice, auto check-payment, serta peningkatan UX pada payment waiting modal.
Menambahkan fitur copy invoice, informasi course, manajemen session, dan perbaikan format pesan WhatsApp admin.
Menyederhanakan callback N8N dan menggunakan custom API untuk pengecekan status pembayaran.
Pada backend Strapi, menambahkan custom API check-payment dan update-payment, melengkapi response pembayaran (nama, invoice, course, nominal, timestamp, dll), serta menambahkan field payment_url untuk mendukung restore pembayaran setelah redirect atau refresh halaman.
9 Mei 2026
Libur Kerja (tanggal merah)
10 Mei 2026
Libur Kerja (tanggal merah)
11 Mei 2026
Menyempurnakan flow pembayaran DOKU untuk registrasi dan SPP, termasuk penyatuan callback handler serta pembaruan workflow n8n terbaru.
Menambahkan confirmation modal pembayaran DOKU, restore payment_url dari API, dan perbaikan behavior WhatsApp modal.
Melakukan perbaikan upload file berdasarkan kondisi biaya registrasi serta penyesuaian notification_url pada payload DOKU.
Meningkatkan validasi form dan UX pada field Step 1 registrasi, serta perbaikan tampilan fee/course box dan card hover UI.
12 Mei 2026
Melakukan pembaruan konfigurasi UI dengan pemisahan FORCE_MOBILE_STUDENT dan FORCE_MOBILE_PUBLIC, penambahan wrapper public page, serta penyamaan max-width menjadi 450px di seluruh halaman.
Menambahkan role Admin lengkap dengan auth terpisah via Strapi Admin Panel, AdminLayout, dashboard, profile page, login page, routing, dan navigasi responsif.
Melakukan perbaikan pada fitur profile admin/teacher, dark mode, hamburger menu, top panel, dan bottom navigation untuk role admin.
Memperbaiki proses autentikasi dengan membersihkan localStorage role lain saat login agar tidak terjadi konflik session.
Melakukan refactor form public page dengan memindahkan logic ke custom hooks (useLoginForm, useRegisterForm, useAdminLogin), menghapus sistem theme lama, menyederhanakan LandingPage, serta menampilkan error admin login menggunakan Swal modal.
13 Mei 2026
Melakukan redesign Step 2 registrasi dengan penggunaan radio button dan field kondisional.
Mengubah tampilan pemilihan course menjadi layout vertikal scrollable dengan radio button, tombol detail, dan perbaikan tampilan kuota (N/A jika kosong).
Menambahkan fitur address autocomplete menggunakan Nominatim API untuk field domisili.
Menambahkan komponen dropdown kode telepon yang dapat dicari untuk menggantikan input teks biasa.
Melakukan redesign tampilan course gratis/berbayar pada langkah pembayaran registrasi.
Menambahkan berbagai peningkatan pada form registrasi seperti tampilan umur, catatan WhatsApp, checklist motivasi, radio niat program, checkbox izin wali, serta perbaikan UX form lainnya.
Menambahkan fitur auto-fill alamat dan koordinat domisili menggunakan Nominatim geocode & reverse geocode.
Membuat commitments registrasi menjadi dinamis dari Strapi dengan fallback yang aman dan format data yang lebih sederhana.
Mengubah field pekerjaan dan pendidikan menjadi custom dropdown serta menjadikan email opsional dengan fallback khusus untuk integrasi n8n/Strapi.
Melakukan perbaikan validasi dan cleanup kecil pada form registrasi.
Pada backend Strapi, menambahkan field JSON commitments pada course untuk mendukung checkbox dan radio registrasi yang dinamis.
14 Mei 2026
Libur Kerja (tanggal merah)
15 Mei 2026
Melakukan perbaikan handling email pada registrasi, sehingga jika user tidak mengisi email maka sistem otomatis membuat email placeholder (contoh: userxxxx@mian.or.id) untuk penyimpanan di database dan integrasi workflow n8n.
Melakukan penyesuaian data fallback untuk email dan emergency contact agar proses registrasi tetap berjalan tanpa error validasi.
Melakukan perbaikan form registrasi dengan mewajibkan pengisian tanggal lahir serta menampilkan umur sebelum perubahan tanggal lahir.
Mengubah input tanggal lahir menggunakan react-datepicker lengkap dengan icon kalender dan perbaikan timezone offset.
Menyederhanakan jumlah commitment serta memperbarui opsi motivasi mengikuti program MIAN.
Menambahkan field data anak untuk tipe course tertentu (MADANIA/MASDAR_AKHWAT) lengkap dengan validasi kondisional, serta memindahkan form anak ke Step 1.
Melakukan refactor konfigurasi course menjadi lebih fleksibel menggunakan course_form_configuration dan BRING_CHILD_FORM.
Menambahkan konfigurasi EMAIL_IS_REQUIRED agar kewajiban field email dapat diatur melalui konstanta.
Memperbaiki tampilan dan kompatibilitas react-datepicker, termasuk navigasi tahun dan instalasi Yarn Berry pada CI/CD.
Melakukan cleanup konfigurasi project dan file ignore untuk mendukung workflow development yang lebih stabil.
16 Mei 2026
Libur Kerja (tanggal merah)
17 Mei 2026
Libur Kerja (tanggal merah)
18 Mei 2026
Mengembangkan workflow WhatsApp notification di n8n menggunakan Watzap untuk proses registrasi dan pembayaran DOKU.
Menambahkan pengiriman link pembayaran registrasi, notifikasi setelah pembayaran berhasil, serta perbaikan format pesan WhatsApp agar informasi nominal dan waktu transaksi lebih jelas.
Melakukan penyempurnaan workflow dan handling error agar proses pengiriman notifikasi lebih stabil dan tidak mengganggu alur utama pembayaran/register.
Melakukan restrukturisasi confirm modal registrasi menggunakan tab serta melengkapi field informasi yang sebelumnya belum ditampilkan.
Melakukan pengembangan V2 Design System untuk halaman landing, login, dan register agar memiliki tampilan yang konsisten dan modern.
Memperbarui UI dengan background gradient oranye keemasan, elemen dekoratif lingkaran, aksen teal, typography yang seragam, serta responsive layout untuk desktop dan mobile.
Melakukan penyesuaian behavior FORCE_MOBILE_PUBLIC dan menyamakan tampilan halaman register dengan desain baru pada landing dan login page.
19 Mei 2026
Melakukan refactor struktur project dengan memindahkan halaman versi lama ke folder public/v1, mengganti import asset menggunakan alias @/, serta memindahkan konstanta registrasi ke useRegisterForm agar kode lebih rapi dan mudah dikelola.
Melakukan penyesuaian UI Register V2 agar sesuai dengan desain Figma.
Menambahkan dan memperbaiki berbagai komponen UI seperti PhoneCodeSelect, PublicSelect, CourseSelector, border validasi/error, spacing, serta struktur layout mobile dan desktop.
Meningkatkan tampilan halaman landing/login/register V2 dengan pendekatan card modern (glassmorphism & white card), responsive container, dan alignment elemen yang lebih konsisten.
Melakukan refactor komponen dan form register agar lebih modular serta menghapus pemilihan course yang redundan.
20 Mei 2026
Melakukan refactor halaman register V1/V2 dengan mengekstrak berbagai modal menjadi shared components (Course Detail, Map Picker, Payment Result, Registration Confirm, dll) agar lebih reusable dan mudah dirawat.
Menambahkan komponen CourseSelector terpisah serta memperbaiki validasi commitment pada register V2.
Merapikan struktur dan positioning UI pada landing, login, dan course selector (logo, padding, alignment, dan responsive layout) agar konsisten dengan desain V2.
Melakukan berbagai perbaikan UI/UX pada pemilihan kelas dan modal detail course di halaman registrasi.
ubah modal waiting pembayaran & modal sukses/berhasil mendaftar sesuai ui figma
Memperbaiki flow modal pembayaran pada Register V2 dengan merender shared payment modals langsung di CourseSelector saat kondisi early return.
Perbaikan ini memastikan modal waiting/success pembayaran tetap muncul ketika user mengakses halaman melalui parameter /register?invoice=xxx.
Melakukan sentralisasi konfigurasi nomor WhatsApp admin dan link grup ke file configs/wa.ts.
Mengganti penggunaan nomor WhatsApp hardcoded di beberapa file menjadi import konfigurasi terpusat agar lebih mudah dikelola dan diubah ke depannya.
Melakukan berbagai perbaikan responsive UI pada halaman register, landing, dan login V1/V2, khususnya untuk input telepon, logo, padding, dan touch target agar lebih nyaman di perangkat kecil/mobile.
Menambahkan field kondisional “Lainnya” pada sumber informasi registrasi serta merapikan layout dan struktur wrapper halaman.
Memperbaiki overflow, cutoff input, dan konsistensi ukuran elemen agar tampilan lebih stabil di berbagai ukuran layar.
Memperbarui tampilan Register/Login/Landing V2 dengan mengganti background gradient menjadi asset SVG (Background.svg) serta penggunaan elemen dekoratif ellipse agar desain lebih konsisten dan ringan.
Menambahkan pesan bantuan otomatis pada link WhatsApp admin untuk tombol bantuan.
Menyederhanakan flow konfirmasi registrasi dengan menghapus checkbox konfirmasi yang redundan beserta state terkait pada hook dan halaman registrasi.
21 Mei 2026
Melakukan berbagai perbaikan responsive UI pada halaman public/register V2, termasuk viewport clipping, overflow dekoratif ellipse, layout register, dan tampilan Course Selector.
Memperbaiki input tanggal lahir serta validasi usia anak pada form registrasi V2 agar pesan error lebih jelas dan validasi langsung berjalan.
Menghapus tombol refresh yang tidak diperlukan pada Course Selector serta merapikan radius/layout bagian bawah halaman register.
Melakukan pembaruan notifikasi WhatsApp setelah pendaftaran dan berbagai perbaikan minor lainnya pada flow registrasi dan UI.
Melakukan refactor layout mobile pada Course Selector agar mengikuti pola dan konsistensi desain halaman landing page V2.
ubah background yang sebelum nya pake Background.svg menjadi Mob.svg di halaman landing, login, course-selector v2
dan ada beberapa perubahan/fixing kecil
22 Mei 2026
mengerjakan fixing dikit yang tercatat di todo task trello (ada 6 card) dan termasuk buat halaman payment di role student agar responsive
Melakukan berbagai perbaikan pada fitur quiz dan class, termasuk auto-create QuizUser saat melihat hasil quiz yang belum dikerjakan, penambahan tombol Lihat Hasil, serta handling khusus untuk quiz status DONE dan score default 0.
23 Mei 2026
Libur Kerja (tanggal merah)
24 Mei 2026
Libur Kerja (tanggal merah)
25 Mei 2026
Memperbaiki fallback data untuk child course, populate lesson/quiz, sorting quiz di homepage, serta stabilitas query pada Strapi.
Melakukan peningkatan UI pada halaman class, quiz detail, dan quiz result detail (lesson name di header, jumlah soal, loading state, warna score, layout image kelas, dan responsive layout payment).
Melakukan berbagai perbaikan UI Public V2 agar lebih sesuai dengan desain Figma, termasuk background, greeting section, text responsive, dan modal waiting registrasi.
26 Mei 2026
Melakukan refactor sistem modal dengan membuat BaseModal reusable dan menerapkannya pada berbagai modal seperti jadwal dan pembayaran agar UI/UX lebih konsisten.
Menambahkan fitur manajemen buku pada role teacher, meliputi browse buku, selector buku, create/edit buku dengan upload gambar, serta mode tampilan grid/list/compact.
Menambahkan tampilan nama buku pada detail pertemuan dan modal jadwal berdasarkan book_id dengan fallback otomatis jika data tidak tersedia.
Melakukan berbagai perbaikan UI dan build pada role teacher, admin, dan student seperti konsistensi card tanpa shadow, perbaikan JSX/TypeScript/build error, perbaikan render warning React, serta penyesuaian layout halaman quiz dan class detail.
Memperbarui tampilan student seperti perubahan teks jadwal menjadi “Jadwal Kuliah Pekan Ini”, penghapusan jumlah soal pada card quiz/ujian, dan perbaikan populate lesson quiz agar tidak memunculkan error validasi attachments.
27 Mei 2026
Libur Kerja (hari raya idul adha)
28 Mei 2026
Libur Kerja (cuti hari raya idul adha)
29 Mei 2026
Mengembangkan fitur e-Maktabah untuk role teacher dan student, meliputi filter status dan kepemilikan buku, validasi file PDF, perbaikan upload gambar, serta sinkronisasi data buku setelah penyimpanan.
Meningkatkan tampilan responsif halaman buku dengan grid adaptif, card mobile-friendly, text truncation, badge/icon informasi, dan dukungan berbagai mode tampilan.
Memperbaiki logika pencarian dan relasi buku-pertemuan agar kompatibel dengan berbagai format data API (string, number, maupun object) serta normalisasi book_id dan book_part_id.
Meningkatkan pengalaman penggunaan pada mobile melalui bottom navigation yang lebih responsif serta perbaikan modal dengan sticky footer agar tombol aksi dan filter selalu mudah diakses.
30 Mei 2026
Libur Kerja (tanggal merah)
31 Mei 2026
Libur Kerja (tanggal merah)
1 Juni 2026
Libur Kerja (tanggal merah)
2 Juni 2026
Melakukan pengembangan dan perbaikan fitur PDF Viewer pada e-Maktabah dengan menambahkan tampilan PDF langsung di halaman detail buku serta mengganti implementasi agar lebih stabil dan terhindar dari kendala CORS.
Memperbaiki fungsi download file buku (book_download_url) dan melakukan penyesuaian dependency/project lockfile untuk mengatasi kegagalan deployment pada pipeline CI/CD.
3 Juni 2026
Melakukan refactor komponen modal dengan migrasi detail buku ke BaseModal agar lebih reusable dan konsisten.
Mengembangkan halaman Admin meliputi manajemen user, kelas, keuangan, dan konfigurasi sistem, termasuk dukungan upload gambar serta pengaturan urutan data (drag & drop).
Melakukan berbagai perbaikan kompatibilitas dengan Strapi 5, perbaikan upload avatar/banner, penyederhanaan model user menggunakan satu field nama, serta penyelesaian error build, JSX, TypeScript, ESLint, dan deployment agar aplikasi lebih stabil.
4 Juni 2026
Melakukan pengembangan besar pada Admin Panel dengan membuat komponen BaseTable reusable yang digunakan pada seluruh tabel admin, lengkap dengan sorting client-side, pagination yang lebih stabil, serta penyesuaian kolom dinamis sesuai jenis data.
Menyempurnakan halaman manajemen user, kelas, dan keuangan dengan penambahan kolom informasi penting, penyederhanaan tampilan tabel, penggunaan icon aksi yang lebih ringkas, serta peningkatan pengalaman pengguna saat data kosong.
Menambahkan dukungan login admin melalui halaman login utama menggunakan role Admin dari Strapi, memperbaiki manajemen profil admin/super admin, serta meningkatkan stabilitas autentikasi dan refresh data profil.
Melakukan berbagai perbaikan UI dashboard admin seperti greeting dinamis berdasarkan role, layout yang lebih rapi, konsistensi data nama pengguna, serta penyempurnaan tampilan dan struktur data pada halaman keuangan dan manajemen kelas.
Melakukan perbaikan deployment dan build dengan menambahkan type yang diperlukan, memperbaiki parameter implicit any, serta membersihkan variabel yang tidak digunakan.
Menyempurnakan halaman manajemen user dengan menjadikan tab All Users sebagai tampilan default serta memperbaiki perhitungan nomor urut pada pagination.
Menambahkan label role (Teacher, Admin, Super Admin) pada navbar dan mendukung avatar dinamis untuk akun admin yang berasal dari tabel up_users.
5 Juni 2026
Mengembangkan dan menyempurnakan Admin Panel, meliputi manajemen user, kelas, tagihan, pembayaran, dan data tanggungan. Fitur yang dikerjakan mencakup CRUD user & kelas, pengaturan role dan status user, teacher selector, slug otomatis, pencarian user dengan dropdown, detail pembayaran, validasi dan notifikasi yang lebih baik, serta berbagai perbaikan UI/UX agar lebih responsif dan mudah digunakan pada desktop maupun mobile.
Melakukan berbagai perbaikan teknis pada integrasi Strapi v5, termasuk migrasi penggunaan documentId, perbaikan cache dan pagination, penyesuaian format data tanggal, perbaikan build error TypeScript, serta optimalisasi tampilan tabel dan form administrasi.
[Backend - Strapi] Menambahkan dukungan pagination pada endpoint user dengan format respons yang konsisten (data dan meta), memperbaiki mekanisme pagination menggunakan offset, serta melakukan penyesuaian dan pengamanan policy akses course agar hanya dapat diakses oleh role yang sesuai (Admin, Teacher, dan Student).
6 Juni 2026
Libur Kerja (tanggal merah)
7 Juni 2026
Libur Kerja (tanggal merah)
8 Juni 2026
Menambahkan fitur reset password pengguna pada Manajemen User, termasuk tombol reset di tabel user dengan password default otomatis berdasarkan tanggal lahir atau tanggal saat ini (mian+DDMMYYYY), serta memastikan user berstatus blocked tidak dapat melakukan login.
Menyempurnakan manajemen banner pada Admin Panel dengan fitur tambah banner melalui modal, pengaturan posisi banner dalam daftar, serta perbaikan notifikasi, validasi inline, toast, dan z-index modal agar tidak bertabrakan dengan navbar.
Mengembangkan fitur Daftar Pertemuan (Meetings) pada role Teacher dengan tab khusus, dukungan filter rentang tanggal dan pengurutan data, sekaligus merapikan tampilan Detail Kelas dengan memindahkan daftar pertemuan ke halaman yang lebih terstruktur dan melakukan berbagai perbaikan bug, TypeScript, serta linting.
Mengembangkan dan menyempurnakan endpoint manajemen user dengan dukungan pagination yang konsisten seperti Core API Strapi (data dan meta), termasuk perbaikan perhitungan offset serta validasi parameter halaman untuk mendukung kebutuhan Admin Panel.
Melakukan penyesuaian dan pengamanan course policy agar hanya dapat diakses oleh role yang berwenang (Admin, Teacher, dan Student), termasuk proses evaluasi dan perbaikan mekanisme autentikasi token pada akses endpoint course.
9 Juni 2026
Melakukan berbagai perbaikan backend untuk mendukung integrasi Admin Panel, meningkatkan stabilitas API, serta memastikan struktur respons dan kontrol akses berjalan lebih konsisten pada seluruh sistem.
Mengembangkan fitur manajemen santri per kelas pada Admin Panel, meliputi halaman daftar santri dalam kelas, fitur tambah santri ke kelas melalui modal pencarian dan seleksi, serta fitur hapus santri dari kelas dengan konfirmasi untuk memudahkan pengelolaan peserta program.
Menyempurnakan tampilan dan pengalaman pengguna pada modul manajemen kelas, termasuk menampilkan jumlah santri secara lebih informatif, avatar santri pada proses pemilihan peserta, penyesuaian istilah "Siswa" menjadi "Santri", serta berbagai perbaikan tata letak dan navigasi.
Melakukan perbaikan teknis dan deployment, termasuk penyesuaian tipe data slug, pembersihan referensi yang tidak terpakai, serta penyelesaian error build agar proses deployment berjalan dengan stabil.
Mengembangkan dan menyempurnakan Dashboard Admin dan Teacher dengan fitur Last Edited Activity yang menampilkan aktivitas terbaru (kelas, kuis, pembayaran, presensi, dan lainnya), lengkap dengan filter, ikon berdasarkan jenis aktivitas, avatar pengguna, serta tampilan yang lebih informatif dan mudah dipantau.
10 Juni 2026
Melakukan redesign Dashboard Admin dengan statistik yang lebih detail, breakdown data santri, guru, kelas, dan registrasi, termasuk perbaikan tata letak, penyelarasan tampilan dashboard Teacher dan Admin, serta optimasi data registrasi berdasarkan kelas yang masih membuka pendaftaran.
Mengembangkan halaman Detail Kelas (Admin) yang lebih lengkap dengan overview, tab informasi, daftar pertemuan, kuis, dan berbagai perbaikan data serta tampilan untuk mempermudah pengelolaan kelas.
Menambahkan fitur Silabus dan PDF Viewer pada detail kelas sehingga materi dapat ditampilkan dalam bentuk teks maupun dokumen PDF secara langsung dari aplikasi.
Melakukan penyempurnaan UI/UX pada halaman kelas, pertemuan, kuis, dan dashboard Teacher, termasuk penyederhanaan tampilan kartu, penggunaan separator yang lebih rapi, penyelarasan tata letak tabel, serta peningkatan keterbacaan data.
Menambahkan pengurutan data secara default berdasarkan waktu pembuatan terbaru pada tabel administrasi, menyempurnakan proses registrasi dengan menyembunyikan kelas yang masa pendaftarannya telah berakhir, serta melakukan berbagai perbaikan bug, linting, dan stabilitas aplikasi.
11 Juni 2026
Meningkatkan pengalaman pengguna pada Dashboard Admin dan Teacher dengan mengganti berbagai loading full-page dan skeleton menjadi loading spinner per kartu (card-level loading), sehingga halaman tetap dapat digunakan dan terasa lebih responsif saat data dimuat.
Menyempurnakan modul Teacher dengan penambahan tombol Tambah Pertemuan pada halaman daftar pertemuan, perbaikan proses refresh detail pertemuan, peningkatan stabilitas halaman profil, serta berbagai perbaikan loading state pada halaman kelas, buku, absensi, nilai, silabus, dan detail pertemuan.
Melakukan berbagai perbaikan bug dan optimasi UI untuk meningkatkan kenyamanan penggunaan serta mengurangi tampilan error sementara (flicker) saat memuat data.
12 Juni 2026
Mengembangkan dan menyempurnakan fitur pemilihan wilayah/alamat dengan implementasi Wilayah Modal, dukungan input alamat manual, perbaikan geocoding, serta peningkatan pengalaman pengguna saat memilih atau mengubah alamat domisili.
Melakukan perbaikan pada modul Teacher terkait pembuatan pertemuan dan kuis, termasuk validasi relasi data sebelum penyimpanan, perbaikan penggunaan ID kelas yang benar, serta peningkatan stabilitas proses input data.
Menyempurnakan fitur Student dan Murojaah, meliputi auto-submit kuis tanpa konfirmasi, perbaikan status kuis yang tidak dikerjakan atau telah ditutup, penyempurnaan perhitungan nilai dan jawaban, pengurutan jadwal serta kuis yang lebih akurat, penyesuaian tampilan presensi sesuai desain, dan berbagai perbaikan bug serta build error untuk meningkatkan stabilitas aplikasi.
13 Juni 2026
Libur Kerja (tanggal merah)
14 Juni 2026
Libur Kerja (tanggal merah)
15 Juni 2026
Melakukan perbaikan dan optimasi pada modul Kuis dan Penilaian, termasuk penyelesaian bug filter hasil kuis siswa, perbaikan tampilan nilai pada role Teacher, serta perbaikan proses pengambilan jawaban siswa yang sebelumnya berpotensi menyebabkan infinite recursion.
Menyempurnakan pengurutan data pada halaman Pertemuan, Teacher Sidebar, dan Teacher Top Panel agar konsisten menggunakan urutan pertemuan terdekat, sehingga memudahkan guru dalam memantau kelas yang akan berlangsung.
Melakukan refactor utilitas tanggal agar dapat digunakan kembali di berbagai halaman, serta memperbaiki mekanisme filter siswa dengan pendekatan client-side filtering untuk meningkatkan stabilitas dan kompatibilitas aplikasi.
Melanjutkan pengembangan fitur kuis dengan fokus pada stabilitas penilaian, revisi jawaban, dan peningkatan akurasi perhitungan hasil kuis. Menambahkan dukungan soal bonus dan revisi jawaban, termasuk perbaikan proses penyimpanan opsi jawaban, perhitungan nilai otomatis, serta penyempurnaan statistik hasil kuis agar lebih konsisten. Selain itu dilakukan perbaikan mekanisme auto-submit untuk kuis yang telah ditutup, penyempurnaan perhitungan jumlah jawaban benar/salah, serta penanganan timezone pada jadwal kuis.
Perbaikan juga dilakukan pada proses autentikasi dan manajemen data pengguna dengan membersihkan cache React Query dan data user yang tersimpan saat login ulang, sehingga mencegah munculnya data pengguna lama (stale data) di antarmuka aplikasi setelah pergantian akun.
[BE-STRAPI] Menambahkan dukungan soal ESSAY, termasuk field penyimpanan jawaban esai, skor esai, dan endpoint penilaian esai oleh pengajar.
[BE-STRAPI] Menyempurnakan proses update opsi jawaban dan urutan soal agar lebih stabil.
[BE-STRAPI] Memperbaiki algoritma penilaian untuk mendukung soal bonus serta meningkatkan akurasi perhitungan nilai akhir kuis.
16 Juni 2026
Libur Kerja (tanggal merah TAHUN BARU HIJRIYAH)
17 Juni 2026
Melakukan penyempurnaan fitur kuis, pertemuan, dan pengelolaan data siswa dengan fokus pada stabilitas aplikasi dan akurasi data. Perbaikan mencakup penyaringan data siswa pada halaman kuis, perbaikan tampilan nilai pengajar, pengurutan daftar pertemuan agar lebih konsisten, serta penyelesaian masalah recursive call yang menyebabkan gangguan pada proses pengambilan jawaban siswa.
Selain itu dilakukan penyesuaian logika pengurutan kelas berdasarkan jadwal pertemuan terdekat agar konsisten antara sidebar dan top panel pengajar, refactor utility tanggal menjadi fungsi bersama yang dapat digunakan di berbagai halaman, serta penggantian beberapa filter API yang bermasalah menjadi pemrosesan client-side untuk meningkatkan kompatibilitas dan keandalan data yang ditampilkan.
Melanjutkan pengembangan sistem kuis dengan menambahkan dukungan penuh untuk soal esai (Essay Question). Fitur ini mencakup proses pengerjaan oleh siswa, penyimpanan jawaban otomatis (auto-save), pengaturan nilai maksimal per soal, serta halaman penilaian bagi pengajar untuk memberikan skor secara manual. Selain itu dilakukan berbagai penyempurnaan dan perbaikan alur kuis agar proses pengerjaan, penyimpanan, dan penilaian berjalan lebih stabil dan konsisten.
Di sisi manajemen akun, dilakukan perbaikan pada fitur perubahan password siswa dengan menampilkan pesan error yang lebih jelas ketika password lama yang dimasukkan tidak sesuai, sehingga pengguna mendapatkan umpan balik yang lebih informatif saat melakukan pergantian kata sandi.
18 Juni 2026
Fokus pada penyempurnaan besar fitur kuis, khususnya dukungan soal bonus dan soal esai. Melakukan redesign halaman penilaian esai agar lebih efisien dengan pendekatan penilaian per soal, dukungan bulk save, serta peningkatan performa pengambilan data siswa. Menambahkan berbagai indikator dan informasi baru seperti badge bonus, rincian nilai bonus, breakdown tipe soal, jumlah soal per tipe, serta penyajian nilai maksimum pada soal esai dan bonus.
Selain pengembangan fitur, dilakukan banyak perbaikan bug dan penyempurnaan logika kuis, termasuk perhitungan nilai, auto-submit, proses penilaian esai, sinkronisasi statistik hasil kuis, tampilan hasil siswa, serta berbagai inkonsistensi UI antara halaman detail kuis, halaman pengerjaan kuis, dan halaman hasil kuis. Kode juga direfaktor dengan memisahkan komponen-komponen kuis menjadi lebih reusable dan mudah dipelihara, sekaligus merapikan utility statistik dan service yang terkait.
Perbaikan lain mencakup optimasi query ke backend, penyesuaian endpoint Strapi 5, perbaikan proses re-fetch data setelah auto-submit, serta penyelesaian berbagai bug frontend yang memengaruhi stabilitas dan akurasi data hasil kuis.
[BE-STRAPI] Melakukan penyempurnaan backend fitur kuis, khususnya untuk mendukung soal essay dan bonus question secara penuh pada Strapi v5. Perbaikan mencakup proses perhitungan nilai, recalculation score, penanganan bobot soal essay, auto-fill nilai essay untuk soal bonus, serta peningkatan akurasi pengambilan data hasil kuis siswa. Selain itu dilakukan migrasi beberapa service dan middleware dari pola Strapi v4 ke API Strapi v5 (documents API) agar kompatibel dengan arsitektur terbaru.
[BE-STRAPI] Juga dilakukan berbagai perbaikan endpoint dan middleware, termasuk normalisasi format jawaban, penyesuaian route custom API agar sesuai standar Strapi v5, perbaikan proses grading essay, pengamanan terhadap kondisi pembagian nol (divide-by-zero), penyempurnaan query pengambilan data siswa berdasarkan numeric ID, serta pembersihan endpoint yang sudah tidak digunakan. Perubahan ini meningkatkan stabilitas proses penilaian, perhitungan skor, dan integrasi frontend-backend pada fitur kuis berbasis essay dan bonus question.
19 Juni 2026
Melanjutkan proses stabilisasi fitur kuis pasca implementasi soal bonus dan esai. Fokus pekerjaan pada penyempurnaan proses sinkronisasi data hasil kuis, pengurangan kemungkinan loop pengambilan data yang tidak diperlukan, serta peningkatan keandalan proses auto-submit dan perhitungan ulang nilai setelah perubahan data soal bonus.
Selain itu dilakukan beberapa perbaikan lanjutan pada logika pencarian data kuis, konsistensi tampilan statistik dan hasil penilaian, serta pembersihan kode hasil refactor sebelumnya agar fitur kuis lebih stabil, mudah dipelihara, dan siap digunakan pada skenario pembelajaran yang lebih kompleks.
Melanjutkan proses stabilisasi dan penyempurnaan fitur kuis, khususnya pada dukungan soal essay, bonus question, dan tampilan hasil kuis siswa. Perbaikan dilakukan pada berbagai skenario perhitungan nilai dan tampilan statistik agar hasil yang ditampilkan tetap konsisten pada kombinasi soal pilihan ganda, essay, maupun bonus. Selain itu dilakukan penyempurnaan komponen ringkasan nilai, penanganan kondisi data kosong (null guard), validasi data quiz user, serta sinkronisasi data jawaban essay pada berbagai halaman terkait.
Di sisi frontend, dilakukan perbaikan beberapa bug pada halaman pengerjaan kuis dan detail hasil kuis, termasuk penyelesaian masalah munculnya pesan error yang tidak semestinya saat kuis memiliki batas waktu, penyempurnaan logika deteksi kuis murojaah untuk skenario kuis full essay, serta berbagai perbaikan TypeScript dan stabilitas komponen. Perubahan ini bertujuan meningkatkan keandalan fitur kuis, mengurangi potensi error runtime, dan memastikan pengalaman pengguna tetap konsisten saat mengerjakan maupun melihat hasil kuis.
[BE-STRAPI] Melakukan perbaikan pada endpoint dan middleware penilaian essay, termasuk validasi autentikasi, penanganan kondisi data kosong, pencegahan middleware hang, konsistensi perhitungan bonus essay, serta validasi option_group pada proses grading. Perbaikan ini memastikan proses penilaian dan perhitungan ulang nilai berjalan lebih stabil dan akurat pada seluruh jenis soal kuis.
20 Juni 2026
Libur Kerja (tanggal merah)
21 Juni 2026
Libur Kerja (tanggal merah)
22 Juni 2026
[BE-STRAPI] Menambahkan dan mengembangkan modul konfigurasi aplikasi (AppConfig) berbasis Single Type pada Strapi untuk mendukung pengaturan lokasi dan geolokasi secara terpusat. Fitur ini mencakup penyimpanan koordinat lokasi (latitude, longitude), radius validasi lokasi, serta penambahan konfigurasi enable_geolocation yang dapat digunakan untuk mengaktifkan atau menonaktifkan fitur validasi lokasi pada aplikasi tanpa perlu melakukan perubahan kode.
[BE-STRAPI] Selain pengembangan fitur, dilakukan beberapa penyempurnaan backend seperti menjadikan endpoint AppConfig dapat diakses secara publik oleh aplikasi siswa, perbaikan struktur dan penamaan content type agar sesuai dengan standar routing Strapi, penambahan proses bootstrap untuk melakukan inisialisasi data konfigurasi secara otomatis, regenerasi tipe data, serta penyesuaian validasi field lokasi agar data konfigurasi yang tersimpan tetap konsisten dan valid.
Mengimplementasikan fitur geofencing untuk sistem presensi berbasis lokasi.
Menambahkan halaman konfigurasi presensi di panel admin untuk mengatur titik lokasi, radius presensi, dan nama lokasi.
Menambahkan map picker pada halaman admin agar lokasi presensi dapat dipilih langsung melalui peta.
Menambahkan toggle enable_geolocation untuk mengaktifkan atau menonaktifkan validasi lokasi secara global.
Menambahkan dukungan GPS dengan akurasi tinggi (enableHighAccuracy) pada proses deteksi lokasi.
Menampilkan informasi akurasi lokasi dan loading state saat proses pengambilan koordinat berlangsung.
Memastikan geolokasi hanya diminta ketika benar-benar diperlukan, seperti saat terdapat jadwal presensi aktif atau kelas yang masih membuka pendaftaran.
Menambahkan tombol refresh lokasi untuk memperbarui posisi pengguna secara manual.
Menambahkan GeoDebugPanel untuk kebutuhan debugging lokasi secara real-time menggunakan watchPosition, yang dapat diakses melalui parameter ?debug=geo.
Melakukan berbagai perbaikan bug dan penyempurnaan logika geolokasi berdasarkan hasil pengujian dan review.
23 Juni 2026
[BE-STRAPI] Mengembangkan fitur WhatsApp Group Reminder berbasis cron job yang mengirim pengingat otomatis sebelum jadwal pembelajaran dimulai.
[BE-STRAPI] Menambahkan field wa_group_id pada data kelas dan wa_notified pada data pertemuan untuk mendukung pelacakan status notifikasi.
[BE-STRAPI] Menyesuaikan perhitungan zona waktu WIB agar berjalan konsisten dan independen dari konfigurasi timezone server.
[BE-STRAPI] Memperbaiki logika window reminder, buffer waktu, serta validasi jadwal agar notifikasi tidak terlewat pada kondisi batas waktu tertentu.
[BE-STRAPI] Menambahkan konfigurasi terpusat untuk pengaturan cron reminder dan melakukan berbagai optimasi performa serta stabilitas proses pengiriman notifikasi WhatsApp.
Menambahkan dukungan tampilan informasi wa_group_id dan status wa_notified pada halaman detail pertemuan yang digunakan pengajar.
Mengintegrasikan fitur pengingat otomatis ke grup WhatsApp sebagai persiapan notifikasi kelas sebelum waktu pembelajaran dimulai.
Menyesuaikan tampilan data agar guru dapat memantau status pengiriman notifikasi WhatsApp langsung dari sistem.
24 Juni 2026
mengerjakan project di Hunayn Technologies
25 Juni 2026
mengerjakan project di Hunayn Technologies.
26 Juni 2026
mengerjakan project di Hunayn Technologies
27 Juni 2026
Libur Kerja (tanggal merah)
28 Juni 2026
Libur Kerja (tanggal merah)
29 Juni 2026
Memperbaiki format tampilan jam agar konsisten menggunakan format HH:mm.
Menyesuaikan proses edit jadwal pertemuan agar kompatibel dengan komponen input waktu (type="time").
Mengubah field WhatsApp Group pada form edit menjadi informasi baca-saja (view-only) untuk mencegah perubahan yang tidak disengaja.
Melakukan berbagai perbaikan minor pada dashboard guru dan halaman detail pertemuan.
Melakukan penyempurnaan mekanisme pengingat otomatis WhatsApp Group yang dikirim beberapa menit sebelum kelas dimulai.
Menyesuaikan logika perhitungan waktu agar notifikasi tetap terkirim meskipun terdapat perbedaan zona waktu server.
Menambahkan buffer waktu dan window pengecekan untuk mengurangi risiko notifikasi terlewat akibat perbedaan waktu eksekusi cron.
Memastikan jadwal yang belum memiliki status notifikasi (wa_notified) tetap dapat diproses oleh sistem reminder.
Menambahkan logging dan debugging pada setiap tahapan proses reminder untuk mempermudah proses validasi dan troubleshooting.
Menambahkan timeout dan mekanisme pengamanan pada proses pengiriman notifikasi agar tidak menggantung ketika terjadi kendala eksternal.
Melakukan beberapa iterasi perbaikan pada konfigurasi cron, sesi pembelajaran, dan perhitungan waktu untuk meningkatkan keandalan pengiriman notifikasi.
30 Juni 2026
Melakukan hardening keamanan frontend dengan menambahkan sanitasi XSS menggunakan DOMPurify pada seluruh area yang menggunakan dangerouslySetInnerHTML.
Menambahkan sanitasi konten editor (Quill Editor) untuk mencegah penyisipan script atau HTML berbahaya.
Menambahkan proteksi terhadap potensi kerentanan XSS (Cross-Site Scripting) dan melakukan pembersihan kode debug yang tidak lagi diperlukan.
Melakukan review dan perbaikan akses data untuk mencegah potensi IDOR (Insecure Direct Object Reference) pada fitur pembayaran, penilaian, dan halaman administrasi.
Menghapus berbagai console.log dan kode debugging yang tidak diperlukan untuk meningkatkan keamanan dan kebersihan kode produksi.
Melakukan sentralisasi konfigurasi kredensial Watzap pada workflow otomatis sehingga lebih mudah dikelola dan dipelihara.
Mengganti seluruh kredensial yang sebelumnya ditulis langsung (hardcoded) pada workflow menjadi placeholder atau konfigurasi terpusat.
Menyesuaikan beberapa workflow pembayaran, reminder kelas, dan notifikasi WhatsApp agar menggunakan mekanisme konfigurasi yang lebih aman.
Menambahkan dokumentasi konfigurasi kredensial untuk mempermudah proses deployment dan maintenance.
Melakukan perapihan workflow N8N yang berkaitan dengan pembayaran, reminder kelas, dan notifikasi WhatsApp.
Menstandarkan penggunaan konfigurasi eksternal pada workflow sehingga proses migrasi antar environment menjadi lebih mudah dan aman.
Melakukan berbagai perbaikan minor serta peningkatan maintainability pada workflow otomatis yang digunakan sistem.
1 Juli 2026
Melakukan audit dan perbaikan lebih dari 35 potensi crash pada aplikasi frontend yang disebabkan oleh data null, undefined, response API yang tidak lengkap, serta akses properti yang tidak aman.
Menambahkan defensive programming dan validasi data pada berbagai halaman pembelajaran, kuis, presensi, registrasi, e-maktabah, dashboard, dan fitur administrasi.
Menghilangkan banyak penggunaan non-null assertion (!) dan menggantinya dengan optional chaining serta fallback yang lebih aman.
Menambahkan validasi tambahan pada proses parsing data, manipulasi tanggal, dan pengolahan response API untuk meningkatkan stabilitas aplikasi.
Menambahkan mekanisme timeout, penanganan error, dan promise rejection handling pada berbagai hook dan service yang digunakan guru, siswa, maupun admin.
Menambahkan proteksi terhadap kegagalan request yang dapat menyebabkan loading tanpa akhir atau halaman tidak merespons.
Menambahkan validasi pada berbagai service admin agar data yang tidak valid dapat terdeteksi lebih awal sebelum digunakan aplikasi.
Memperbaiki berbagai skenario error yang sebelumnya dapat menyebabkan halaman kosong atau aplikasi berhenti bekerja.
Menambahkan mekanisme aman untuk proses JSON.parse pada data autentikasi yang tersimpan di browser sehingga aplikasi tidak crash apabila local storage berisi data yang rusak atau tidak valid.
Menghapus puluhan log debugging yang berpotensi menampilkan data sensitif seperti token autentikasi, response API, maupun informasi internal aplikasi.
Membatasi tampilan informasi debugging GPS hanya pada kondisi tertentu sehingga tidak muncul di lingkungan produksi.
Menghilangkan fallback URL lokal yang berpotensi menyebabkan inkonsistensi pada proses pemuatan gambar.
Memperbaiki beberapa potensi memory leak dengan menambahkan cleanup pada object URL, timer, event, dan komponen yang melakukan proses asynchronous.
Menyempurnakan lifecycle hook agar proses background yang tidak lagi diperlukan dapat dihentikan dengan benar ketika halaman ditutup atau berpindah.
Merapikan berbagai dependency hook dan context untuk mengurangi render yang tidak diperlukan.
Menyesuaikan konfigurasi Content Security Policy (CSP) untuk mendukung kebutuhan embedding konten tertentu sekaligus menjaga keamanan aplikasi.
Menambahkan dukungan sumber gambar yang diperlukan untuk integrasi konten eksternal seperti media pembelajaran dan video
2 Juli 2026
Menyelesaikan dan memperbaiki 14 error kompilasi TypeScript yang menyebabkan kegagalan build serta berpotensi mengganggu proses deployment aplikasi.
Memperbaiki berbagai masalah tipe data (null, undefined, dan assignability`) agar sesuai dengan standar TypeScript yang lebih ketat.
Menyempurnakan penggunaan hook React, referensi (useRef), dan validasi data untuk mengurangi potensi error saat runtime.
Membersihkan kode yang sudah tidak digunakan, variabel mati, serta dokumentasi error sementara yang tidak lagi diperlukan.
Menambahkan atribut keamanan noopener dan noreferrer pada tautan eksternal untuk mengurangi risiko eksploitasi melalui tab atau jendela browser yang dibuka dari aplikasi.
Memperbaiki pengelolaan URL sementara (Object URL) pada fitur upload file dan drag-and-drop agar tidak menyebabkan kebocoran memori maupun resource browser.
Menambahkan validasi defensif pada proses format angka dan koordinat lokasi untuk mencegah error ketika data belum tersedia atau bernilai kosong.
Menambahkan guard pada fungsi yang menggunakan toFixed() sehingga aplikasi tetap berjalan stabil meskipun menerima data yang tidak lengkap.
Menyempurnakan penanganan preview gambar, pembayaran, dan konfigurasi lokasi agar lebih aman terhadap kondisi data yang tidak valid.
Memperbaiki proses render navigasi tab kelas agar lebih stabil pada berbagai kondisi data.
Menyesuaikan perhitungan nilai persentase dengan mekanisme pembatasan (clamp) sehingga hasil yang ditampilkan tetap berada pada rentang yang valid.
Melakukan berbagai penyempurnaan kecil pada halaman pembayaran, pengaturan profil, perubahan kata sandi, jadwal, serta konfigurasi lokasi.
Perbaikan: parseInt radix, crash clipboard, img onError, switch default, pengalihan SPA 401, pembersihan rAF, kode kesalahan geolokasi, banner kesalahan fetch
Melakukan perbaikan menyeluruh pada penggunaan React Hooks agar sesuai dengan aturan react-hooks/rules-of-hooks.
Memindahkan berbagai guard dan conditional navigation ke posisi yang benar sehingga urutan eksekusi hook tetap konsisten pada setiap render.
Menyempurnakan implementasi pada halaman manajemen kuis, penilaian esai, dan detail kelas untuk menghindari potensi error akibat pemanggilan hook yang tidak sesuai aturan React.
Menambahkan berbagai proteksi terhadap crash yang disebabkan oleh data tanggal tidak valid (new Date()), nilai kosong, maupun data yang belum tersedia.
Memperbaiki proses pengurutan data berbasis tanggal agar tidak menghasilkan nilai NaN pada kondisi tertentu.
Menambahkan berbagai validasi dan fallback untuk mencegah error runtime pada halaman pembelajaran, kuis, administrasi, dan dashboard.
Menyempurnakan proses pembukaan halaman eksternal (window.open) dengan pengamanan tambahan untuk browser modern.
Menambahkan dan menyempurnakan mekanisme Error Boundary sehingga kegagalan pada suatu komponen tidak menyebabkan seluruh aplikasi berhenti berjalan.
Menambahkan guard pada berbagai proses navigasi untuk mencegah redirect atau perpindahan halaman yang tidak valid.
Memperbaiki sejumlah skenario yang sebelumnya dapat menyebabkan halaman kosong, render gagal, atau aplikasi berhenti merespons.
3 Juli 2026
Melakukan audit dan perbaikan keamanan pada berbagai endpoint penting yang berkaitan dengan pembayaran, kuis, peringkat kelas, dan data pembelajaran.
Memperketat mekanisme otorisasi sehingga pengguna hanya dapat mengakses atau memodifikasi data yang memang menjadi hak aksesnya.
Menambahkan validasi kepemilikan (ownership check) pada proses pembayaran dan berbagai operasi akademik untuk mencegah akses lintas pengguna yang tidak sah.
Memperbaiki validasi guru pada proses penilaian esai (gradeEssay) sehingga hanya pengajar yang berwenang yang dapat melakukan penilaian.
Menambahkan validasi keanggotaan kelas pada fitur peringkat kelas (class ranking) agar data hanya dapat diakses oleh peserta yang terdaftar.
Memperketat proses perhitungan ulang nilai (recalculate) dan akses data soal kuis dengan mekanisme otorisasi yang lebih aman.
Menambahkan validasi kepemilikan konten pada pengelolaan soal kuis dan berbagai middleware yang digunakan oleh pengajar.
Melakukan sanitasi data metadata pembayaran sebelum dikirim ke client untuk mencegah kebocoran informasi sensitif.
Membatasi data pembayaran yang dapat diekspos melalui API hanya pada informasi yang benar-benar diperlukan.
Menghapus berbagai informasi pribadi (Personally Identifiable Information / PII) dari response API yang tidak memerlukannya.
Menyisakan hanya data transaksi yang relevan seperti identitas order dan transaksi untuk kebutuhan integrasi pembayaran.
Memperketat akses endpoint pembaruan status pembayaran (updatePayment) sehingga hanya dapat digunakan oleh pihak yang memiliki otorisasi yang sesuai.
Menambahkan mekanisme otorisasi berbasis peran dan kepemilikan data untuk administrator, pengajar, maupun pendaftar terkait.
Mempertahankan endpoint pengecekan status pembayaran (check-payment) sebagai endpoint publik karena masih digunakan dalam alur registrasi peserta.
Menambahkan policy baru untuk mendukung otorisasi yang lebih rinci berdasarkan relasi pengguna dan kelas yang diakses.
Memperkuat validasi pada parameter dan slug yang digunakan untuk mengakses data agar lebih aman terhadap manipulasi URL.
Menambahkan berbagai null guard dan validasi tambahan guna mengurangi risiko error serta penyalahgunaan endpoint.
4 Juni 2026
Libur Kerja (tanggal merah)
5 Juni 2026
Libur Kerja (tanggal merah)
6 Juli 2026
Memperketat query data kuis agar siswa hanya dapat melihat data quiz_user miliknya sendiri menggunakan filter berdasarkan user.id.
Menambahkan filter enrollment pada halaman kelas dan homepage sehingga siswa hanya menerima data kelas yang memang diikuti.
Menambahkan berbagai crash guard dan validasi data (Array.isArray, fallback array kosong, pengecekan nilai kosong) pada halaman kelas, kuis, e-Maktabah, presensi, dan dashboard.
Menambahkan timeout 30 detik pada beberapa request halaman guru untuk mencegah loading tanpa batas.
Memperbaiki validasi tanggal tidak valid (isNaN(date)) pada halaman detail pertemuan guru.
Menambahkan guard untuk response API yang kosong atau tidak sesuai format agar aplikasi tidak crash.
Menambahkan validasi courseId kosong sebelum melakukan request data.
Membersihkan log debugging dan console.warn yang sudah tidak diperlukan.
Memperbaiki berbagai bug policy terkait penggunaan documentId dan id pada Strapi v5.
Menambahkan validasi kepemilikan data (ownership check) untuk mencegah akses data milik pengguna lain (IDOR) pada pembayaran, tagihan, presensi, registrasi, dan data akademik.
Memperketat policy siswa dan guru agar hanya dapat mengakses data yang memang menjadi hak aksesnya.
Menambahkan validasi guru pengampu pada proses registrasi dan akses data kelas.
Melakukan sanitasi metadata pembayaran agar data sensitif tidak terekspos melalui API.
Mengamankan proses pembuatan slug jawaban kuis menggunakan crypto.randomUUID() dan whitelist field yang diperbolehkan.
Menambahkan berbagai null guard dan fallback pada middleware serta controller untuk meningkatkan stabilitas backend.
Memperbaiki middleware dan policy agar kompatibel dengan format Strapi v5.
Memperketat otorisasi fitur koreksi nilai dan pengelolaan soal kuis sehingga hanya admin atau pengajar yang berwenang yang dapat melakukan perubahan data.
Memperbaiki MapPickerModal agar tetap berfungsi pada browser/perangkat yang tidak mendukung WebGL.
Menambahkan deteksi otomatis WebGL (supportsWebGL()).
Menambahkan fallback peta statis OpenStreetMap lengkap dengan tombol zoom (+/-) dan fitur klik untuk memilih lokasi.
Mencegah error runtime dari MapLibre GL / OSM iframe pada browser yang tidak kompatibel.
Menambahkan validasi tanggal (isNaN) pada proses registrasi dan edit kuis untuk mencegah crash akibat tanggal tidak valid.
Menambahkan guard pada berbagai proses format angka (toFixed, toLocaleString, Math.max) agar aman terhadap nilai kosong atau invalid.
Memperbaiki perhitungan dan tampilan nilai pada halaman registrasi, keuangan, wilayah, dan kuis agar lebih defensif terhadap data API yang tidak lengkap.
Meningkatkan stabilitas aplikasi dengan berbagai null guard dan validasi data tambahan.
Migrasi kompatibilitas Strapi 5 dengan mengganti penggunaan entityService menjadi strapi.documents() pada beberapa controller dan bootstrap process.
Mengganti penggunaan console.error menjadi strapi.log.error.
Memperbaiki controller course agar menggunakan API documents() dan menghapus kode lama yang sudah tidak digunakan.
Menambahkan validasi minimum pageSize pada endpoint users.
Menyesuaikan custom content API route agar kompatibel dengan format Strapi 5.
Memperbaiki beberapa middleware dan policy dengan mengganti query $in menjadi $eq untuk pencarian single-value yang lebih tepat.
7 Juli 2026
Memperbaiki filter kepemilikan data presensi agar hanya berlaku untuk santri, bukan guru.
Sebelumnya guru tidak dapat melihat data presensi karena filter student.id = user.id diterapkan ke seluruh pengguna non-admin.
Kini guru dan admin dapat melihat seluruh data presensi, sementara santri tetap hanya dapat melihat data miliknya sendiri.
Memperbaiki query Last Edited Guru pada data kuis.
Mengganti relasi yang salah dari student menjadi user pada query quiz-user.
Menyesuaikan populate dan accessor agar data aktivitas terakhir guru dapat tampil dengan benar.
Memperbaiki proses refresh data presensi pada halaman detail pertemuan guru.
Mengganti mekanisme refresh manual menjadi queryClient.invalidateQueries() sesuai best practice TanStack Query.
Menambahkan validasi status response setelah create/update presensi agar error dapat terdeteksi dengan benar.
Menyesuaikan fitur refresh absensi agar menggunakan mekanisme sinkronisasi data yang lebih stabil.
Memperbaiki error React duplicate key '0' pada tabel presensi.
Menambahkan fallback key unik untuk setiap item data.
Menambahkan tombol Refresh pada tab presensi untuk memudahkan sinkronisasi data terbaru.
Menghubungkan tombol refresh dengan proses invalidasi query sehingga data dapat diperbarui secara real-time.
Memperbaiki policy update Quiz Question yang sebelumnya sering menghasilkan error 403 untuk guru.
Menyesuaikan populate relasi course.teacher pada Strapi 5 agar data guru dapat terbaca dengan benar saat proses validasi kepemilikan soal kuis.
Memastikan validasi otorisasi guru terhadap soal kuis berjalan sesuai kelas yang dimiliki dan tidak lagi gagal akibat relasi guru bernilai null.
Memperbaiki proses migrasi data registrasi ke user agar otomatis menggunakan role student, tidak lagi menggunakan role authenticated.
Memastikan user hasil migrasi langsung memiliki hak akses yang sesuai sebagai santri.
Memperbaiki policy akses pada modul quiz, lesson, dan attendance dengan menambahkan bypass khusus untuk admin.
Menambahkan null guard pada controller Quiz Question untuk mencegah error saat data relasi tidak ditemukan.
Memperbaiki validasi role admin dari administrator menjadi admin agar sesuai dengan konfigurasi up_roles.type yang digunakan aplikasi.
Mencegah kegagalan otorisasi akibat ketidaksesuaian nama role.
Memperbaiki keamanan endpoint migrate-to-users.
Menambahkan validasi otorisasi sehingga hanya admin yang dapat menjalankan proses migrasi registrasi menjadi akun pengguna.
Menambahkan pemeriksaan role pada controller untuk mencegah akses tidak sah.
Menyesuaikan konfigurasi route migrasi user agar kompatibel dengan autentikasi JWT pada Users & Permissions.
Memindahkan validasi hak akses admin ke level controller sehingga proses otorisasi berjalan lebih konsisten.
Memperbaiki ownership filter pada clock-attendance.
Sebelumnya filter data pengguna diterapkan ke seluruh non-admin sehingga guru tidak dapat melihat data presensi.
Kini filter hanya berlaku untuk role student, sementara guru dan admin dapat mengakses data presensi sesuai kebutuhan operasional.
8 Juli 2026
Menambahkan halaman konfigurasi WhatsApp terpisah pada panel admin.
Menambahkan tab WhatsApp di halaman konfigurasi aplikasi untuk mengelola nomor admin dan pengaturan reminder WA.
Memindahkan pengaturan WhatsApp ke halaman khusus agar lebih terstruktur.
Mengubah konfigurasi WhatsApp Admin agar seluruh aplikasi mengambil data langsung dari database melalui AppConfigContext.
Mengganti penggunaan konfigurasi statis (wa.ts) menjadi context pada halaman registrasi, pembayaran, course selector, dan modal terkait.
Merefactor utilitas WhatsApp menjadi getter function agar lebih mudah dikelola.
Menambahkan berbagai pengaturan WhatsApp Reminder pada AppConfig, termasuk webhook, interval cron, timezone, timeout, hari aktif, dan sesi pengiriman.
Menyesuaikan service pembayaran agar menggunakan konfigurasi WhatsApp terbaru dari AppConfig.
Menyempurnakan tampilan halaman konfigurasi admin.
Menyeragamkan style judul setiap section (Banner, Presensi, WhatsApp).
Memindahkan posisi toggle geolokasi agar lebih intuitif.
Memindahkan tombol simpan ke dalam card konfigurasi WhatsApp.
Menambahkan konfigurasi WhatsApp Reminder yang sepenuhnya tersimpan di database, termasuk WA Group Link, hari aktif cron, dan sesi pengiriman.
Mengubah cron reminder agar membaca konfigurasi terbaru dari database pada setiap proses eksekusi tanpa perlu restart server.
Menambahkan validasi sehingga cron hanya berjalan jika konfigurasi hari dan sesi telah diatur.
Menambahkan logging yang lebih efisien, termasuk throttle log saat tidak aktif dan log detail hanya ketika reminder benar-benar dikirim.
Memperbarui proses bootstrap untuk melakukan seed konfigurasi default WhatsApp Reminder.
Menyesuaikan layout Content Manager agar field WhatsApp memiliki ukuran penuh (12 kolom).
Memperbarui dokumentasi API dan content type yang dihasilkan otomatis sesuai perubahan schema.
9 Juli 2026
mengerjakan project di Hunayn Technologies
10 Juli 2026
mengerjakan project di Hunayn Technologies
11 Juni 2026
Libur Kerja (tanggal merah)
12 Juni 2026
Libur Kerja (tanggal merah)
13 Juli 2026
Menambahkan fitur Enroll Santri langsung dari halaman manajemen pengguna.
Menampilkan tombol enroll hanya untuk pengguna yang memenuhi syarat (santri dengan status aktif/tidak diblokir).
Menambahkan modal migrasi dengan tiga pilihan aksi untuk mempermudah proses migrasi dan pendaftaran santri ke kelas.
Menyesuaikan toolbar dan service hook agar proses enroll lebih rapi dan mudah digunakan.
Menambahkan endpoint migrateAndEnroll dan enrollStudent untuk menggabungkan proses migrasi registrasi menjadi akun pengguna sekaligus pendaftaran ke kelas.
Memperbaiki cron WhatsApp agar otomatis dilewati ketika konfigurasi sesi atau hari masih kosong.
Meningkatkan keamanan endpoint public appconfig dengan melakukan sanitasi data sehingga hanya konfigurasi yang aman untuk diakses oleh aplikasi publik.
Memperbaiki alur WhatsApp Group agar menggunakan WA Group Link sesuai kelas (per-course) pada SPP Workflow dan seluruh modal di frontend.
Memperbaiki race condition pada proses autoCheckPayment sehingga status pembayaran lebih konsisten dan mengurangi kemungkinan data tidak sinkron setelah pembayaran.
Memperbarui endpoint updatePayment agar turut mengembalikan informasi data kelas, termasuk wa_group_link, sehingga frontend dapat langsung menampilkan tautan grup WhatsApp yang sesuai setelah proses pembayaran berhasil.
14 Juli 2026
Libur Kerja (izin sakit)
15 Juli 2026
Menambahkan endpoint agregasi khusus homepage aggregate pada modul api-for-page untuk menggabungkan data dashboard dalam satu request.
Memperbaiki query raw knex untuk data attendances dan quizUsers agar hasil agregasi lebih akurat dan kompatibel dengan struktur data terbaru.
Menambahkan dukungan penggunaan homepage aggregate endpoint untuk mengurangi jumlah request terpisah pada halaman utama.
Memperbaiki duplicate fetch pada hook useAttendance sehingga data presensi tidak diminta dua kali.
Mengoptimalkan proses update state pada useAttendance dan useQuizzes menggunakan startTransition agar render halaman lebih halus dan responsif
16 Juli 2026
Menambahkan aggregate endpoint untuk halaman profil sehingga seluruh data profil dapat diambil dalam satu request.
Memindahkan proses pengambilan data profil ke StudentService agar lebih terpusat dan mudah digunakan kembali.
Menambahkan konfigurasi aggregate.ts untuk mengelola endpoint agregasi secara terstruktur.
Memperbaiki berbagai bug frontend, meliputi: penyempurnaan loading state, penanganan cancelled flag pada async request, refactor shared hooks, perbaikan tipe data TypeScript, perbaikan parsing nominal pembayaran (payment amount).
Menambahkan aggregate endpoint untuk data halaman profil agar frontend cukup melakukan satu request.
Memperbaiki berbagai bug backend, meliputi: migrasi query dari raw Knex ke Strapi ORM, penggunaan documentId yang konsisten, migrasi strapi.query() ke strapi.db.query() (Strapi 5), pembersihan empty catch block, penambahan null guard untuk meningkatkan stabilitas endpoint.
17 Juli 2026
mengerjakan project di Hunayn Technologies
18 Juni 2026
Libur Kerja (tanggal merah)
19 Juni 2026
Libur Kerja (tanggal merah)
20 Juli 2026
Memperbaiki bug loading yang tidak pernah berhenti ketika tidak ada kelas yang tersedia.
Menyempurnakan UI/UX modal migrasi dengan penggunaan bahasa Indonesia yang lebih jelas dan mudah dipahami pengguna.
Memperbaiki proses registrar migration dengan menambahkan provider local saat pembuatan akun.
Memperbaiki berbagai bug pada homepage kuis, termasuk loading, sinkronisasi data, dan menghilangkan flash "tidak ada data".
Menyesuaikan filter agar hanya kuis DONE yang disembunyikan, sedangkan kuis OPEN tetap ditampilkan.
Mengoptimalkan sinkronisasi state (useMemo, startTransition, dan dependency hooks) untuk meningkatkan stabilitas render.
Menambahkan log debugging sementara untuk proses investigasi bug kuis yang tidak tampil.
21 Juli 2026
mengerjakan project di Hunayn Technologies
22 Juli 2026
fixing halaman homepage tepatnya bagian kuis dan ujian
fixing halaman profilepage tepatnya bagian total tagihan spp
fixing halaman paymentpage
23 Juli 2026
mengerjakan project di Hunayn Technologies
24 Juli 2026
Menambahkan alur server-side N8N untuk registrasi dan pembayaran melalui service createWithPayment.
Menambahkan validasi pada PaymentSuccessPage agar halaman hanya dapat diakses jika pembayaran telah VERIFIED.
Menyesuaikan integrasi pembayaran agar menggunakan konfigurasi server-side yang lebih aman.
Menambahkan endpoint createWithPayment dan createWithPaymentGateway untuk proses registrasi dan pembayaran server-to-server melalui N8N.
Menambahkan validasi nominal pembayaran berdasarkan data responsibility/course fee untuk mencegah manipulasi nilai pembayaran.
Menambahkan endpoint student scores untuk kebutuhan data nilai siswa.
Memperbaiki endpoint homepage dengan migrasi query strapi.db.query → strapi.documents agar data kuis siswa lebih konsisten.
25 Juni 2026
Libur Kerja (tanggal merah)
26 Juni 2026
Libur Kerja (tanggal merah)
27 Juli 2026
Melakukan upgrade Strapi dari v5.14.0 ke v5.50.2 beserta seluruh package terkait agar menggunakan versi yang seragam.
Memperbaiki typo dan syntax pada plugins.js setelah proses upgrade.
Upgrade dilakukan untuk mengatasi error saat mengakses /admin/settings/documentation, sehingga pengaturan dokumentasi API dapat digunakan kembali, termasuk konfigurasi keamanan pada endpoint /documentation.
Menambahkan auto-save draft menggunakan localStorage pada pengerjaan kuis serta halaman tambah/edit kuis, sehingga perubahan tidak hilang saat halaman ditutup atau di-refresh.
Mengganti mekanisme auto-save jawaban essay dari API ke localStorage untuk meningkatkan performa dan mengurangi request yang tidak diperlukan.
Menambahkan penanganan error (try-catch) dengan silent fallback serta tetap menjaga kompatibilitas dengan data lama.
Menambahkan middleware untuk menghapus field uuid dari response /admin/init, sehingga instance fingerprint tidak terekspos kepada pengguna yang belum terautentikasi.
28 Juli 2026
Meningkatkan keamanan server dengan konfigurasi UFW: Menutup akses publik ke database MariaDB (3306), Menutup akses publik ke port aplikasi (3000)
Mengintegrasikan aggregate endpoint pada halaman daftar kelas dan detail kelas untuk mengurangi jumlah request API serta mempercepat waktu muat halaman.
Menambahkan feature flag agar penggunaan aggregate endpoint dapat diaktifkan atau dinonaktifkan dengan mudah.
Merefactor CourseDetailPage sehingga menggunakan satu aggregate request sebagai pengganti beberapa hook terpisah.
Menambahkan caching menggunakan Valkey/Redis pada endpoint homepage student untuk meningkatkan performa.
Menambahkan mekanisme cache invalidation secara otomatis saat terjadi perubahan data presensi maupun kuis agar data yang ditampilkan tetap terbaru.
29 Juli 2026
Menambahkan komponen AccessDenied (403) yang dapat digunakan kembali pada seluruh halaman berbasis aggregate endpoint, sehingga pengguna mendapatkan tampilan yang lebih informatif ketika tidak memiliki akses.
Mengintegrasikan penanganan error 403 Forbidden pada halaman Homepage, Course Page, Course Detail, dan Profile.
Menambahkan Valkey/Redis caching pada aggregate endpoint Course Page dan Course Detail (TTL 300 detik) untuk meningkatkan performa.
Menambahkan helper pattern-based cache invalidation serta lifecycle hook pada Course dan Lesson agar cache otomatis diperbarui ketika terjadi perubahan data (create, update, delete).
Menambahkan lifecycle Redis saat aplikasi bootstrap (ping koneksi) dan shutdown (quit) untuk memastikan koneksi cache dikelola dengan baik.
Menambahkan lifecycle afterCreate dan afterDelete pada Course agar cache otomatis diperbarui saat data dibuat atau dihapus.
Memperbaiki penanganan payload relasi saat disconnect pada seluruh lifecycle sehingga invalidasi cache tetap berjalan dengan benar.
Menambahkan logging error pada proses cache untuk mempermudah proses monitoring dan debugging apabila terjadi kegagalan.
Memperluas cache invalidation agar Course Detail otomatis diperbarui setelah perubahan data presensi maupun kuis.
Memperbaiki proses ekstraksi documentId pada mekanisme invalidasi cache agar lebih akurat.
Menambahkan lifecycle pada AppConfig, Book, dan Config untuk memastikan cache terkait ikut diperbarui ketika data berubah.
30 Juli 2026
Merefactor penggunaan shared authHeader agar logika autentikasi lebih terpusat dan mudah dipelihara.
Mengoptimalkan Admin Dashboard dengan mengurangi jumlah request API yang diperlukan sehingga meningkatkan performa halaman.
Memodernisasi proses pengambilan data pada Teacher Home agar lebih efisien dan selaras dengan struktur data terbaru.
31 Juli 2026
Menambahkan halaman Admin Analytics dengan tab Users, Registrasi, Keuangan, dan Kuis, lengkap dengan penyesuaian tampilan yang responsif.
Merefactor modul analytics agar menggunakan 4 aggregate endpoint yang sesuai dengan masing-masing tab, sehingga struktur data lebih sederhana dan jumlah request API berkurang.
1 Agustus 2026
Libur Kerja (tanggal merah)
2 Agustus 2026
Libur Kerja (tanggal merah)
3 Agustus 2026
mengerjakan project di Hunayn Technologies
4 Agustus 2026
mengerjakan project di Hunayn Technologies
5 Agustus 2026
mengerjakan project di Hunayn Technologies
6 Agustus 2026
mengerjakan project di Hunayn Technologies
7 Agustus 2026
mengerjakan project di Hunayn Technologies
8 Agustus 2026
Libur Kerja (tanggal merah)
9 Agustus 2026
Libur Kerja (tanggal merah)
10 Agustus 2026
mengerjakan project di Hunayn Technologies
11 Agustus 2026
mengerjakan project di Hunayn Technologies
12 Agustus 2026
mengerjakan project di Hunayn Technologies
13 Agustus 2026
mengerjakan project di Hunayn Technologies
14 Agustus 2026
mengerjakan project di Hunayn Technologies
15 Agustus 2026
Libur Kerja (tanggal merah)
16 Agustus 2026
Libur Kerja (tanggal merah)
17 Agustus 2026
Libur Kerja (tanggal merah HUT RI)
18 Agustus 2026
mengerjakan project di Hunayn Technologies
19 Agustus 2026
mengerjakan project di Hunayn Technologies
20 Agustus 2026
mengerjakan project di Hunayn Technologies
21 Agustus 2026
mengerjakan project di Hunayn Technologies
22 Agustus 2026
Libur Kerja (tanggal merah)
23 Agustus 2026
Libur Kerja (tanggal merah)
24 Agustus 2026
mengerjakan project di Hunayn Technologies
25 Agustus 2026
Libur Kerja (tanggal merah Maulid Nabi)
26 Agustus 2026
mengerjakan project di Hunayn Technologies
27 Agustus 2026
Merefactor halaman Admin Analytics agar seluruh data dikonsumsi melalui 4 aggregate endpoint per tab, meningkatkan efisiensi pengambilan data serta mempermudah pemeliharaan kode.
Memindahkan tabel Progress SPP per Santri ke tab Keuangan sebagai tab utama serta mengekstrak utilitas download CSV agar dapat digunakan bersama.
Menambahkan fitur analisis tunggakan SPP per santri dengan progress bar di dalam tabel serta memperbaiki perhitungan alokasi pembayaran per tagihan (FIFO).
Menampilkan kolom Total Tagihan pada laporan SPP per Santri.
Menyempurnakan analisis tingkat kesulitan soal dengan mengurutkan soal berdasarkan akurasi terendah, kemudian jumlah percobaan, dan terakhir tanggal pembuatan.
Memperkuat proses parsing data analitik agar lebih tahan terhadap berbagai format data di production (string/array, stale keys), sekaligus menambahkan informasi diagnostik untuk debugging.
Merefactor data tunggakan SPP agar hanya menampilkan santri yang masih memiliki tunggakan, dengan penyesuaian nilai pembayaran agar tidak melebihi total tagihan, sementara ringkasan keseluruhan tetap mencakup seluruh santri.
Menambahkan data teks soal lengkap, seluruh opsi jawaban, serta jawaban benar pada payload Question Difficulty untuk kebutuhan analisis.
Menambahkan data teks soal lengkap, seluruh opsi jawaban, serta jawaban benar pada payload Question Difficulty untuk kebutuhan analisis.
28 Agustus 2026
mengerjakan project di Hunayn Technologies
29 Agustus 2026
Libur Kerja (tanggal merah)
30 Agustus 2026
Libur Kerja (tanggal merah)
31 Agustus 2026
mengerjakan project di Hunayn Technologies
1 September 2026
mengerjakan project di Hunayn Technologies
2 September 2026
Menambahkan konfigurasi SCHEDULE_CLASS_NAME_MODE (below / inline) untuk mengatur tampilan nama kelas pada kartu jadwal dan modal detail jadwal.
Menambahkan mapping course_name dari data lesson ke fitur Schedule.
Memperbaiki bug perbedaan tanggal akibat timezone dengan menambahkan helper parseDateOnly dan toDateOnlyKey.
Perbaikan diterapkan pada filter, sorting, pengelompokan jadwal, presensi, statistik kehadiran otomatis, filter murojaah, urutan lesson, serta label tanggal relatif seperti Hari Ini, Besok, dan Kemarin.
Memperbarui formatDate agar tanggal kalender tidak bergeser akibat perbedaan timezone.
Menambahkan konfigurasi LATE_ATTENDANCE_AS_PRESENT agar siswa yang terlambat melewati batas cutoff tetap dapat tercatat PRESENT, dengan catatan keterlambatan tetap disimpan.
Menambahkan konfigurasi LATE_CUTOFF_MINUTES_BEFORE_END dengan nilai default 30 menit untuk menentukan batas keterlambatan.
Presensi yang dilakukan setelah pelajaran selesai tetap tercatat sebagai ABSENT.
Menambahkan status LATE (Telat) pada schema, analytics, dan logic perhitungan waktu presensi, termasuk format catatan keterlambatan.
Menambahkan cron auto-ALPA untuk menandai siswa sebagai ABSENT setelah batas waktu keterlambatan berakhir.
Menambahkan invalidasi cache homepage student pada seluruh lifecycle lesson agar data presensi tetap terbaru.
Memperbaiki guard idempotensi attendance dari findFirst menjadi findOne.
Menambahkan konfigurasi presensi untuk absen window, durasi keterlambatan, dan reminder.
Memungkinkan student melakukan pengajuan status PERMIT secara langsung.
3 September 2026
mengerjakan project di Hunayn Technologies
4 September 2026
mengerjakan project di Hunayn Technologies
5 September 2026
Libur Kerja (tanggal merah)
6 September 2026
Libur Kerja (tanggal merah)
7 September 2026
Menambahkan status LATE (Telat) beserta badge dan label pada tampilan teacher/student, termasuk modal dan utility terkait.
Memperbarui perhitungan kehadiran agar status LATE tetap dihitung sebagai hadir.
Menambahkan status LATE pada Admin Analytics, termasuk bar chart, pie chart, legend, dan summary.
Menambahkan auto-refresh data homepage saat halaman kembali aktif (visibilitychange) agar perubahan data langsung terlihat.
Memperbaiki fallback getStatusBadge agar status yang tidak dikenal menghasilkan null.
Tambah Overview dengan statistik users, revenue, tunggakan SPP, dan attendance rate.
Tambah breakdown attendance per santri dan per kelas, lengkap dengan search, sorting, dan export CSV.
Quiz Analytics mengikuti konfigurasi month window (default 6 bulan).
Expose student ranking & question difficulty serta perbaikan rendering quota.
Perbaikan typing payload update course.
Tambah computeOverview untuk statistik users, registrar, course, quiz, lesson, revenue, payment, tunggakan SPP, dan attendance rate.
Tambah breakdown attendance per santri dan per kelas.
Tambah dukungan month-window untuk attendance & quiz.
Tambah perbandingan 2 bulan terakhir untuk user growth, registrar, revenue, payment, dan attendance.
Ganti bypass khusus PERMIT menjadi pengecekan berdasarkan role.
Teacher dan Admin sekarang dapat membuat absensi dengan status apa pun: PRESENT, LATE, ABSENT, atau PERMIT.
migrate wa course reminder to open wa
8 September 2026
[N8N] Migrasi workflow Register Payment dari watzap.id ke OpenWA — config menggunakan `openwa.apiKey` + `openwa.sessionId`, Send WA Payment Link menggunakan Code node dengan `this.helpers.httpRequest()`.
[N8N] Migrasi workflow SPP dari watzap.id ke OpenWA — 5 config nodes + 5 send nodes diubah ke OpenWA, semua menggunakan credentials yang sama.
[N8N] Memperbarui pesan reminder WA sesuai template terbaru — "Ikhwati fillah" diubah menjadi "Ikhwah fillah", "Jam pelajaran" diubah menjadi "Kelas", bagian presensi menggunakan bullet point, log debug dihapus.
[N8N] Memperbaiki bug normalisasi phone pada workflow Register Payment — chatId sebelumnya menggunakan `$json.phone + '@c.us'` tanpa menghilangkan prefix `+`, menyebabkan OpenWA menerima chatId invalid (`+6282286250694@c.us`). Sekarang phone dinormalisasi dengan `replace(/^\+/, '')` sebelum di-append `@c.us`.
9 September 2026
• [BE] Membuat content type class-leader dengan field student (manyToOne → User), all_courses (boolean), courses (manyToMany → Course). Controller custom find (admin melihat semua, student melihat milik sendiri), create/update/delete hanya admin. Menggunakan strapi.db.query() untuk query user/relation karena Strapi 5 Documents API tidak mendukung findOne dengan filter.
• [BE] Fix policies-attendance-student-or-teacher.js dan policies-student-or-teacher.js untuk Strapi 5 — .pagination.total diubah menjadi .length karena core service find() mengembalikan array langsung, bukan { data, pagination }.
• [BE] Update controller lesson-attendance.js — menambahkan getUserFromToken() untuk manual JWT decode, class leader bisa create/update attendance untuk mahasiswa lain, idempotency update jika attendance sudah ada untuk student + lesson, serta populate lesson.course untuk access check. Route dikonversi dari createCoreRouter ke manual routes.
• [BE] Update middleware authorized-attendance-for-student.js — menambahkan class leader $or filter untuk akses own attendance dan attendance pada assigned courses.
• [FE] Membuat AdminClassLeadersService.ts, useClassLeaders.ts, dan ClassLeaderModal.tsx untuk CRUD ketua kelas di admin.
• [FE] Update AdminUsersPage.tsx — menambahkan column "Ketua Kelas" dengan Crown badge dan Crown action button per student.
• [FE] Membuat ClassLeaderDashboardPage.tsx, ClassLeaderCoursePage.tsx, dan ClassLeaderLessonDetailPage.tsx untuk halaman ketua kelas.
• [FE] Membuat useClassLeaderCourses.ts dan useClassLeaderLessons.ts hooks untuk fetch data course dan lesson ketua kelas.
• [FE] Update App.tsx — menambahkan route /class-leader/*.
• [FE] Fix LessonAttendancesService.ts — memperbaiki URL / prefix pada updateAttendance yang sebelumnya menghasilkan URL invalid, serta menambahkan error handling untuk response 4xx/5xx.
• [FE] Fix TypeScript errors — menghapus variable unused (formatCourseLabel, courseDetail, lessonDetail), type fix reason/note dengan || null, menambahkan property students ke interface StudentCourse, dan type cast pada error handling response.data.
• [FE] Membuat shared UI components (Spinner, EmptyState, StatCard, PageHeader, LessonCard, TabBar, StatusBadge, IconButton) untuk konsistensi UI admin dan teacher.
• [FE] Membuat shared utilities untuk timeAgo, sorting course, badge, dan navigation admin sebagai single source of truth untuk mengurangi duplikasi kode.
• [FE] Mengadopsi shared components dan utilities ke Admin Dashboard, Admin Sidebar/Top Panel, Teacher Home, Teacher Sidebar/Top Panel, serta hooks last edited.
• [FE] Memperbaiki teacher sidebar mobile, stale state pada teacher top panel, duplicate key pada StatCard, icon StatusBadge, serta handling timeAgo untuk future/invalid dates.
• [FE] Memperbaiki useClassLeaderCourses untuk menangani response array Strapi 5, menambahkan hasClassLeader flag, serta state "Tidak ada akses" pada Class Leader Dashboard.
• [BE] Fix class-leader controller agar menggunakan strapi.documents().findMany() sehingga populate student dan courses tidak di-strip oleh Strapi 5 sanitize layer.
• [BE] Optimasi resolveAccessibleCourses dengan mengganti N+1 queries menjadi batch findMany($in).
• [BE] Fix policy attendance Class Leader dengan populate lesson.course agar access check dapat berjalan dengan benar.
• [BE] Menambahkan authorization policy ke DELETE lesson-attendance yang sebelumnya tidak memiliki authorization.
• [BE] Fix lesson-attendance findOne agar menggunakan direct db.query dan tetap menerapkan filter ownership student.
• [BE] Fix authorized-attendance-for-student dengan fallback context.query.filters || {} untuk mencegah undefined filter pada $and array.
10 September 2026
• [FE] Membuat halaman AdminClassLeadersPage (/admin/class-leaders) untuk mengelola ketua kelas dengan search, select-all, bulk delete, serta expand/collapse daftar kelas per santri.
• [FE] Memindahkan manajemen ketua kelas dari AdminUsersPage ke halaman khusus, termasuk route /admin/class-leaders dan menu Ketua Kelas pada admin navigation.
• [FE] Memperbarui card ketua kelas agar menampilkan seluruh kelas ongoing yang diikuti santri, kelas non-ongoing yang masih ter-assign, serta anak yatim yang hanya ter-enroll di child course sebagai baris top-level.
• [FE] Menambahkan pengelolaan kelas langsung dari card melalui tombol Tambah Kelas, tombol trash dengan konfirmasi untuk kelas non-ongoing, serta menyembunyikan santri yang sudah menjadi ketua kelas dari modal pemilihan.
• [FE] Memperbarui ClassLeaderModal dengan dukungan edit, sinkronisasi toggle Semua Kelas dengan checkbox, checkbox yang selalu aktif, serta menampilkan anak yatim dan foto santri dengan fallback initial.
• [FE] Memperbarui halaman Class Leader santri — sorting course berdasarkan course_date terbaru, sorting siswa berdasarkan nama/waktu, foto siswa dengan fallback initial, serta dashboard menggunakan UnderlineTabs.
• [FE] Memperbaiki formatter tanggal dengan formatWithAhad agar Minggu → Ahad, diterapkan pada format tanggal long/custom dan halaman Class Leader.
• [FE] Memperbarui CoursePage agar title Kelas dapat diklik menuju /class-leader tanpa mengubah tinggi navbar.
• [FE] Memperbarui useTeacherCourseDetail dengan explicit populate termasuk nested students.avatar, serta menambahkan optional avatar pada TeacherStudent dan ClassLeader.student.
• [FE] Membuat shared components UnderlineTabs, InfoRow, IconInfoRow, dan SearchInput, serta menambahkan onRowClick dan bare pada BaseTable.
• [FE] Mengadopsi gaya tab dan komponen shared ke halaman Teacher seperti Course, Lesson Detail, Books modal, Profile quick actions, Syllabus, dan dashboard Class Leader.
• [FE] Memperbarui detail kelas/pertemuan dengan kartu informasi dan tombol Edit, migrasi MeetingsTab dan GradesTab ke BaseTable, serta mempertahankan expandable rows pada AttendanceTab.
• [FE] Memperbaiki StatusBadge untuk ejaan Alpa dan dark mode, serta memperbarui badge attendance dan StatCard ringkasan absensi.
• [FE] Memperbaiki layout header, tombol Tambah Pertemuan, search, pil nilai, dan footer quiz agar konsisten di dalam card.
• [FE] Memperbaiki validasi/form — inline error pada AddLesson, hapus soal dengan konfirmasi dan auto-expand error pada Add/EditQuiz, serta penghapusan PDF per-file pada BookForm tanpa menghapus PDF lama secara diam-diam.
• [FE] Memperbaiki rekap absensi agar menggunakan data agregat sebenarnya, bukan lagi selalu menampilkan nilai nol.
• [FE] Memperbaiki navigasi — FAB berlabel Pertemuan di 5 halaman, BottomNav Kelas tidak aktif pada route lesson, not-found kembali ke Detail Kelas, breadcrumb diseragamkan, serta list pelajaran menampilkan tanggal dan kode.
11 September 2026
• [FE] Fix AdminProfilePage — resolve up_users ID berdasarkan email sebelum PUT, merge avatar ke React Query cache tanpa refetch, preserve avatar di localStorage, serta mencegah double-submit pada tombol Simpan Foto.
• [FE] Fix TeacherProfilePage — menambahkan handling avatar load error, reset state saat avatar berubah, preserve avatar di localStorage, serta mencegah double-submit pada tombol Simpan Foto.
• [FE] Update student picker di AdminClassLeadersPage — tambah sorting nama (A-Z/Z-A) dan tanggal (terbaru/terlama), filter student yang blocked, tampilkan createdAt, serta perbaiki z-index modal menjadi z-[10001].
• [FE] Update ClassLeaderModal — menyembunyikan toggle Semua Kelas jika santri tidak memiliki course ter-enroll dan menambahkan guard agar tidak dapat menyimpan ketika allCourses=true tetapi tidak ada course.
• [FE] BooksService dan useAvatarUpload hanya perubahan komentar, tanpa perubahan fungsional.
• [FE] Update AdminClassLeadersPage — mengganti pencarian client-side menjadi server-side search menggunakan filter Strapi $containsi.
• [FE] Menambahkan debounce 400ms pada input pencarian untuk mengurangi request API berulang.
• [FE] Menambahkan pagination Load More dengan pageSize 20 per halaman pada Student Picker Modal.
• [FE] Menghapus filtered useMemo karena filtering sekarang dilakukan langsung oleh API.
• [FE] Memperbaiki flow fetch — initial fetch dan perubahan sorting akan mereset pagination ke halaman pertama.
• [FE] Menambahkan cleanup timer debounce saat component unmount untuk mencegah stale request/state.
[FE] konsistensi ui ux secara menyeluruh
12 September 2026
Libur Kerja (tanggal merah)
13 September 2026
Libur Kerja (tanggal merah)
14 September 2026
mengerjakan project di Hunayn Technologies
15 September 2026
mengerjakan project di Hunayn Technologies
16 September 2026
[BE-STRAPI] Menambahkan shared helpers extractId, getUserFromToken, dan invalidateHomepageCache untuk mengurangi duplikasi logic di backend.
[BE-STRAPI] Update lifecycle Config/AppConfig agar menggunakan shared invalidateHomepageCache.
[BE-STRAPI] Update 4 lifecycle (course, lesson, quiz-user, lesson-attendance) agar menggunakan shared extractId.
[BE-STRAPI] Fix typo pada config/plugins.js dari v4ComptabilityMode menjadi v4CompatibilityMode.
[BE-STRAPI] Mengubah defaultLimit dari -1 menjadi 25 untuk membatasi jumlah data default yang diambil.
[BE-STRAPI] Mengganti seluruh console.log menjadi strapi.log pada src/index.js dan appconfig.js agar logging mengikuti standar Strapi.
[BE-STRAPI] Update controller class-leader dan lesson-attendance agar menggunakan shared getUserFromToken.
[BE-STRAPI] Menghapus dead files quiz-scoring.js yang hanya berisi commented-out code dan controllers.js yang kosong.
• [FE] Menambahkan tab baru ID Grup WA pada Admin Config untuk bulk management ID grup WhatsApp per kelas.
• [FE] Membuat layout 2 kolom untuk kelas root dan child, dengan input, tombol Simpan, serta aksi hapus yang menyesuaikan status kelas.
• [FE] Menambahkan filter status (default ONGOING), search, dan sorting berdasarkan status kelas.
• [FE] Menambahkan propagasi ID Grup WA — set pada root hanya diteruskan ke child yang masih kosong dan ONGOING, sedangkan clear pada root akan menghapus ID grup seluruh child.
• [FE] Menyembunyikan card kelas yang tidak editable dan tidak memiliki ID grup WhatsApp.
• [FE] Memperbarui workflow n8n — emoji 💬 menjadi 🕒 dan label Kelas menjadi Jam pelajaran.
• [FE] Meningkatkan pageSize dari 100 menjadi 500 untuk pengambilan data kelas.
17 September 2026
mengerjakan project di Hunayn Technologies
18 September 2026
mengerjakan project di Hunayn Technologies
19 September 2026
Libur Kerja (tanggal merah)
20 September 2026
Libur Kerja (tanggal merah)
21 September 2026
mengerjakan project di Hunayn Technologies
22 September 2026
mengerjakan project di Hunayn Technologies
23 September 2026
mengerjakan project di Hunayn Technologies
24 September 2026
mengerjakan project di Hunayn Technologies
25 September 2026
mengerjakan project di Hunayn Technologies
26 September 2026
Libur Kerja (tanggal merah)
27 September 2026
Libur Kerja (tanggal merah)
28 September 2026
[FE] Standarisasi UI admin dan teacher ke ukuran md untuk button, input, search input, pill, dan tab agar konsisten.
[FE] Membuat shared components baru: Button, TextInput, SelectInput, TextareaInput, Field, FormAlert, Avatar, DashboardHeader, ListRow, PageContainer, Panel, RecentActivitySection, dan SegmentedControl.
[FE] Migrasi berbagai halaman admin dan teacher ke shared components, termasuk dashboard, config, finance, analytics, users, courses, class leader, WhatsApp, profile, quiz, books, attendance, grades, syllabus, dan meetings.
[FE] Mengganti raw input pada halaman admin dengan shared TextInput/SelectInput untuk konsistensi styling dan behavior.
[FE] Fix bug navigation active-state dengan prefix matching pada Teacher Sidebar/TopPanel, AppBottomNav, dan BottomNavigation student untuk route nested seperti /teacher/books/*, /courses/*, /profile/*, dan /emaktabah/*.
[FE] Standarisasi styling berbagai modal (ConfirmModal, MapPickerModal, BaseModal) serta memperbaiki dark mode pada MapPicker.
[FE] Fix latent bug pada AttendanceModal dan EditModal dengan menambahkan isOpen ke dependency useEffect.
[FE] Memperbarui berbagai detail UI/UX seperti WhatsApp format hint, label tombol quiz, responsive label Tambah Kitab, dan migrasi form teacher ke shared components.
[FE] Mengubah SegmentedControl menjadi layout flex-1 dan menstandarisasi pill pada Admin/Teacher TopPanel.
[FE] Menghapus shared components yang tidak digunakan: IconButton.tsx, LessonCard.tsx, dan TabBar.tsx.
[FE] Menambahkan dukungan dark mode pada 13 shared modal serta berbagai halaman student, mencakup background, text, border, dan hover states.
[FE] Fix StatCard dynamic flex menggunakan style={{ flex }} karena arbitrary Tailwind class tidak bekerja sesuai kebutuhan.
29 September 2026
mengerjakan project di Hunayn Technologies
30 September 2026
mengerjakan project di Hunayn Technologies
1 Oktober 2026
mengerjakan project di Hunayn Technologies
2 Oktober 2026
mengerjakan project di Hunayn Technologies
3 Oktober 2026
Libur Kerja (tanggal merah)
4 Oktober 2026
Libur Kerja (tanggal merah)
5 Oktober 2026
mengerjakan project di Hunayn Technologies
6 Oktober 2026
mengerjakan project di Hunayn Technologies
7 Oktober 2026
mengerjakan project di Hunayn Technologies
8 Oktober 2026
mengerjakan project di Hunayn Technologies
9 Oktober 2026
mengerjakan project di Hunayn Technologies
10 September 2026
Libur Kerja (tanggal merah)
11 September 2026
Libur Kerja (tanggal merah)
12 Oktober 2026
mengerjakan project di Hunayn Technologies
13 Oktober 2026
mengerjakan project di Hunayn Technologies
14 Oktober 2026
mengerjakan project di Hunayn Technologies
15 Oktober 2026
mengerjakan project di Hunayn Technologies
16 Oktober 2026
mengerjakan project di Hunayn Technologies
17 Oktober 2026
Libur Kerja (tanggal merah)
18 Oktober 2026
Libur Kerja (tanggal merah)
19 Oktober 2026
mengerjakan project di Hunayn Technologies
20 Oktober 2026
-
21 Oktober 2026
-
22 Oktober 2026
-
23 Oktober 2026
-
24 Oktober 2026
Libur Kerja (tanggal merah)
25 Oktober 2026
Libur Kerja (tanggal merah)
26 Oktober 2026
-
================

