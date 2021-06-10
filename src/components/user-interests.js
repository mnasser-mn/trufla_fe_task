import { useState } from "react"

const UserInterests = ({ userInterests, id }) => {

    const [interests, setInterests] = useState(userInterests)
    const renderList = (userInterests) => {
        return userInterests.map((item) => (
            <li key={item.id} className="d-flex justify-content-between col-12 col-md-6 m-2 p-2">{item.name}
                <button className="btn btn-outline"
                    onClick={() => {
                        setInterests((list) => {
                            let index = list.indexOf(item)
                            list.splice(index, 1)
                            return [...list]
                        })
                    }}
                >
                    Delete
            </button>
            </li>
        ))
    }
    return (
        <div>
            <a className="btn text-white m-2" style={{backgroundColor:'#32aedb'}}  data-bs-toggle="collapse" href={`#interests${id}`} role="button" aria-expanded="false" aria-controls="collapseExample">Interests</a>
            <ul className="collapse" id={`interests${id}`}>
                {renderList(interests)}
            </ul>
        </div>)
}
export default UserInterests;