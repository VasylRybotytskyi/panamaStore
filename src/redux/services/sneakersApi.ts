import { db } from "../../firebase/firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

export const sneakersApi = createApi({
  reducerPath: "sneakers",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      async queryFn() {
        try {
          const sneakersRef = collection(db, "sneakers");
          const querySnapshot = await getDocs(sneakersRef);
          let sneakers = [];
          querySnapshot.forEach((doc) => {
            sneakers.push({ id: doc.id, ...doc.data() });
          });
          return { data: sneakers };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
    fetchSingleSneaker: builder.query({
      async queryFn(id: string) {
        try {
          const docRef = doc(db, "sneakers", id);
          const docSnapshot = await getDoc(docRef);
          return { data: { id: docSnapshot.id, ...docSnapshot.data() } };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
    // querySneaker: builder.query({
    //   async queryFn({ q, brand, category, minPrice, maxPrice }) {
    //     try {
    //       let sneakersRef = collection(db, "sneakers");

    //       // Створюємо масив умов для фільтрації
    //       let conditions = [];

    //       // Додаємо умову для бренду, якщо він не порожній
    //       if (brand !== "") {
    //         conditions.push(where("brand", "==", brand));
    //       }

    //       // Додаємо умову для категорії, якщо вона не порожня
    //       if (category !== "") {
    //         conditions.push(where("category", "==", category));
    //       }

    //       // Додаємо умову для ціни, якщо maxPrice встановлено
    //       if (minPrice !== null) {
    //         conditions.push(where("price", ">=", minPrice));
    //       }

    //       if (maxPrice !== null) {
    //         conditions.push(where("price", "<=", maxPrice));
    //       }

    //       // Якщо є які-небудь умови, використовуємо їх для фільтрації
    //       if (conditions.length > 0) {
    //         sneakersRef = query(sneakersRef, ...conditions);
    //       }

    //       const querySnapshot = await getDocs(sneakersRef);

    //       let sneakers = [];
    //       const searchTerm = q.toLowerCase();
    //       querySnapshot.forEach((doc) => {
    //         const name = doc.data().name.toLowerCase();
    //         if (name.startsWith(searchTerm)) {
    //           sneakers.push({ id: doc.id, ...doc.data() });
    //         }
    //       });
    //       console.log("Filtered sneakers:", sneakers.length); // Вивід кількості елементів після фільтрації

    //       return { data: sneakers };
    //     } catch (error) {
    //       return { error };
    //     }
    //   },
    //   providesTags: ["Post"],
    // }),
    querySneaker: builder.query({
      async queryFn({ q, brand, category, price, size }) {
        try {
          let sneakersRef = collection(db, "sneakers");

          // Створюємо масив умов для фільтрації
          let conditions = [];

          // Додаємо умову для бренду, якщо він не порожній масив
          if (Array.isArray(brand) && brand.length > 0) {
            conditions.push(where("brand", "in", brand));
          }

          // Додаємо умову для категорії, якщо вона не порожня
          if (Array.isArray(category) && category.length > 0) {
            conditions.push(where("category", "in", category));
          }

          // Додаємо умову для ціни, якщо вона передана як масив і містить два елементи
          if (Array.isArray(price) && price.length === 2) {
            conditions.push(where("price", ">=", price[0]));
            conditions.push(where("price", "<=", price[1]));
          }

          if (Array.isArray(size) && size.length > 0) {
            conditions.push(where("sizes", "array-contains-any", size));
          }

          // Якщо є які-небудь умови, використовуємо їх для фільтрації
          if (conditions.length > 0) {
            sneakersRef = query(sneakersRef, ...conditions);
          }

          const querySnapshot = await getDocs(sneakersRef);

          let sneakers = [];
          const searchTerm = q?.toLowerCase();
          querySnapshot.forEach((doc) => {
            const name = doc.data().name.toLowerCase();
            if (name.startsWith(searchTerm)) {
              sneakers.push({ id: doc.id, ...doc.data() });
            }
          });
          console.log("Filtered sneakers:", sneakers.length); // Вивід кількості елементів після фільтрації

          return { data: sneakers };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchSingleSneakerQuery,
  useQuerySneakerQuery,
} = sneakersApi;
