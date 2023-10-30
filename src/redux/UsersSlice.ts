import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export type User = {
    id: string,
    name: string
    username: string,
    avatar: string,
    email: string,
    city: string,
    company: string,
    phone: string,
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
    reducers: {
        changeUserStatus: (state, action) => {
            state.users?.map(el => {
                if (el.id === action.payload.id) {
                    el.status = action.payload.status
                }
                return el
            })
        },
        updatePersonalInfo: (state, action) => {
            state.users?.map(el => {
                if (el.id === action.payload.id) {
                    el.name = action.payload.name
                    el.username = action.payload.username
                    el.email = action.payload.email
                    el.city = action.payload.city
                    el.phone = action.payload.phone
                    el.company = action.payload.company
                }
                return el
            })
        }
    },
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
                    id: row.id.toString(),
                    name: row.name,
                    username: row.username,
                    email: row.email,
                    avatar: "https://thispersondoesnotexist.com/",
                    city: row.address.city,
                    company: row.company.name,
                    phone: row.phone,
                    status: 'active'
                }
            }).slice(0, 6))
    }
)

export const { changeUserStatus, updatePersonalInfo } = usersSlice.actions;

export default usersSlice.reducer;