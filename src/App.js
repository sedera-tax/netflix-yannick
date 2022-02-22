import React, { useEffect, useState } from "react";
import Tmdb from "./tmdb";
import MovieRow from "./components/movieRow";
import FeatureMovie from "./components/featureMovie";
import "./App.css";
import Header from "./components/header";
import {useMediaQuery} from "@material-ui/core";

export default () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);
            let originals = list.filter((i) => i.slug === "originals");
            let randonChoice = Math.floor(
                Math.random() * (originals[0].items.results.length - 1)
            );
            let chosen = originals[0].items.results[randonChoice];
            let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
            setFeaturedData(chosenInfo);
        };
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 10) {
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, []);

    return (
        <div className="page">
            <Header black={blackHeader} />
            {featuredData && <FeatureMovie item={featuredData} />}
            <section className="lists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </section>

            <footer>
                <a href={'http://sedera-tax.github.io/sedera.html'} target={'_blank'}>Yannick Sedera Aina RAZAFINDRAKOTO</a> <br />
                Droits d'image pour Netflix <br />
                Données extraites du site <a href={'https://www.themoviedb.org/'} target={'_blank'}>themoviedb.org</a>
            </footer>

            {movieList.length <= 0 && (
                <div className="loading">
                    <img
                        src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
                        alt="loading"
                    />
                </div>
            )}
        </div>
    );
};