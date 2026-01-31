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

    const stablePaths = useMemo(() => jsonPaths, []);

    useEffect(() => {
        const loadAllData = async () => {
            console.log('🔄 Loading data...');
            try {
                setLoading(true);

                const promises = Object.entries(stablePaths).map(async ([key, path]) => {
                    const fullPath = path.startsWith('/') ? path : `/${path}`;
                    const response = await fetch(fullPath);

                    if (!response.ok) {
                        throw new Error(`Failed to load ${key} from ${fullPath}`);
                    }

                    const jsonData = await response.json();
                    return [key, jsonData];
                });

                const results = await Promise.all(promises);
                setData(Object.fromEntries(results));
                setError(null);
                console.log('✅ Data loaded successfully');
            } catch (err) {
                setError(err.message);
                console.error('❌ Error loading data:', err);
            } finally {
                setLoading(false);
            }
        };

        if (Object.keys(stablePaths).length > 0) {
            loadAllData();
        }
    }, [stablePaths]);

    return { data, loading, error };
};