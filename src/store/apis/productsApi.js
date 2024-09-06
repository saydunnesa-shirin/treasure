import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const productsApi = createApi({

   reducerPath: 'products',
   baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006'
   }),
   endpoints(builder){
    return {
      removeProduct: builder.mutation({
        invalidatesTags: (result, error, product) => {
          return [{type: 'Product', id: product.id}]
        },
        
        query: (product) => {
          return {
            url: `/products/${product.id}`,
            method: 'DELETE'
          }
        }
      }),
      addProduct: builder.mutation({
        invalidatesTags: (result, error, productType) => {
          return [{type: 'TypeProduct', id: productType.id}]
        },
        query: (productType) => {
          return {
            url: '/products',
            method: 'POST',
            body:{
              productTypeId: productType.id,
              name: faker.commerce.department(),
              url: faker.image.abstract(150, 150, true),
            }
          }
        }
      }),
      fetchProducts: builder.query({
        providesTags: (result, error, productType) => {
          const tags = result.map((product) => {
            return { type: 'Product', id: product.id };
          });
          tags.push({ type: 'TypeProduct', id: productType.id });
          return tags;
        },
        query: (productType) => {
           return {
            url: '/products',
            params: {
              productTypeId: productType.id,
            },
            method: 'GET'
          };
        },
      }),
    };
   },

});

export const { 
  useFetchProductsQuery, 
  useAddProductMutation ,
  useRemoveProductMutation
} = productsApi;

export { productsApi };