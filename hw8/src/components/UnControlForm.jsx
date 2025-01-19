import { useRef, useState } from "react"

export function UncontrolForm () {
    const form = useRef()
    let [error, setError] = useState(false)
    
    const dataSubmit = (e) => {
        e.preventDefault(); 
        console.log(e);
        console.log(form);
        
        const { name, password, repeat, date, age, description, sex } = form.current;

        if(!name.value || !password.value || !repeat.value || !date.value || !age.value || !description.value || !sex.value) {
                    console.log('error');
                    setError(true)
                    return
                }

        console.log(name.value, password.value, repeat.value, date.value, sex.value, age.value, description.value); 
    };
    
    return (
        <div>
            <b>uncontrol form</b>
            <form className="unform" ref = {form}>
                <h3>enter</h3>
                <label htmlFor="name">enter name</label>
                <input className ="p1" placeholder="name" id="name" name="name"/>
                <br/>
                <label htmlFor="password">enter password</label>
                <input className="p1" type="password" placeholder="password" id="password" name="password"/>
                <br/>
                <label htmlFor="repeat">repeat password</label>
                <input className="p1" type="password" placeholder="repeat password" id="repeat" name="repeat"/>
                <h3>registration</h3>
                <label htmlFor="date">date of birth</label>
                <input className="p1" type="date" id="date" name="date"/>
                <br/>

                <div className="d">
                <span>
                    <label htmlFor="sex">select sex</label>
                </span>
                <span className="radio">
                    <input type="radio" id="m" name="sex" value="man"/> <label htmlFor="m">man</label>
                    <input type="radio" id="w" name="sex" value="woman"/> <label htmlFor="w">woman</label>
                </span>
                </div>

                <br/>
                <label htmlFor="age">age</label>
                <input className="p1" type="number" placeholder="age" id="age" name="age"/>
                <br/>
                <label htmlFor="description">description</label>
                <input className="p1" type="text" placeholder="description" id="description" name="description"/>
                <br />
                <input className="p1" type="submit" value="send" onClick={dataSubmit}/>

                <div style={{color: 'red'}}>
                    {error && 'Fill in the input field'}
                </div>
            </form>
        
        </div>   
    )
}