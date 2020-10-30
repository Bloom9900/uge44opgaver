import React, { useState } from 'react';

function NameList() {

    const [name, setName] = useState('');
    const [names, setNames] = useState([]);
    const [table, setTable] = useState(getTable);

    function handleChange(event) {
        const value = event.target.value;
        setName(value);
        setTable(getTable);
    }

    function handleSubmit(event) {
        event.preventDefault();
        names.push(name)
        setNames(prevNames => [...prevNames, {
            name: name
        }]);
        setTable(getTable);
    }

    function getList() {
        return names.map((name, index) => <li key={index + 1}>{name}</li>);
    }

    function deletePerson(id) {
        names.splice(id, 1);
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
                        </tr>
                    </thead>
                    <tbody>
                        {names.map((name, index) => (
                            <tr key={index+1}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <button type="submit" onClick={() => deletePerson({index}+1)}>Delete</button>
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