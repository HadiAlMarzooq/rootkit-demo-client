import create from 'zustand';

const useSlideStore = create((set) => ({
  slideIndex: 0,
  setSlideIndex: (index) => set({ slideIndex: index }),
}));

export default useSlideStore;
