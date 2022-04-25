import useList from '../store/list'

function List() {
    const { list, page, getList } = useList()

    const listDom = list.map(i =>
        <li key={i.id}>{i.id} - {i.name }</li>
    )

    const pageKey = Object.keys(page)
    const pageDom = pageKey.map((k, idx) => {
        const isEnd = idx === pageKey.length -1
        let comma
        if (!isEnd) {
            comma = <span> , </span>
        }
        return (
            <span key={k}>
                {k}：{page[k]}
                {comma}
            </span>
        )
    })

    const callListApi = () => {
        const list = [{ id: 1, name: 'aa' }, { id: 2, name: 'bb' }]
        const page = { total: 2, page: 1, limit: 10 }
        getList({ list, page })
    }

    return (
        <div>
            <h3>List Page</h3>
            <ul>{listDom}</ul>
            <div>{pageDom}</div>
            <button onClick={callListApi}>list api</button>
        </div>
    )
}

export default List