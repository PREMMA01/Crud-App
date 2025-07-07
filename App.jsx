import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", age: "", email: "", phone: "" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = formData;
      setUsers(updatedUsers);
      setEditIndex(null);
    } else {
      setUsers([...users, formData]);
    }
    setFormData({ name: "", age: "", email: "", phone: "" });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      <h2>React CRUD App</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
      <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Add"}</button>

      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(i)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;