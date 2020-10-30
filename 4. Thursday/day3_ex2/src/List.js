import React, { useState } from 'react';

function NameList() {

    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [table, setTable] = useState(getTable);
    const [newName, setNewName] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        setName(value);
        setTable(getTable);
    }

    function handleSubmit(event) {
        event.preventDefault();
        names.push(name);
        setTable(getTable);
    }

    function getList() {
        return names.map((name, index) => <li key={index + 1}>{name}</li>);
    }

    function deletePerson(id) {
        names.splice(id, 1);
        setTable(getTable);
    }

    function editName(id) {
        names.splice(id, 1, newName);
        setTable(getTable); 
    }

    function editChange(event) {
        event.preventDefault();
        const value = event.target.value;
        setNewName(value);
        setTable(getTable);
    }

    function getTable() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index +1}>
                                <td>{index +1}</td>
                                <td>{name}</td>
                                <td><button type="submit" onClick={() => deletePerson(index)}>Delete</button></td>
                                <td><button type="submit" onClick={() => editName(index)}>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>            
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
            <form onSubmit={editChange}>
                <input type="text" placeholder="New Name" onChange={editChange} />
                <button type="submit">Save Name Edit</button>
            </form>

            {table}
        </div>
    )
}

export default function FormNames() {
    return (
        <div style={{ marginLeft: 25, marginTop: 25 }}>
            <NameList />
        </div>
    )
}