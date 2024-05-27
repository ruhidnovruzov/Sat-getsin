import create from 'zustand';

interface StoreState {
  data: any[];
  selectedCategory: string;
  searchTerm: string;
  filteredProducts: any[];
  setData: (data: any[]) => void;
  setSelectedCategory: (category: string) => void;
  setSearchTerm: (term: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  data: [],
  selectedCategory: '',
  searchTerm: '',
  filteredProducts: [],
  setData: (data) => set({ data }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
