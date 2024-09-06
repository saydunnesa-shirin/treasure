import { configureStore } from "@reduxjs/toolkit";  
import { setupListeners } from "@reduxjs/toolkit/query";

import { wingsApi } from "./apis/wingsApi"; 
import { productTypesApi } from "./apis/productTypesApi"; 
import { productsApi } from "./apis/productsApi"; 

export const store = configureStore({
  reducer: {
    [wingsApi.reducerPath]: wingsApi.reducer,
    [productTypesApi.reducerPath]: productTypesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare()
      .concat(wingsApi.middleware)
      .concat(productTypesApi.middleware)
      .concat(productsApi.middleware);
  }
});

setupListeners(store.dispatch);

export { 
  useFetchWingsQuery, 
  useAddWingMutation,
  useRemoveWingMutation 
} from './apis/wingsApi';

export { 
  useFetchProductTypesQuery, 
  useAddProductTypeMutation,
  useRemoveProductTypeMutation 
} from './apis/productTypesApi';

export { 
  useFetchProductsQuery, 
  useAddProductMutation,
  useRemoveProductMutation 
} from './apis/productsApi';