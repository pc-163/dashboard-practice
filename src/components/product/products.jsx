import { useState, useEffect } from "react";
import Image from "../../assets/car1.jpg";
import { Link } from "react-router-dom";
import {
    TextInput, Label
} from 'flowbite-react';

const Products = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        callApi();
    }, [])

    const callApi = async () => {
        let api = await fetch('http://localhost:1234/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        api = await api.json();
        if (api) {
            setProduct(api);
        } else {
            console.log("Product Not Found");
        }
    }

    const deleteProduct = async (id) => {
        let api = await fetch(`http://localhost:1234/product/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        api = await api.json();
        if (api) {
            callApi();
        }
    }

    const searchHandle = async (event) => {

        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:1234/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProduct(result);
            }
        } else {
            callApi();
        }

    }
    return (
        <>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-center mt-5 mb-5 pb-5 text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Products</h1>
            <div className="max-w-screen-xl mx-auto">
                <div className="pb-10 w-2/5 mx-auto">
                    <TextInput id="input-info" placeholder="Search......" onChange={searchHandle} color="info" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {
                        product.length > 0 ? product.map((item) => (
                            <div key={item._id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg" src={Image} alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-bold pt-4 tracking-tight text-gray-900 dark:text-white">{item.productName}</h5>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.category}</h5>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.company}</h5>
                                    <div className="flex items-center justify-between">
                                        <span className="text-1xl text-gray-900 dark:text-white">{item.userId}</span>
                                        <span onClick={() => deleteProduct(item._id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</span>
                                        <Link to={`/update/${item._id}`} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</Link>
                                    </div>
                                    <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{item.price}</span>

                                </div>
                            </div>
                        ))
                            : <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-center mt-5 mb-5 pb-5 text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Product Not Found</h1>

                    }
                </div>
            </div>
        </>
    )
}

export default Products