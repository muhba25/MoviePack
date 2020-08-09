import '../component/searchmovie-bar.js';
import '../component/searchtvshow-bar.js';
import '../component/paginationmovie-bar.js';
import '../component/paginationtvshow-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const tvshowListElement = document.querySelector("tvshow-list");
    const searchElementMovie = document.querySelector("searchmovie-bar");
    const searchElementTv = document.querySelector("searchtvshow-bar");
    const pageElementMovie = document.querySelector("paginationmovie-bar");
    const pageElementTv = document.querySelector("paginationtvshow-bar");

     const introText =  () => {
        const htmlIntrotextElement = document.querySelector("#headers");
        htmlIntrotextElement.innerHTML = `
        <div class="container">
        <div class="intro-text">
        <div class="intro-lead-in">Welcome To MoviePack</div>
        <div class="intro-heading">Movie and Tv Show <br>Popular</div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#Movie">Lets Check It</a>
        </div>
        </div>
    `;        
    };

    const modalTexttv =  results => {
        const htmlIntrotextElement = document.querySelector("#modalstv");
        htmlIntrotextElement.innerHTML ="";

        results.forEach(resulttv => {
           const dates = new Date(resulttv.first_air_date);
           const size = Math.round(resulttv.vote_average);
           const bulat = Math.trunc(size / 2);
           const sisa = size % 2;
           let bulan = "";
           let ratingsElement="";

            if (sisa==1) {
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
                ratingsElement += '<span class="fa fa-star-half checked"></span>';   
            } else{
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
            }


            switch(dates.getMonth()) {
                  case 1:
                  bulan = "Januari";
                  break;
                  case 2:
                   bulan = "Februari";
                  break;
                  case 3:
                   bulan = "Maret";
                  break;
                  case 4:
                   bulan = "April";
                  break;
                  case 5:
                   bulan = "Mei";
                  break;
                  case 6:
                   bulan = "Juni";
                  break;
                  case 7:
                   bulan = "Juli";
                  break;
                  case 8:
                   bulan = "Agustus";
                  break;
                  case 9:
                   bulan = "September";
                  break;
                  case 10:
                   bulan = "Oktober";
                  break;
                  case 11:
                   bulan = "November";
                  break;
                  case 12:
                   bulan = "Desember";
                  break;
              }; 

          

        if (resulttv.poster_path==null) {
            htmlIntrotextElement.innerHTML += `
            <div class="portfolio-modal modal fade" id="detailModals${resulttv.id}" tabindex="-1" role="dialog" aria-hidden="true">        
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
            <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-lg-8 mx-auto">
            <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2 class="text-uppercase">${resulttv.original_name}</h2>
            <p class="item-intro text-muted">${resulttv.vote_average} ${ratingsElement}</p>
            <img style="width: 300px;" class="img-fluid d-block mx-auto" src="https://www.kesulawesi.com/assets/images/additional/movieback-jpg.jpg" alt="">
            <p>${resulttv.overview}</p>
            <ul class="list-inline">
            <li>Date: ${dates.getDate()} ${bulan} ${dates.getFullYear()}</li>
            <li>Popularity: ${resulttv.popularity}</li>
            <li>Country: ${resulttv.origin_country}</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fas fa-times"></i>
            Close Project</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
        } else {
            htmlIntrotextElement.innerHTML += `
            <div class="portfolio-modal modal fade" id="detailModals${resulttv.id}" tabindex="-1" role="dialog" aria-hidden="true">        
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
            <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-lg-8 mx-auto">
            <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2 class="text-uppercase">${resulttv.original_name}</h2>
            <p class="item-intro text-muted">${resulttv.vote_average} ${ratingsElement}</p>
            <img style="width: 300px;" class="img-fluid d-block mx-auto" src="https://image.tmdb.org/t/p/w300${resulttv.backdrop_path}" alt="">
            <p>${resulttv.overview}</p>
            <ul class="list-inline">
            <li>Date: ${dates.getDate()} ${bulan} ${dates.getFullYear()}</li>
            <li>Popularity: ${resulttv.popularity}</li>
            <li>Country: ${resulttv.origin_country}</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fas fa-times"></i>
            Close Project</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
        };
    });       
        };

        const modalTextmovie =  results => {
        const htmlIntrotextElement = document.querySelector("#modalsmovie");
        htmlIntrotextElement.innerHTML ="";

        results.forEach(result => {
           const dates = new Date(result.release_date);
           const size = Math.round(result.vote_average);
           const bulat = Math.trunc(size / 2);
           let bulan = "";
           const sisa = size % 2;
           let ratingsElement="";

            if (sisa==1) {
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
                ratingsElement += '<span class="fa fa-star-half checked"></span>';   
            } else{
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
            }


            switch(dates.getMonth()) {
                  case 1:
                   bulan = "Januari";
                  break;
                  case 2:
                   bulan = "Februari";
                  break;
                  case 3:
                   bulan = "Maret";
                  break;
                  case 4:
                   bulan = "April";
                  break;
                  case 5:
                   bulan = "Mei";
                  break;
                  case 6:
                   bulan = "Juni";
                  break;
                  case 7:
                   bulan = "Juli";
                  break;
                  case 8:
                   bulan = "Agustus";
                  break;
                  case 9:
                   bulan = "September";
                  break;
                  case 10:
                   bulan = "Oktober";
                  break;
                  case 11:
                   bulan = "November";
                  break;
                  case 12:
                   bulan = "Desember";
                  break;
              }; 

          

        if (result.poster_path==null) {
            htmlIntrotextElement.innerHTML += `
            <div class="portfolio-modal modal fade" id="detailModals${result.id}" tabindex="-1" role="dialog" aria-hidden="true">        
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
            <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-lg-8 mx-auto">
            <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2 class="text-uppercase">${result.original_title}</h2>
            <p class="item-intro text-muted">${result.vote_average} ${ratingsElement}</p>
            <img style="width: 300px;" class="img-fluid d-block mx-auto" src="https://www.kesulawesi.com/assets/images/additional/movieback-jpg.jpg" alt="">
            <p>${result.overview}</p>
            <ul class="list-inline">
            <li>Date: ${dates.getDate()} ${bulan} ${dates.getFullYear()}</li>
            <li>Popularity: ${result.popularity}</li>
            <li>Country: ${result.origin_country}</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fas fa-times"></i>
            Close Project</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
        } else {
            htmlIntrotextElement.innerHTML += `
            <div class="portfolio-modal modal fade" id="detailModals${result.id}" tabindex="-1" role="dialog" aria-hidden="true">        
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
            <div class="lr">
            <div class="rl"></div>
            </div>
            </div>
            <div class="container">
            <div class="row">
            <div class="col-lg-8 mx-auto">
            <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2 class="text-uppercase">${result.original_title}</h2>
            <p class="item-intro text-muted">${result.vote_average} ${ratingsElement}</p>
            <img style="width: 300px;" class="img-fluid d-block mx-auto" src="https://image.tmdb.org/t/p/w300${result.backdrop_path}" alt="">
            <p>${result.overview}</p>
            <ul class="list-inline">
            <li>Date: ${dates.getDate()} ${bulan} ${dates.getFullYear()}</li>
            <li>Popularity: ${result.popularity}</li>
            <li>Language: ${result.original_language}</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
            <i class="fas fa-times"></i>
            Close Project</button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
        };
    });       
        };

        const mainNav =  () => {
            const mainnavElement = document.querySelector("#mainNav");
            mainnavElement.innerHTML = `
            <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">MoviePack</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#Movie">Movie</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#Tvshow">Tv Show</a>
            </li>
            </ul>
            </div>
            </div>
            `;  
        };

        const onButtonSearchClickedMovie = async () => {
            try{
                const result = await DataSource.searchMovie(searchElementMovie.valueKey);
                renderResultMovie(result);
                modalTextmovie(result);
                pageElementMovie.modes = "search";
            } catch (message) {
                fallbackResultMovie(message)
            }
        };

        const onButtonSearchClickedTv = async () => {
            try{
                const result = await DataSource.searchTvshow(searchElementTv.valueKey);
                renderResultTv(result);
                modalTexttv(result);
                pageElementTv.modes = "search";
            } catch (message) {
                fallbackResultTv(message)
            }
        };

        const onPageClickedMovieNext = async () => {
            try{
                const result = await DataSource.pagenextMovie(pageElementMovie.valuePage);
                const resultpage = await DataSource.pagenextMoviePage(pageElementMovie.valuePage);
                renderResultMovie(result);
                modalTextmovie(result);
                pageElementMovie.results = resultpage;
            } catch (message) {
                fallbackResultMovie(message)
            }
        };

         const onPageClickedMoviePrev = async () => {
            try{
                const result = await DataSource.pageprevMovie(pageElementMovie.valuePage);
                const resultpage = await DataSource.pageprevMoviePage(pageElementMovie.valuePage);
                renderResultMovie(result);
                modalTextmovie(result);
                pageElementMovie.results = resultpage;
            } catch (message) {
                fallbackResultMovie(message)
            }
        };

        const onPageClickedTvNext = async () => {
            try{
                const result = await DataSource.pagenextTvshow(pageElementTv.valuePage);
                const resultpage = await DataSource.pagenextTvshowPage(pageElementTv.valuePage);
                renderResultTv(result);
                modalTexttv(result);
                pageElementTv.results = resultpage;
            } catch (message) {
                fallbackResultTv(message)
            }
        };

        const onPageClickedTvPrev = async () => {
            try{
                const result = await DataSource.pageprevTvshow(pageElementTv.valuePage);
                const resultpage = await DataSource.pageprevTvshowPage(pageElementTv.valuePage);
                renderResultTv(result);
                modalTexttv(result);
                pageElementTv.results = resultpage;
            } catch (message) {
                fallbackResultTv(message)
            }
        };


        const getmovies = async () => {
            try{
                const result = await DataSource.getMovie();
                const resultpage = await DataSource.getMoviePage();
                renderResultMovie(result);
                modalTextmovie(result);
                pageElementMovie.results = resultpage;
            } catch (message) {
                fallbackResultMovie(message)
            }
        };

        const gettvs = async () => {
            try{
                const result = await DataSource.getTvshow();
                const resultpage = await DataSource.getTvshowPage();
                renderResultTv(result);
                modalTexttv(result);
                pageElementTv.results = resultpage;
            } catch (message) {
                fallbackResultTv(message)
            }
        };


        const renderResultMovie =  results => {
            const listMovieElement = document.querySelector("#MovieList");
            listMovieElement.innerHTML = "";

            results.forEach(result => {
                const dates = new Date(result.release_date);
                const size = Math.round(result.vote_average);
                const bulat = Math.trunc(size / 2);
                const sisa = size % 2;
                let ratingsElement="";

                if (sisa==1) {
                    for (let i = bulat; i >= 1; i--) {
                        ratingsElement += '<span class="fa fa-star checked"></span>';
                    }
                    ratingsElement += '<span class="fa fa-star-half checked"></span>';   
                }else{
                    for (let i = bulat; i >= 1; i--) {
                        ratingsElement += '<span class="fa fa-star checked"></span>';
                    }
                }

                if (result.poster_path==null) {
                    listMovieElement.innerHTML += `
                     <style>
                    .checked {
                      color: orange;
                  }
                  </style>
                    <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#detailModals${result.id}">
                    <img class="img-fluid" src="https://www.kesulawesi.com/assets//images/additional/movie-jpg.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                    <h4>${result.original_title}</h4>
                    <p class="text-muted">  
                    <span id="ratings">${result.vote_average} ${ratingsElement}</span>
                    &nbsp;&nbsp; | &nbsp;&nbsp; ${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}</p>
                    </div>
                    </div>
                    `
                } else{
                    listMovieElement.innerHTML += `
                    <style>
                    .checked {
                      color: orange;
                  }
                  </style>
                  <div class="col-md-4 col-sm-6 portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#detailModals${result.id}">
                  <img class="img-fluid" src="https://image.tmdb.org/t/p/w200${result.poster_path}" alt="">
                  </a>
                  <div class="portfolio-caption">
                  <h4>${result.original_title}</h4>
                  <p class="text-muted">  
                  <span id="ratings">${result.vote_average} ${ratingsElement}</span>
                  &nbsp;&nbsp; | &nbsp;&nbsp; ${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}</p>
                  </div>
                  </div>
                  `
              };



          });

        };

        const renderResultTv =  results => {
            const listTvshowElement = document.querySelector("#TvshowList");
            listTvshowElement.innerHTML = "";

            results.forEach(result => {
               const dates = new Date(result.first_air_date);
               const size = Math.round(result.vote_average);
               const bulat = Math.trunc(size / 2);
               const sisa = size % 2;
               let ratingsElement="";

               if (sisa==1) {
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
                ratingsElement += '<span class="fa fa-star-half checked"></span>';   
            }else{
                for (let i = bulat; i >= 1; i--) {
                    ratingsElement += '<span class="fa fa-star checked"></span>';
                }
            }


            if (result.poster_path==null) {
                listTvshowElement.innerHTML += `
                 <style>
                    .checked {
                      color: orange;
                  }
                  </style>
                <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#detailModals${result.id}">
                <img class="img-fluid" src="https://www.kesulawesi.com/assets//images/additional/movie-jpg.jpg" alt="">
                </a>
                <div class="portfolio-caption">
                <h4>${result.original_name}</h4>
                <p class="text-muted">  
                <span id="ratings">${result.vote_average} ${ratingsElement}</span>
                &nbsp;&nbsp; | &nbsp;&nbsp; ${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}</p>
                </div>
                </div>
                `
            } else{
                listTvshowElement.innerHTML += `
                 <style>
                    .checked {
                      color: orange;
                  }
                  </style>
                <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#detailModals${result.id}">
                <img class="img-fluid" src="https://image.tmdb.org/t/p/w200${result.poster_path}" alt="">
                </a>
                <div class="portfolio-caption">
                <h4>${result.original_name}</h4>
                <p class="text-muted">  
                <span id="ratings">${result.vote_average} ${ratingsElement}</span>
                &nbsp;&nbsp; | &nbsp;&nbsp; ${dates.getDate()}/${dates.getMonth()}/${dates.getFullYear()}</p>
                </div>
                </div>
                `
            };
        });
        
    };

    const fallbackResultMovie = message => {
        tvshowListElement.renderError(message);
    };

    const fallbackResultTv = message => {
        tvshowListElement.renderError(message);
    };



    // mainNav();
    searchElementMovie.clickEvent = onButtonSearchClickedMovie;
    searchElementTv.clickEvent = onButtonSearchClickedTv;
    pageElementMovie.clickNextMovie = onPageClickedMovieNext;
    pageElementMovie.clickPrevMovie = onPageClickedMoviePrev;
    pageElementTv.clickNextTv = onPageClickedTvNext;
    pageElementTv.clickPrevTv = onPageClickedTvPrev;
    introText();
    getmovies();
    gettvs();
    modalTexttv();
    modalTextmovie();



};

export default main;