import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface FavoriteState {
//   favoriteItems: { id: string }[];
// }

const initialState = {
  favoriteData: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      const existingFav = state.favoriteData.find((item) => item.id === id);
      if (!existingFav) {
        state.favoriteData.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const favoriteIdToRemove = action.payload;
      state.favoriteData = state.favoriteData.filter(
        (item) => item.id !== favoriteIdToRemove
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
