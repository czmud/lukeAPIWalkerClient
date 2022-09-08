import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { SwapiForm } from '../components/swapiForm';
import { Planet } from '../models/planet';

const formStyle = {
    display: "flex",
    justifyContent: "center"
}


export const PlanetView = () => {
    const { id } = useParams();
    const [ onePlanet, setOnePlanet ] = useState<Planet>(new Planet())

    useEffect( () => {
        axios.get("https://swapi.dev/api/planets/"+id)
            .then(response => { const newPlanet = new Planet( 
                    response.data.name,
                    response.data.climate,
                    response.data.terrain,
                    response.data.surface_water,
                    response.data.population
                );
                setOnePlanet(newPlanet)
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
                    <th>{onePlanet.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Climate: </td>
                    <td>{onePlanet.climate}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Terrain: </td>
                    <td>{onePlanet.terrain}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Surface Water: </td>
                    <td>{onePlanet.surfaceWater}</td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Population: </td>
                    <td>{onePlanet.population}</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}