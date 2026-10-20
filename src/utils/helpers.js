/**
 * Menghitung total pengalaman kerja dari tanggal mulai (DD-MM-YYYY).
 * @param {string} startDate
 * @returns {{tahun: number, bulan: number, formatted: string, formattedId: string}}
 */
export const calculateExperience = (startDate) => {
  const empty = {
    tahun: 0,
    bulan: 0,
    formatted: "0 years",
    formattedId: "0 tahun",
  };
  if (!startDate) return empty;

  const [day, month, year] = startDate.split("-").map(Number);
  if (!day || !month || !year) return empty;

  const start = new Date(year, month - 1, day);
  const now = new Date();

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) totalMonths -= 1;
  totalMonths = Math.max(0, totalMonths);

  const tahun = Math.floor(totalMonths / 12);
  const bulan = totalMonths % 12;

  return {
    tahun,
    bulan,
    formatted: `${tahun} year${tahun === 1 ? "" : "s"} and ${bulan} month${
      bulan === 1 ? "" : "s"
    }`,
    formattedId: `${tahun} tahun ${bulan} bulan`,
  };
};

/**
 * Replace placeholder {key} di dalam string.
 * @param {string} text
 * @param {Record<string, string>} values
 * @returns {string}
 */
export const replacePlaceholders = (text, values) => {
  if (!text || !values) return text;

  return Object.entries(values).reduce((result, [key, value]) => {
    return result.split(`{${key}}`).join(value);
  }, text);
};

/**
 * Membuat slug sederhana untuk kebutuhan key/filter.
 * @param {string} value
 * @returns {string}
 */
export const slugify = (value = "") =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
