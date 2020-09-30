import FetchData from '../../contexts/FetctData';
import { fetchAPI } from '../components/utils/api';
import { useState } from 'react';

const data = {};
data.getServices = await fetchAPI('services');
data.getAbout = await fetchAPI('about');

function ContextWrapper({ children, data }) {
  const [fetchedData] = useState(data);

  return (
    <FetchData.Provider value={{ fetchedData }}>{children}</FetchData.Provider>
  );
}
