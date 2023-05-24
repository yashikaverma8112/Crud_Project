
import axios from 'axios';
import React, { useState, useEffect } from "react";

const App= () => {
  //http://localhost:3000/user
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    //  [] =dependency of useEffect
  }, []);
  const handleSubmit = (event) => {
    
    console.log(name, email, password);
    axios.post('http://localhost:3000/users',
      {
        name,
        email,
        password
      })

      .then(response => {
        setUsers([...users, response.data]);
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        console.log(error);
      });

  };
  const handleUpdate = (id, name, email, password) => {


    axios.put(`http://localhost:3000/users/${id}`, {
      name,
      email,
      password

    })
    .then(response => {
      
      const updatedUsers = users.map(user => {
          if (user.id === id) {
            return {

              ...user,
              name: response.data.name,
              email: response.data.email,
              password: response.data.password,
            };
          }
          else {
            return user;
          }
        });
        setUsers(updatedUsers);
        setEditingUserId(null);
        console.log(id,name,email,password);
      })
      .catch(error => {
        console.log(error);
      })

  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(response => {
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.log(error);
      })

  };
  const handleEdit = (id, name, email, password) => {

    setEditingUserId(id);
    setName(name);
    setEmail(email);
    setPassword(password);
  }
 
  
  return (
    <div>
      <marquee style={{ margin:"5px", loop:'4', color:"black", direction:"ltr", width:"100%"}}>USER LOGIN DETAILS</marquee>

      <div>
  



        <table className='table table-bordered table-responsive'>
          <thead className='table-light'>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
             
              <tr key={user.id}>
    

                <td>{user.id}</td>
                <td>{editingUserId === user.id ? (

                  <input
                    type="text"
                    placeholder="Name"
                    value={name}

                    onChange={(event) => setName(event.target.value)}
                  />
                ) : user.name}</td>
                <td>{editingUserId === user.id ? (
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                ) : user.email}</td>
                <td>{editingUserId === user.id ? (

                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                ) : user.password}</td>
                <td>
                  {editingUserId === user.id ? (
                    <>
                    <form onSubmit={(event) => {
          
              handleUpdate(user.id, name, email, password);
              setName('');
              setEmail('');
              setPassword('');
            }}>

                      <button
                        type="submit"
                        className="btn btn-outline-info"
                  
                        
                        >
                        Update
                      </button>
                  
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setEditingUserId(null)}
                        >
                        Cancel
                      </button>
                        </form>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline-success"
                        onClick={() => handleEdit(user.id, user.name, user.email, user.password)}
                         style={{margin:"4px"}}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                  
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

 

 </div>
      <div>
        <form onSubmit={handleSubmit} style={{ marginLeft: "300px", width: "50%", paddingTop: "20px", marginBottom: "20px", paddingLeft: "70px" }} className='row gy-2 gx-3 align-items-center'>
         
          <div className="mb-3 mx-auto p-2  " >
            <label className="col-sm-2 col-form-label ">Name</label>
            <input type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} />
          </div>
          <div className="mb-3 mx-auto p-2 ">
            <label className="col-sm-2 col-form-label  ">Email</label>


            <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="mb-3 mx-auto p-2 ">
            <label className="col-sm-2 col-form-label  ">Password</label>

            <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="mb-3 mx-auto p-2">
            <button className="btn btn-primary " type="submit" style={{ marginLeft: "100px" }} >ADD</button>
          </div>
          
        </form>

      </div>

    </div>
  );
}


export default App;







