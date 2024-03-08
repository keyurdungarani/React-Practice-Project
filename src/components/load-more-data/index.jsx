import { useEffect, useState } from "react"
import './style.css';

export default function LoadMoreData() {

    const [loader, setLoader] = useState(false);
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchProducts() {
        try {
            setLoader(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            setLoader(false)
            if (data && data.products) {
                setProducts((prevProduct) => {
                    // console.log("🤡 ~ file: index.jsx:23 ~ fetchProducts ~ prevProduct:", prevProduct);
                    return [...prevProduct, ...data.products];
                });
                // console.log(data.products)
                // console.log(prevProduct)
                console.log("procucts: ", products);
            }

        } catch (e) {
            setLoader(false)
            console.log(e)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length > 100) {
            return setDisableButton(true)
        }
        console.log("🤡 ~ file: index.jsx:41 ~ useEffect ~ products.length:", products.length);
    }, [products])

    function dataLoad() {
        setCount(count + 1)
        console.log(count)
    }

    if (loader) {
        return <div>Data Loading! Please Wait</div>
    }
    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products.map((item, index) => (
                        <div className="product" key={index}>
                            <img src={item.thumbnail} alt={item.images}></img>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => dataLoad()}>Load More Data</button>
                {disableButton ? <p>You have reached to 100 products</p> : null}
            </div>

        </div>
    )
}
