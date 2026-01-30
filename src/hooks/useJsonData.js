import { useState, useEffect } from 'react';

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
                const response = await fetch(jsonPath);
                if (!response.ok) {
                    throw new Error(`Failed to load data from ${jsonPath}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error loading JSON data:', err);
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

    useEffect(() => {
        const loadAllData = async () => {
            try {
                setLoading(true);
                const promises = Object.entries(jsonPaths).map(async ([key, path]) => {
                    const response = await fetch(path);
                    if (!response.ok) {
                        throw new Error(`Failed to load ${key} from ${path}`);
                    }
                    const jsonData = await response.json();
                    return [key, jsonData];
                });

                const results = await Promise.all(promises);
                const dataObject = Object.fromEntries(results);
                setData(dataObject);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error loading JSON data:', err);
            } finally {
                setLoading(false);
            }
        };

        if (Object.keys(jsonPaths).length > 0) {
            loadAllData();
        }
    }, [JSON.stringify(jsonPaths)]);

    return { data, loading, error };
};