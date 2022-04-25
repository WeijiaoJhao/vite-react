import create from 'zustand'

const useCount = create(set => ({
  count: 0,
  add: (num) => set(state => ({ count: state.count + num })),
  less: (num) => set(state => ({ count: state.count - num }))
}))

export default useCount
