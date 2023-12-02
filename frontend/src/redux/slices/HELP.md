## COPY THIS TEMPLATE TO ADD A NEW SLICE FOR CONSISTENT CODE FORMAT

```typescript
/* eslint-disable @typescript-eslint/no-unused-vars */

// lib
import {z} from "zod";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// NOTE:
// Replace `sliceName` with name of your slice.
// Replace `SliceNameSlice` with name of your slice type. 
// eg - If slice name is `userSlice` with `userZodSchema` as its zod schema
// then type UserSlice = z.infer<typeof userZodSlice>;

const sliceZodSchema = z.object({});

export type SliceNameSlice = z.infer<typeof sliceZodSchema>;

const initialState: SliceNameSlice = {};

const sliceName = createSlice({
    name: 'slice-name',
    initialState,
    reducers: {
        // reducer functions list here...
        reducerFunction1: (state, { payload }: PayloadAction) => {
            // implement your reducer function here...
        }
    }
});

export const {reducerFunction1} = sliceName.actions;
export const sliceReducer = sliceName.reducer;
```