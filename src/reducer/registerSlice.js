import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// representasi i ni buat apa
export const fetchRegisterUser = createAsyncThunk(
  "register/registerUser",
  async (userData) => {
    //try catch untun check func bener/salah
    try {
      const response = await fetch("https://reqres.in/api/register", {
        // methode basa on API
        method: "POST",
        // headers => content apa? application/json
        headers: {
          "Content-Type": "application/json",
        },
        // isi body, sesuai API, biasanya JSON string
        body: JSON.stringify(userData),
      });
      // cek response
      if (!response.ok) {
        throw new Error("login fail");
      }
      // response sukses?
      console.log("response oke / berhasil ");
      // nunggu responnya
      const data = await response.json();
      return data;
      // response error
    } catch (error) {
      console.log("error di try catch", error);
      throw error;
    }
  }
);
const registerSlice = createSlice({
  name: "register",
  initialState: {
    response: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.response = action.payload);
      })
      .addCase(fetchRegisterUser.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      });
  },
});
export default registerSlice.reducer;
