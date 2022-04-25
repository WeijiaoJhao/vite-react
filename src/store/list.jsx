import create from 'zustand'

const useList = create(set => ({
  list: [],
  page: {},
  getList: async (array) => {
    // demo
    const res = await fetch('/aa').then(x => new Promise(resolve => setTimeout(() => resolve(array), 1000)))
    const { list, page } = res
    // set(state => ({ list }))
    set(state => ({ list: [...state.list, ...list] }))
    set(state => ({ page }))
  },
  resetList: () => set(state => ({ list: [], page: {} }))
}))

export default useList
