
import { useState, useEffect } from 'react';
import { PortfolioData } from '../types';
import { INITIAL_PORTFOLIO_DATA } from '../constants';

const DATA_KEY = 'portfolioData';

// A simple merge function to ensure new fields are added from the default
// This prevents the app from crashing if the localStorage data is outdated.
const mergeWithDefault = (loadedData: any): PortfolioData => {
  const merged = { ...INITIAL_PORTFOLIO_DATA, ...loadedData };
  
  // Deep merge for nested objects to ensure all keys are present
  merged.contact = { ...INITIAL_PORTFOLIO_DATA.contact, ...(loadedData.contact || {}) };
  
  // Ensure all default social links are present if not in loaded data
  const loadedLinkNames = new Set((loadedData.socialLinks || []).map((l: any) => l.name));
  INITIAL_PORTFOLIO_DATA.socialLinks.forEach(defaultLink => {
    if (!loadedLinkNames.has(defaultLink.name)) {
      if (!merged.socialLinks) merged.socialLinks = [];
      merged.socialLinks.push(defaultLink);
    }
  });

  // Ensure projects have new fields like tags and mediaType
  merged.projects = (loadedData.projects || []).map((p: any) => ({
    tags: [],
    mediaType: 'image',
    ...p
  }));

  return merged;
};

const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem(DATA_KEY);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setPortfolioData(mergeWithDefault(parsedData));
      } else {
        localStorage.setItem(DATA_KEY, JSON.stringify(INITIAL_PORTFOLIO_DATA));
        setPortfolioData(INITIAL_PORTFOLIO_DATA);
      }
    } catch (error) {
      console.error("Failed to load or parse portfolio data from localStorage", error);
      setPortfolioData(INITIAL_PORTFOLIO_DATA);
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePortfolioData = (newData: PortfolioData) => {
    try {
      localStorage.setItem(DATA_KEY, JSON.stringify(newData));
      setPortfolioData(newData);
    } catch (error) {
      console.error("Failed to save portfolio data to localStorage", error);
    }
  };

  return { portfolioData, setPortfolioData: updatePortfolioData, loading };
};

export default usePortfolioData;