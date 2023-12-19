import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// fetching data todo, fetchToDoById(nama functionnya) fungsinya ngambil data dari API
export const fetchToDoById = createAsyncThunk("todos/fetchToDoById", async (todoId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const data = await response.json(); // response nya ditunggu dan jadi json
  return data;
});

// slice / reducers yaitu tempat naro reducer nyaa
const todosByIdSlice = createSlice({
  //name state
  name: "todosById",
  initialState: {
    // state untuk data todos berupa objek
    todo: {},
    status: "idle",
    error: null,
  },

  // reducer sync
  reducers: {},
  // reducer async
  extraReducers: (builder) => {
    builder // nama param bebas
      // untuk loading, simpan ke state 'status'
      .addCase(fetchToDoById.pending, (state) => {
        // klo datanya pending sblm APi jalan kita rubah menjadi loading
        state.status = "loading ";
      })
      // ini untuk succes, simpan ke state 'status'
      // ini untuk data, simpan ke state 'todo'
      .addCase(fetchToDoById.fulfilled, (state, action) => {
        state.status = "succeeded";
        // supaya di simpan di todo
        state.todo = action.payload; // datanya mengarah ke API
      })
      // ini untuk full, simopan ke state 'status'
      // ini untuk error, simpan ke state 'error'
      .addCase(fetchToDoById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default todosByIdSlice.reducer;
