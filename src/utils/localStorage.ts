// localStorage utility functions for persisting data
// All data is stored in localStorage with 'astro_' prefix

import sampleData from '../data/sampleData.json';

const STORAGE_KEYS = {
  UPDATES: 'astro_updates',
  SITE_INFO: 'astro_site_info',
  INITIALIZED: 'astro_initialized',
};

// Initialize localStorage with sample data on first run
export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.INITIALIZED)) {
    localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(sampleData.updates));
    localStorage.setItem(STORAGE_KEYS.SITE_INFO, JSON.stringify(sampleData.site));
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
  }
};

// Site Info
export const getSiteInfo = () => {
  const data = localStorage.getItem(STORAGE_KEYS.SITE_INFO);
  return data ? JSON.parse(data) : sampleData.site;
};

export const updateSiteInfo = (info: any) => {
  localStorage.setItem(STORAGE_KEYS.SITE_INFO, JSON.stringify(info));
};

// Services are now stored in code (src/data/services.ts)
// No localStorage operations needed for services

// Updates CRUD
export const getUpdates = () => {
  const data = localStorage.getItem(STORAGE_KEYS.UPDATES);
  return data ? JSON.parse(data) : sampleData.updates;
};

export const addUpdate = (update: any) => {
  const updates = getUpdates();
  const newUpdate = { ...update, id: Date.now() };
  const updated = [newUpdate, ...updates];
  localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(updated));
  return newUpdate;
};

export const updateUpdate = (id: number, update: any) => {
  const updates = getUpdates();
  const updated = updates.map((u: any) => (u.id === id ? { ...u, ...update } : u));
  localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(updated));
};

export const deleteUpdate = (id: number) => {
  const updates = getUpdates();
  const updated = updates.filter((u: any) => u.id !== id);
  localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(updated));
};

// Horoscopes are now stored in code (src/data/horoscopes.ts)
// No localStorage operations needed for horoscopes

// Export all data as JSON
export const exportData = () => {
  return {
    site: getSiteInfo(),
    updates: getUpdates(),
  };
};

// Import data from JSON
export const importData = (data: any) => {
  if (data.site) localStorage.setItem(STORAGE_KEYS.SITE_INFO, JSON.stringify(data.site));
  if (data.updates) localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(data.updates));
};

// Reset to sample data
export const resetToSampleData = () => {
  localStorage.removeItem(STORAGE_KEYS.INITIALIZED);
  initializeStorage();
};
