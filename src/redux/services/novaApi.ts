import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.novaposhta.ua/v2.0/json/";

export const novaPoshtaApi = createApi({
  reducerPath: "novaPoshtaApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchCityList: builder.mutation({
      query: (city) => ({
        url: "",
        method: "POST",
        body: {
          apiKey: "0dcfb85db75a522e01245f48e288396c",
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            FindByString: city,
          },
        },
      }),
    }),
  }),
});

export const { useFetchCityListMutation } = novaPoshtaApi;
