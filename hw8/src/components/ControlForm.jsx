import { useRef, useEffect, useState } from "react";

const ENUM_AUTO = {
    BRAND: 'brand',
    YEAR: 'year',
    ENGINE: 'engine',
    CAPACITY: 'capacity'
}

export function ControlForm () {
    const form = useRef()
    const [auto, setAuto] = useState({isSubmitted: false})
    
    const dataSubmit = (e) => {
        setAuto({...auto, isSubmitted: true})
        e.preventDefault(); 
        console.log(e);
        console.log(form);
        
        const {brand, year, engine, capacity} = form.current;
        console.log(brand.value, year.value, engine.value, capacity.value);
    };

    useEffect(() => {
        // console.log(auto);   
    })

    const setEngine = ({target: {value}}) => {
        setAuto({...auto,engine: value})
    }

    const changeAuto = (filed, value) => {
        setAuto({...auto,[filed]:value})
    }

    const validationSubmit = () => {
        return !(auto.brand && auto.year && auto.engine && auto.capacity )
    }

    return (
        <div>
            <b>control form</b>

            <form className="p3" ref={form}>
        <label htmlFor="brand">car brand</label>
        <input 
            className="auto" 
            placeholder="brand" 
            id="brand" 
            name="brand" 
            onChange={(e) => changeAuto(ENUM_AUTO.BRAND,e.target.value)}
        />
            <div style={{color: 'red'}}>
                {auto.isSubmitted && auto.brand.length < 3 && 'Brand must be at least 3 characters long.'}
            </div>
        <br/>
        <label htmlFor="year">year of manufacture of the car</label>
        <input 
            className="auto" 
            placeholder="year" 
            id="year" 
            name="year" 
            onChange={(e) => changeAuto(ENUM_AUTO.YEAR,e.target.value)}
        />
            <div style={{color: 'red'}}>
                {auto.isSubmitted && auto.year.length !== 4  && 'Year must be 4 characters long.'}
            </div>
        <br/>

        <div className="aut">
            <label htmlFor="engine">engine's type</label>

        <select id="engine" onChange={setEngine}>
            <option value= ''> </option>
            <option value="gas engine">gas engine</option>
            <option value="diesel engine">diesel engine</option>
            <option value="electric car">electric car</option>
        </select>
        </div>
            <div style={{color: 'red'}}>
                {auto.isSubmitted && auto.engine.length == '0' && 'Select engine type'}
            </div>
        <br/>
        <label htmlFor="capacity">engine capacity</label>
        <input 
            className="auto" 
            placeholder="capacity" 
            id="capacity" 
            name="capacity" 
            onChange={(e) => changeAuto(ENUM_AUTO.CAPACITY,e.target.value)}
        />
            <div style={{color: 'red'}}>
                {auto.isSubmitted && auto.capacity.length !== 4  && 'Capasity must be 4 characters long.'}
            </div>
        <br/>
        <input className="auto" type="submit" value="send" onClick={dataSubmit} disabled = {validationSubmit()}/>
    </form>
    
        </div>
    )
}




