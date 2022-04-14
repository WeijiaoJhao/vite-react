import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goPage = (page) => {
        navigate(page)
    }

    return (
        <div>
            <h3>Home Page</h3>
            <button type="button" onClick={() => goPage('/About/123')}>go about item</button>
            <button type="button" onClick={() => goPage('/Login')}>go login</button>
        </div>
    )
}
    
export default Home