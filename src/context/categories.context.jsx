import { createContext, useState, useEffect } from 'react';
///////////////////////////////////////////
//fill the FIREBASE
// import SHOP_DATA from '../shop-data.js';
///////////////////////////////////////////
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export function CategoriesProvider({ children }) {
  const [categoriesMap, setCategoriesMap] = useState([{}]);
  ///////////////////////////////////////////
  //fill the FIREBASE
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // },[])
  ///////////////////////////////////////////

  useEffect(()=>{
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, [])
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
