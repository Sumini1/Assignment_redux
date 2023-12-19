import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetching data todo, fetchToDo(nama functionnya) fungsinya ngambil data dari API
export const fetchToDo = createAsyncThunk("todos/fetchToDo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json(); // response nya ditunggu dan jadi json
  return data;
});

// slice / reducers yaitu tempat naro reducer nyaa
const todosSlice = createSlice({
  //name statee
  name: "todos",
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
    .addCase(fetchToDo.pending, (state) => { // klo datanya pending sblm APi jalan kita rubah menjadi loading
        state.status = 'loading ';
    })
    // ini untuk succes, simpan ke state 'status'
    // ini untuk data, simpan ke state 'todo'
    .addCase(fetchToDo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // supaya di simpan di todo
        state.todo = action.payload; // datanya mengarah ke API
    })
    // ini untuk full, simopan ke state 'status'
    // ini untuk error, simpan ke state 'error'
    .addCase(fetchToDo.rejected, (state, action)=> {
        state.status= 'failed';
        state.error = action.error.message;
    })
  }
});
export default todosSlice.reducer;
