import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type User = {
    id: number,
    username: string,
    avatar: string,
    city: string,
    company: string,
    status: 'active' | 'archive' | 'hidden'
}

export interface UsersState {
    users?: User[];
    status: 'idle' | 'loading' | 'failed' | 'loaded';
    error: string | null;
}

const initialState: UsersState = {
    status: 'idle',
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'loaded'
            state.users = action.payload
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = "Ошибка загрузки"
        })
    }
});

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => data.map((row: any) => {
                return {
                    id: row.id,
                    username: row.username,
                    avatar: "https://thispersondoesnotexist.com/",
                    city: row.address.city,
                    company: row.company.name,
                    status: 'active'
                }
            }).slice(0, 6))
    }
)
export default usersSlice.reducer;