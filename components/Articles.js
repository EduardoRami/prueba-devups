import styles from "../styles/Home.module.css"
import { useState, useEffect } from "react"
import { Product } from "../components/Product"
const axios = require("axios");

export const Articles = () => {
    const [filterSelected, setFilterSelected] = useState("Todos")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filters, setFilters] = useState(["Todos"])

    const handleFilter = (e) => {
        setFilterSelected(e.target.value)
        updateFilteredProducts(products, e.target.value)  
    }

    const getProducts = async () => {
        axios
          .get(`https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?limit=${filterSelected}`)
          .then((resp) => {
            setProducts(resp.data)
            
            const category = resp.data.map((product) => product.category)
    
            setFilters(["Todos", ...new Set(category)])
     
            updateFilteredProducts(resp.data, filterSelected)
          })
          .catch((err) => {
            setProducts([])
            console.log(err)
          })
    }

    const updateFilteredProducts = (_products, _filter) => {
        if (filterSelected === "Todos") {
          setFilteredProducts(_products);
        } else {
          setFilteredProducts(
            _products.filter((product) => product.category === _filter)
          )
        }
    }

    useEffect(() => {    
        getProducts();
    }, [filterSelected])

    return (
        <section>
            <section className={`${styles.sectionTitle}`}>
                <h3>Nuestros artículos</h3>
            </section>

            <section className={styles.cardContainer}>
                <aside className={styles.menu}>
                    <ul>
                        {filters.map((filter) => (
                            <li key={filter}>
                                <button className={`${styles.btn} ${filterSelected === filter ? styles.active : ""}`} value={filter} onClick={handleFilter}>
                                    {filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {filteredProducts === [] ? (
                    <p>No hay productos</p>
                ) : (
                    filteredProducts.map((product) => (
                    <Product key={product.id} product={product} />
                    ))
                )}

            </section>
        </section>
    );
};














