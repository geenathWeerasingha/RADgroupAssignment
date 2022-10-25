import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useHistory } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const history = useHistory("");

    const [inpval, setINP] = useState({
        category: "",
        brand: "",
        model: "",
        weight: "",
        quantity: "",
        price: "",
        desc: ""
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:5000/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const { category, brand, model, weight, quantity, price, desc } = inpval;

        const res2 = await fetch(`http://localhost:5000/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                category, brand, model, weight, quantity, price, desc 
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history.push("/")
            setUPdata(data2);
        }

    }

    return (
        <div classcategory="container">
            <NavLink to="/">home2</NavLink>
            <form classcategory="mt-4">
                <div classcategory="row">
                <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputbrand1" class="form-label">category</label>
                        <input type="text" value={inpval.category} onChange={setdata} category="category" class="form-control" id="exampleInputbrand1" aria-describedby="brandHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">brand</label>
                        <input type="text" value={inpval.brand} onChange={setdata} category="brand" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">model</label>
                        <input type="text" value={inpval.model} onChange={setdata} category="model" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">weight</label>
                        <input type="number" value={inpval.weight} onChange={setdata} category="weight" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">quantity</label>
                        <input type="number" value={inpval.quantity} onChange={setdata} category="quantity" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">priceress</label>
                        <input type="number" value={inpval.price} onChange={setdata} category="price" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea category="desc" value={inpval.desc} onChange={setdata} classcategory="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





