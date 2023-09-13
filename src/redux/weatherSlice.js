import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status"
import axios from "axios";

const initialState = {
    weather: [],
    weatherStatus: STATUS.IDLE,
}

export const getWeather = createAsyncThunk('weather', async (searchedWord) => {
    const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=${searchedWord}&days=7&aqi=yes&alerts=yes`)
    const data = await res.data;
    return data;
})

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state, action) => {
                state.weatherStatus = STATUS.LOADING
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.weatherStatus = STATUS.SUCCESS,
                    state.weather = action.payload
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.weatherStatus = STATUS.FAIL
            })
    }
})

export default weatherSlice.reducer