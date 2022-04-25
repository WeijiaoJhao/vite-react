import { Link, Outlet } from 'react-router-dom'
import useList from '../store/list'

function Layout() {
  const list = ['Home', 'About', 'Count', 'List']
  const linkDom = list.map((i, idx) => {
    const isEnd = idx === list.length - 1
    let segment
    if (!isEnd) {
      segment = <span> | </span>
    }
    return (
      <span key={i}>
        <Link to={'/' + i}>{i}</Link>
        {segment}
      </span>
    )
  })

  const { getList, resetList } = useList()
  const callListApi = () => {
    const list = [{ id: 3, name: 'cc' }, { id: 4, name: 'dd' }]
    const page = { total: 4, page: 1, limit: 10 }
    getList({ list, page })
  }

  return (
    <div>
      <h3>Layout Page</h3>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        {linkDom}
      </nav>
      <p></p>
      <button onClick={callListApi}>call list api</button>
      <button onClick={resetList}>reset list</button>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Layout
