import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const productTypesApi = createApi({

   reducerPath: 'productTypes',
   baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006'
   }),
   endpoints(builder){
    return {
      removeProductType: builder.mutation({
        invalidatesTags: (result, error, productType) => {
          return [{type: 'ProductType', id: productType.id}]
        },
        query: (productType) => {
          return {
            url: `/productTypes/${productType.id}`,
            method: 'DELETE'
          }
        }
      }),
      addProductType: builder.mutation({
        invalidatesTags: (result, error, wing) => {
          return [{type: 'WingProductType', id: wing.id}]
        },
        query: (wing) => {
          return {
            url: '/productTypes',
            method: 'POST',
            body:{
              wingId: wing.id,
              name: faker.commerce.department()
            }
          }
        }
      }),
      fetchProductTypes: builder.query({
        providesTags: (result, error, wing) => {
          const tags = result.map((productType) => {
            return { type: 'ProductType', id: productType.id };
          });
          tags.push({ type: 'WingProductType', id: wing.id });
          return tags;
        },
        query: (wing) => {
           return {
            url: '/productTypes',
            params: {
              wingId: wing.id,
            },
            method: 'GET'
          };
        },
      }),
    };
   },

});

export const { 
  useFetchProductTypesQuery, 
  useAddProductTypeMutation ,
  useRemoveProductTypeMutation
} = productTypesApi;

export { productTypesApi };