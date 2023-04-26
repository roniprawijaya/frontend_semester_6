import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincesSlice = createSlice({
    name: "Provinces Slice",
    initialState: {
        provinces: data.provinces,
    },
    reducers: {
        updateProvinces(state, action) {
            
            // let payloadProvinces = action.payload.provinces;
            // const index = state.provinces.findIndex((item) => item.kota === payloadProvinces);
            // const foundProvince = state.provinces.find((item) => item.kota === payloadProvinces);
            
            // state.provinces[index] = {
            //     ...foundProvince,

            //     [state.provinces.status]: parseInt(foundProvince[state.provinces.status]) + parseInt(action.payload.jumlah),
            // }
            // return state;
            state.provinces = action.payload;
        },
    }
})

// generate action dan reducer
const provincesReducer = provincesSlice.reducer;
const { updateProvinces } = provincesSlice.actions;

// export action dan reducer
export default provincesReducer;
export { updateProvinces };