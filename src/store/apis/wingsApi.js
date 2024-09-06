import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const wingsApi = createApi({

   reducerPath: 'wings',
   baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006'
   }),
   endpoints(builder){
    return {
      removeWing: builder.mutation({
        invalidatesTags: ['Wing'],
        query: (wing) => {
          return {
            url: `/wings/${wing.id}`,
            method: 'DELETE'
          }
          
        }
      }),
      addWing: builder.mutation({
        invalidatesTags: ['Wing'],
        query: (wing) => {
          return {
            url: '/wings',
            method: 'POST',
            body:{
              name: faker.company.name()
            }
          }
        }
      }),
      fetchWings: builder.query({
        providesTags: ['Wing'],
        query: () => {
           return {
            url: '/wings',
            method: 'GET'
          };
        },
      }),
    };
   },

});

export const { 
  useFetchWingsQuery, 
  useAddWingMutation ,
  useRemoveWingMutation
} = wingsApi;

export { wingsApi };