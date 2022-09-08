import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SwapiForm } from '../components/swapiForm';
import { Person } from '../models/person';

const formStyle = {
    display: "flex",
    justifyContent: "center"
}

export const PeopleView = () => {
    const { id } = useParams();
    const [ onePerson, setOnePerson ] = useState<Person>(new Person())

    useEffect( () => {
        axios.get("https://swapi.dev/api/people/"+id)
            .then(response => { const newPerson = new Person( 
                    response.data.name,
                    response.data.height,
                    response.data.mass,
                    response.data.hair_color,
                    response.data.skin_color
                );
                setOnePerson(newPerson)
            })
            .catch(errors => console.log( errors));
    }, [id]);

    return(
        <>
        <SwapiForm/>
        <div style={formStyle}>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>{onePerson.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Height: </td>
                    <td>{onePerson.height} cm</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Mass: </td>
                    <td>{onePerson.mass} kg</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Hair Color: </td>
                    <td>{onePerson.hairColor}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Skin Color: </td>
                    <td>{onePerson.skinColor}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}