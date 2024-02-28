import useFetchData from "./useFetchData";

function Users() {
    const {data} = useFetchData("https://api.github.com/users");

    return (
        <div>
            {data &&  (
                data.map((users) => (
                    <div className='text-black' key={users.id}>
                        <h1>{users.login} | {users.type}</h1>
                        
                    </div>
                ))
            )}                

        </div>
    )
}

export default Users;