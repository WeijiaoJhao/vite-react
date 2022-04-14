import { useParams } from 'react-router-dom'

function AboutItem() {
    let params = useParams()
    return (
        <h3>AboutItem Page - {params.id}</h3>
    )
}

export default AboutItem