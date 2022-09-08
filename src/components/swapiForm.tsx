import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formStyle = {
    display: "flex",
    justifyContent: "center"
}



export const SwapiForm = () => {
    const navigate = useNavigate();
    const [ searchType, setSearchType ] = useState("people");
    const [ id, setId ] = useState(1);

    const swapiFetch = ( event: FormEvent ) => {
        event.preventDefault();
        navigate("/"+searchType+"/"+id);
    }

    return(
        <div style={formStyle}>
        <form onSubmit={swapiFetch}>
        <table>
            <tbody>
                <tr>
                    <td><label>Search For:</label></td>
                    <td><select onChange={ (event: ChangeEvent<HTMLSelectElement>) => setSearchType(event.target.value)}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select></td>
                </tr>
                <tr>
                    <td><label>ID:</label></td>
                    <td><input type="number" value={id} onChange={ (event: ChangeEvent<HTMLInputElement>) => setId(parseFloat(event.target.value))}/></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Search"/></td>
                </tr>
            </tbody>
        </table>
        </form>
        </div>
    )
}