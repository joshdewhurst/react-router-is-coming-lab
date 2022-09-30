import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


export default function Member (props) {
    
    let { id } = useParams()

    const house = props.details.find((house) => (
        house.id.toString() === id
    ))
    
    const member = house.people.find((member) => (
        member.id.toString() === id
    ))

    return (
        <div className="page">
            <div className="header">
                <h2>Specific Member Name</h2>
                {member.name}
            </div>
            <div className="desc">
                A description
                {member.description}
            </div>
        </div>
    )
}