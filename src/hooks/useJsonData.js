import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook untuk load data dari file JSON
 * @param {string} jsonPath - Path ke file JSON
 * @returns {object} - { data, loading, error }
 */
export const useJsonData = (jsonPath) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                // Handle both development and production environments
                const fullPath = jsonPath.startsWith('/') ? jsonPath : `/${jsonPath}`;
                const response = await fetch(fullPath);
                if (!response.ok) {
                    throw new Error(`Failed to load data from ${fullPath}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error loading JSON data:', err);
                // Set data to empty object to prevent crashes
                setData({});
            } finally {
                setLoading(false);
            }
        };

        if (jsonPath) {
            loadData();
        }
    }, [jsonPath]);

    return { data, loading, error };
};

/**
 * Hook untuk load multiple JSON files
 * @param {object} jsonPaths - Object dengan key-value pairs untuk JSON paths
 * @returns {object} - { data, loading, error }
 */
export const useMultipleJsonData = (jsonPaths) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const stablePaths = useMemo(() => jsonPaths, [jsonPaths]);

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setLoading(true);
                const promises = Object.entries(jsonPaths).map(async ([key, path]) => {
                    try {
                        // Handle both development and production environments
                        const fullPath = path.startsWith('/') ? path : `/${path}`;
                        const response = await fetch(fullPath);
                        if (!response.ok) {
                            throw new Error(`Failed to load ${key} from ${fullPath}`);
                        }
                        const jsonData = await response.json();
                        return [key, jsonData];
                    } catch (fileError) {
                        console.warn(`Failed to load ${key}, using fallback:`, fileError.message);
                        // Return fallback data for each type
                        const fallbackData = {
                            profile: { name: '', nickName: '', jobTitle: '', bioHome: '', bioAbout: '', startWorkDate: '', cvLink: '', images: {} },
                            contacts: { email: '', whatsapp: '', github: '', gitlab: '', address: '', socialLinks: [] },
                            skills: { skills: [] },
                            experiences: { experiences: [] },
                            projects: { projects: [] },
                            navigation: { menuItems: [], verticalMenuLinks: [] }
                        };
                        return [key, fallbackData[key] || {}];
                    }
                });

                const results = await Promise.all(promises);
                const dataObject = Object.fromEntries(results);
                setData(dataObject);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error loading JSON data:', err);
                // Set fallback data to prevent crashes
                setData({
                    profile: { name: '', nickName: '', jobTitle: '', bioHome: '', bioAbout: '', startWorkDate: '', cvLink: '', images: {} },
                    contacts: { email: '', whatsapp: '', github: '', gitlab: '', address: '', socialLinks: [] },
                    skills: { skills: [] },
                    experiences: { experiences: [] },
                    projects: { projects: [] },
                    navigation: { menuItems: [], verticalMenuLinks: [] }
                });
            } finally {
                setLoading(false);
            }
        };

        if (Object.keys(jsonPaths).length > 0) {
            loadAllData();
        }
    }, [stablePaths]);

    return { data, loading, error };
};