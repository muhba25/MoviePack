class DataSource {
    static getTvshow() {
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static getMovie() {
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`Movies not found`)
                }
            })
    };
    static searchMovie(keyword) {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`Movies not found`)
                }
            })
    };
    static searchTvshow(keyword) {
            return fetch(`https://api.themoviedb.org/3/search/tv?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pagenextMovie(page) {
            var nextPageMovie = parseInt(page) + 1;
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${nextPageMovie}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pageprevMovie(page) {
        var prevPageMovie = parseInt(page) - 1;
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${prevPageMovie}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pagenextTvshow(page) {
        var nextPageTvshow = parseInt(page) + 1;
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${nextPageTvshow}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pageprevTvshow(page) {
        var prevPageTvshow = parseInt(page) - 1;
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${prevPageTvshow}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.results) {
                        return Promise.resolve(responseJson.results);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };

    static pagenextMoviePage(page) {
            var nextPageMovie = parseInt(page) + 1;
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${nextPageMovie}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pageprevMoviePage(page) {
            var prevPageMovie = parseInt(page) - 1;
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${prevPageMovie}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pagenextTvshowPage(page) {
            var nextPageTvshow = parseInt(page) + 1;
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${nextPageTvshow}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static pageprevTvshowPage(page) {
             var prevPageTvshow = parseInt(page) - 1;
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=${prevPageTvshow}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };

     static getTvshowPage() {
            return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static getMoviePage() {
            return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`Movies not found`)
                }
            })
    };
    static searchMoviePage(keyword) {
            return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
    static searchTvshowPage(keyword) {
            return fetch(`https://api.themoviedb.org/3/search/tv?api_key=ec0f3172f9eb86b9a3ca61685e1bd447&language=en-US&page=1&query=${keyword}&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.page) {
                        return Promise.resolve(responseJson.page);
                    
                } else {
                    return Promise.reject(`TV Show not found`)
                }
            })
    };
}

export default DataSource;