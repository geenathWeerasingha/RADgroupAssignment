import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
        category: "",
        amount: "",
        desc: "",
        premises: "",
        year: "",
        month: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { category, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [category]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { category, desc, premises, amount, year, month } = inpval;

        const res = await fetch('http://localhost:5000/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category, desc, premises, amount, year, month
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            history.push("/")
            setUdata(data)
            console.log("data added");

        }
    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Category</label>
                        <input type="text" value={inpval.category} onChange={setdata} category="category" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Amount</label>
                        <input type="number" value={inpval.amount} onChange={setdata} name="amount" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" value={inpval.desc} onChange={setdata} name="desc" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Year</label>
                        <input type="number" value={inpval.desc} onChange={setdata} name="year" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Month</label>
                        <input type="text" value={inpval.desc} onChange={setdata} name="month" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Premises</label>
                        <input type="text" value={inpval.premises} onChange={setdata} name="premises" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;
