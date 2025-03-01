"use client"; 

import { create } from "zustand";
import axios from "axios";
import { Match } from "../types/match";

const API_URL = "https://app.ftoyd.com/fronttemp-service/fronttemp";

interface MatchStore {
  matches: Match[];
  loading: boolean;
  error: string;
  fetchMatches: () => Promise<void>;
}

export const useMatchStore = create<MatchStore>((set) => ({
  matches: [],
  loading: false,
  error: "",
  fetchMatches: async () => {
    set({ loading: true, error: "" });
    try {
      const response = await axios.get(API_URL);
      set({ matches: response.data.data.matches, loading: false });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: "Ошибка: не удалось загрузить информацию", loading: false });
    }
  },
}));
