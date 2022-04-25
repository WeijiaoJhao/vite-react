import useCount from '../store/count'

function Count() {
    const { count, add, less } = useCount()

    const lessMethod = () => {
        less(1)
    }

    const addMethod = () => {
        add(2)
    }

    return (
        <div>
            <h3>Count Page</h3>
            <button onClick={lessMethod}>-</button>
            <span>{count}</span>
            <button onClick={addMethod}>+</button>
        </div>
    )
}

export default Count