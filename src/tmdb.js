const API_KEY = "1b0fa88e3ece1c4d40298f7f9a9802a0";
const API_BASE = "https://api.themoviedb.org/3";
const lang = "fr-FR";

/*
Originaux
Recommandé
Populaires
Action
Comédie
Horreur
Romance
Documentaires
*/

const basicFetch = async (endPoint) => {
    const req = await fetch(`${API_BASE}${endPoint}`);
    const json = await req.json();

    return json;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originaux Netflix",
                items: await basicFetch(
                    `/discover/tv?with_network=213&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "trending",
                title: "Recommandé",
                items: await basicFetch(
                    `/trending/all/week?language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "popular",
                title: "Populaire",
                items: await basicFetch(
                    `/discover/movie?sort_by=popularity.desc&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "top-rated",
                title: "les mieux notés",
                items: await basicFetch(
                    `/movie/top_rated?language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "action",
                title: "Action",
                items: await basicFetch(
                    `/discover/movie?with_genres=28&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "comedy",
                title: "Comédie",
                items: await basicFetch(
                    `/discover/movie?with_genres=35&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "dramas",
                title: "Dramas",
                items: await basicFetch(
                    `/discover/movie?with_genres=18&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "horror",
                title: "Horreur",
                items: await basicFetch(
                    `/discover/movie?with_genres=27&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(
                    `/discover/movie?with_genres=10749&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "science-fiction",
                title: "Science fiction",
                items: await basicFetch(
                    `/discover/movie?with_genres=878&language=${lang}&api_key=${API_KEY}`
                )
            },
            {
                slug: "documentaries",
                title: "Documentaires",
                items: await basicFetch(
                    `/discover/movie?with_genres=99&language=${lang}&api_key=${API_KEY}`
                )
            }
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch (type) {
                case "movie":
                    info = await basicFetch(
                        `/movie/${movieId}?language=${lang}&api_key=${API_KEY}`
                    );
                    break;
                case "tv":
                    info = await basicFetch(
                        `/tv/${movieId}?language=${lang}&api_key=${API_KEY}`
                    );
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    }
};
