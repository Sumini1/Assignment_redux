import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// representasi i ni buat apa
export const fetchLoginUser = createAsyncThunk(
  "login/loginUser",
  async (userData) => {
    //try catch untun check func bener/salah
    try {
      const response = await fetch("https://reqres.in/api/login", {
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
        throw new Error("login gagal");
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

const loginSlice = createSlice({
  name: "login",
  initialState: {
    response: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginUser.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.response = action.payload;
        Swal.fire({
          icon: "succeeded",
          title: "Login Berhasil",
        });
      })

      .addCase(fetchLoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        Swal.fire({
          icon: "error",
          title: "Periksa kembali email anda",
          text: action.error.message,
        });
      });
  },
});
export default loginSlice.reducer;
