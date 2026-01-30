import moment from 'moment';

/**
 * Menghitung total pengalaman kerja dari tanggal mulai
 * @param {string} startDate - Tanggal mulai kerja format DD-MM-YYYY
 * @returns {object} - { tahun, bulan, formatted }
 */
export const calculateExperience = (startDate) => {
    const mulaiKerja = moment(startDate, 'DD-MM-YYYY');
    const sekarang = moment();

    const selisihTahun = sekarang.diff(mulaiKerja, 'years');
    mulaiKerja.add(selisihTahun, 'years');
    const selisihBulan = sekarang.diff(mulaiKerja, 'months');

    const formatted = `${selisihTahun} year${selisihTahun > 1 ? 's' : ''} and ${selisihBulan} month${selisihBulan > 1 ? 's' : ''}`;

    return {
        tahun: selisihTahun,
        bulan: selisihBulan,
        formatted
    };
};

/**
 * Replace placeholders dalam string dengan values
 * @param {string} text - Text dengan placeholders {key}
 * @param {object} values - Object dengan key-value untuk replace
 * @returns {string} - Text dengan placeholders diganti
 */
export const replacePlaceholders = (text, values) => {
    if (!text || !values) return text;

    let result = text;
    Object.entries(values).forEach(([key, value]) => {
        const placeholder = `{${key}}`;
        result = result.replace(new RegExp(placeholder, 'g'), value);
    });

    return result;
};

/**
 * Get icon component berdasarkan nama icon string
 * @param {string} iconName - Nama icon dari react-icons
 * @param {object} icons - Object berisi import icons
 * @returns {JSX.Element} - Icon component
 */
export const getIconComponent = (iconName, icons) => {
    return icons[iconName] || null;
};