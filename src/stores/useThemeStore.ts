import { create } from 'zustand';

interface ThemeStore {
  theme: 'midnight' | 'obsidian';
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'midnight',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'midnight' ? 'obsidian' : 'midnight',
    })),
}));
