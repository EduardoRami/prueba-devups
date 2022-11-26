import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../public/arrow.svg";
import brushTwo from "../public/brush-2.svg";
import styles from "../styles/ArticlesMain.module.css";
import { CardArticle } from "./CardArticle";

export const ArticlesMain = () => {
  const [filterSelected, setFilterSelected] = useState("Todos");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState(["Todos"]);

  const handleFilter = (e) => {
    setFilterSelected(e.target.value);
    updateFilteredProducts(products, e.target.value);
  };

  const getProducts = async () => {
    axios
      .get(
        `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?limit=${filterSelected}`
      )
      .then((resp) => {
        setProducts(resp.data);

        const category = resp.data.map((product) => product.category);

        setFilters(["Todos", ...new Set(category)]);

        updateFilteredProducts(resp.data, filterSelected);
      })
      .catch((err) => {
        setProducts([]);
        console.log(err);
      });
  };

  const updateFilteredProducts = (_products, _filter) => {
    if (filterSelected === "Todos") {
      setFilteredProducts(_products);
    } else {
      setFilteredProducts(
        _products.filter((product) => product.category === _filter)
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [filterSelected]);

  return (
    <section className={styles.articles}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Nuestros artículos</h2>
          <Image src={brushTwo} alt="Pintura" className={styles.brush} />
        </div>
        <div className={styles.content}>
          <aside className={styles.aside}>
            <ul className={styles.list}>
              {filters.map((filter) => (
                <li
                  key={filter}
                  className={`${styles.listItem} ${
                    filterSelected === filter ? styles.listItemActive : null
                  }`}
                >
                  <button
                    onClick={handleFilter}
                    type="button"
                    value={filter}
                    className={styles.button}
                  >
                    {filter}
                    <Image
                      src={arrow}
                      alt="Flecha"
                      className={`
                          ${styles.arrow}
                          ${
                            filterSelected === filter
                              ? styles.arrowActive
                              : null
                          }
                        `}
                    />
                  </button>
                </li>
              ))}

              {/*
                <li className={`${styles.listItem} ${styles.listItemActive}`}>
                  <button type="button" className={styles.button}>
                    Todos
                    <Image
                      src={arrow}
                      alt="Flecha"
                      className={`${styles.arrow} ${styles.arrowActive}`}
                    />
                  </button>
                </li>
                <li className={`${styles.listItem}`}>
                  <button type="button" className={styles.button}>
                    Productos
                    <Image
                      src={arrow}
                      alt="Flecha"
                      className={`${styles.arrow}`}
                    />
                  </button>
                </li>
                <li className={`${styles.listItem}`}>
                  <button type="button" className={styles.button}>
                    Recetas
                    <Image
                      src={arrow}
                      alt="Flecha"
                      className={`${styles.arrow}`}
                    />
                  </button>
                </li>
                <li className={`${styles.listItem}`}>
                  <button type="button" className={styles.button}>
                    Consejos
                    <Image
                      src={arrow}
                      alt="Flecha"
                      className={`${styles.arrow}`}
                    />
                  </button>
                </li>
              */}
            </ul>
          </aside>
          <div className={styles.articlesWrapper}>
            <ol className={styles.articlesList}>
              {filteredProducts.map((product) => (
                <CardArticle key={product.id} product={product} />
              ))}

              {/*
                <li className={styles.articlesListItem}>
                  <CardArticle
                    title="Curabitur vulputate placerat tristique nam libero eros"
                    description="Malesuada tortor, facilisi vel turpis ullamcorper. Mattis egestas mattis nulla pretium. Arcu pretium, tempor,"
                  />
                </li>
                <li className={styles.articlesListItem}>
                  <CardArticle
                    title="Curabitur vulputate placerat tristique nam libero eros"
                    description="Malesuada tortor, facilisi vel turpis ullamcorper. Mattis egestas mattis nulla pretium. Arcu pretium, tempor,"
                  />
                </li>
                <li className={styles.articlesListItem}>
                  <CardArticle
                    title="Curabitur vulputate placerat tristique nam libero eros"
                    description="Malesuada tortor, facilisi vel turpis ullamcorper. Mattis egestas mattis nulla pretium. Arcu pretium, tempor,"
                  />
                </li>
                <li className={styles.articlesListItem}>
                  <CardArticle
                    title="Curabitur vulputate placerat tristique nam libero eros"
                    description="Malesuada tortor, facilisi vel turpis ullamcorper. Mattis egestas mattis nulla pretium. Arcu pretium, tempor,"
                  />
                </li>
              */}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
