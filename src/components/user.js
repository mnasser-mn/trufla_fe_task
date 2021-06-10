import UserInterests from './user-interests';
const User = ({ userInfo,deleteUser }) => {
    return <div className="card m-3 p-2">
        <h4 className="card-title d-flex justify-content-between">
            <span>
                {userInfo.name}
            </span>
            <div className="d-flex flex-column" >
                <button type="button" className="btn-close d-block align-self-end m-2" data-bs-toggle="modal" data-bs-target={`#deleteUser${userInfo.id}`} aria-label="Close"
                 data-bs-placement="top" title="delete"
                ></button>
                <span className="badge bg-secondary " >{userInfo.followerCount} followers</span>
            </div>
        </h4>
        {((userInfo.interests) ? (<UserInterests userInterests={userInfo.interests} id={userInfo.id} />) : "")}



        <div className="modal fade" id={`deleteUser${userInfo.id}`} tabIndex="-1" aria-labelledby="deleteUser" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`deleteUser${userInfo.id}`}>Confirm</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to remove {userInfo.name} from the list?
      </div>
                    <div className="modal-footer">
                        <button type="button" className="btn text-white" style={{backgroundColor:'#df8dad'}} data-bs-dismiss="modal"
                        onClick={()=>{
                            deleteUser(userInfo)
                        }}
                        >yes</button>
                        <button type="button" className="btn text-white" style={{backgroundColor:'#84ecd1'}} data-bs-dismiss="modal">no</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default User