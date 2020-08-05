class PaginationmovieBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

     connectedCallback(){
        this.render();
    }

    set results(results) {
        this._results = results;
        this.render();
    }

    set modes(modes) {
        this._modes = modes;
        this.render();
    }

    set clickNextMovie(clickNextMovie) {
        this._clickNextMovie = clickNextMovie;
        this.render();
    }

    set clickPrevMovie(clickPrevMovie) {
        this._clickPrevMovie = clickPrevMovie;
        this.render();
    }    


    get valuePage() {
        return this.shadowDOM.querySelector("#keyPagemovie").value;
    }

    render() {
        const pagem = this._results;
        const mode = this._modes;
        if (mode == "search") {
             this.shadowDOM.innerHTML = `
                    <style>
                    @import "./src/assets/vendor/bootstrap/css/bootstrap.min.css";
                    @import "./src/assets/vendor/fontawesome-free/css/all.min.css";
                    @import "./src/assets/fonts/Monserrat.css";
                    @import "./src/assets/fonts/Kaushan.css";
                    @import "./src/assets/fonts/Droid.css";
                    @import "./src/assets/fonts/Roboto.css";
                    @import "./src/assets/css/agency.min.css";
                    </style>
                    <div class="row justify-content-center">
                    <nav class="d-flex">
                    </nav>
                    </div>

                    `;
        }else{
                if (pagem==1) {
                    this.shadowDOM.innerHTML = `
                    <style>
                    @import "./src/assets/vendor/bootstrap/css/bootstrap.min.css";
                    @import "./src/assets/vendor/fontawesome-free/css/all.min.css";
                    @import "./src/assets/fonts/Monserrat.css";
                    @import "./src/assets/fonts/Kaushan.css";
                    @import "./src/assets/fonts/Droid.css";
                    @import "./src/assets/fonts/Roboto.css";
                    @import "./src/assets/css/agency.min.css";
                    </style>
                    <div class="row justify-content-center">
                    <nav class="d-flex">
                    <ul class="pagination">
                    <li class="page-item">
                    <button disabled class="btn btn-dark" id="prevMovie">
                    PREV PAGE
                    </button>
                    </li> &nbsp;
                    <li class="page-item">
                    <input type="hidden" id="keyPagemovie" value="${pagem}" />
                    <button class="btn btn-dark" id="nextMovie">
                    NEXT PAGE
                    </button>
                    </li>
                    </ul>
                    </nav>
                    </div>
                    <div style="float:right;">Page : ${pagem}</div>

                    `;
                } else {
                    this.shadowDOM.innerHTML = `
                    <style>
                    @import "./src/assets/vendor/bootstrap/css/bootstrap.min.css";
                    @import "./src/assets/vendor/fontawesome-free/css/all.min.css";
                    @import "./src/assets/fonts/Monserrat.css";
                    @import "./src/assets/fonts/Kaushan.css";
                    @import "./src/assets/fonts/Droid.css";
                    @import "./src/assets/fonts/Roboto.css";
                    @import "./src/assets/css/agency.min.css";
                    </style>
                    <div class="row justify-content-center">
                    <nav class="d-flex">
                    <ul class="pagination">
                    <li class="page-item">
                    <button class="btn btn-dark" id="prevMovie">
                    PREV PAGE 
                    </button>
                    </li> &nbsp;
                    <li class="page-item">
                    <input type="hidden" id="keyPagemovie" value="${pagem}" />
                    <button class="btn btn-dark" id="nextMovie">
                    NEXT PAGE
                    </button>
                    </li>
                    </ul>
                    </nav>
                    </div>
                    <div style="float:right;">Page : ${pagem}</div>

                    `;
                }
            }

        this.shadowDOM.querySelector("#nextMovie").addEventListener("click", this._clickNextMovie);
        this.shadowDOM.querySelector("#prevMovie").addEventListener("click", this._clickPrevMovie);
    }
}

customElements.define("paginationmovie-bar", PaginationmovieBar);