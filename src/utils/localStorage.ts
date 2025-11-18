// localStorage utility functions for persisting data
// All data is stored in localStorage with 'astro_' prefix

import sampleData from '../data/sampleData.json';

const STORAGE_KEYS = {
  SERVICES: 'astro_services',
  UPDATES: 'astro_updates',
  HOROSCOPES: 'astro_horoscopes',
  SITE_INFO: 'astro_site_info',
  INITIALIZED: 'astro_initialized',
};

// Initialize localStorage with sample data on first run
export const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.INITIALIZED)) {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(sampleData.services));
    localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(sampleData.updates));
    localStorage.setItem(STORAGE_KEYS.HOROSCOPES, JSON.stringify(sampleData.horoscopes));
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

// Services CRUD
export const getServices = () => {
  const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
  return data ? JSON.parse(data) : sampleData.services;
};

export const addService = (service: any) => {
  const services = getServices();
  const newService = { ...service, id: Date.now() };
  const updated = [...services, newService];
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
  return newService;
};

export const updateService = (id: number, service: any) => {
  const services = getServices();
  const updated = services.map((s: any) => (s.id === id ? { ...s, ...service } : s));
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
};

export const deleteService = (id: number) => {
  const services = getServices();
  const updated = services.filter((s: any) => s.id !== id);
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(updated));
};

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

// Horoscopes CRUD
export const getHoroscopes = () => {
  const data = localStorage.getItem(STORAGE_KEYS.HOROSCOPES);
  return data ? JSON.parse(data) : sampleData.horoscopes;
};

export const addHoroscope = (horoscope: any) => {
  const horoscopes = getHoroscopes();
  const newHoroscope = { ...horoscope, id: Date.now() };
  const updated = [...horoscopes, newHoroscope];
  localStorage.setItem(STORAGE_KEYS.HOROSCOPES, JSON.stringify(updated));
  return newHoroscope;
};

export const updateHoroscope = (id: number, horoscope: any) => {
  const horoscopes = getHoroscopes();
  const updated = horoscopes.map((h: any) => (h.id === id ? { ...h, ...horoscope } : h));
  localStorage.setItem(STORAGE_KEYS.HOROSCOPES, JSON.stringify(updated));
};

export const deleteHoroscope = (id: number) => {
  const horoscopes = getHoroscopes();
  const updated = horoscopes.filter((h: any) => h.id !== id);
  localStorage.setItem(STORAGE_KEYS.HOROSCOPES, JSON.stringify(updated));
};

// Export all data as JSON
export const exportData = () => {
  return {
    site: getSiteInfo(),
    services: getServices(),
    updates: getUpdates(),
    horoscopes: getHoroscopes(),
  };
};

// Import data from JSON
export const importData = (data: any) => {
  if (data.site) localStorage.setItem(STORAGE_KEYS.SITE_INFO, JSON.stringify(data.site));
  if (data.services) localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(data.services));
  if (data.updates) localStorage.setItem(STORAGE_KEYS.UPDATES, JSON.stringify(data.updates));
  if (data.horoscopes) localStorage.setItem(STORAGE_KEYS.HOROSCOPES, JSON.stringify(data.horoscopes));
};

// Reset to sample data
export const resetToSampleData = () => {
  localStorage.removeItem(STORAGE_KEYS.INITIALIZED);
  initializeStorage();
};
