import { useEffect, useState } from 'react';
const URL1 = "https://api.chucknorris.io/jokes/random";
const URL2 = "https://icanhazdadjoke.com/";

export function DisplayJoke() {

    const [joke, setJoke] = useState('Chuck Norris jokes go here');
    const [dadJoke, setDadJoke] = useState('Dad joke goes here');

    function getJoke1() {
        fetch(URL1)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value);
            })
    }

    function getJoke2() {
        var opts = {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        }
        fetch(URL2, opts)
        .then(res => res.json())
        .then(data => {
            setDadJoke(data.joke);
        })
    }

    useEffect(
        () => {
        const interval = setInterval(() => {
            getJoke2()
        }, 10000)
        return () => {
            clearInterval(interval)
        }
        }, []
    )

    return (
        <div>
            <button onClick={getJoke1}>Get Random Joke</button>
            <p>{joke}</p>

            <p>{dadJoke}</p>
        </div>
    )
}