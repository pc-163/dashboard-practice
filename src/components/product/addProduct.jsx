import { useState, useEffect } from "react";

const AddProduct = () => {
    const [productName, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setuserId] = useState('');
    const [company, setCompany] = useState('');

    const dataSubmit = async (e) => {
        e.preventDefault();
        if (productName && price && category && userId && company != 0) {
            try {
                const response = await fetch("http://localhost:1234/add-product", {
                    method: "POST",
                    body: JSON.stringify({ productName, price, category, userId, company }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const productResult = await response.json();
                //localStorage.setItem("usersignup", JSON.stringify(productResult));
                //navigate("/");

            } catch {
                console.error("Error");
            }
            setName('');
            setPrice('');
            setCategory('');
            setuserId('');
            setCompany('');
            
        } else {
            alert("Add Product Details");
        }


    }
    return (
        <>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-center mt-5 mb-5 pb-5 text-gray-900 md:text-4xl lg:text-4xl dark:text-white">Add New Product Here</h1>
            <form className="max-w-md mx-auto">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={productName} onChange={e => setName(e.target.value)} id="floating_product_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_product_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} id="floating_price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} id="floating_category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={userId} onChange={e => setuserId(e.target.value)} id="floating_id" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">SKU</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" value={company} onChange={e => setCompany(e.target.value)} id="floating_brand_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_brand_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand Name</label>
                </div>
                <button type="submit" onClick={dataSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>
        </>
    )
}

export default AddProduct