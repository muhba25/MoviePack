class PaginationtvshowBar extends HTMLElement {

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

    set clickNextTv(clickNextTv) {
        this._clickNextTv = clickNextTv;
        this.render();
    }

    set clickPrevTv(clickPrevTv) {
        this._clickPrevTv = clickPrevTv;
        this.render();
    }       


    get valuePage() {
        return this.shadowDOM.querySelector("#keyPagetv").value;
    }


    render() {
        const page = this._results;
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
            if (page==1) {
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
                <button disabled class="btn btn-dark" id="prevTvshow">
                PREV PAGE 
                </button>
                </li> &nbsp;
                <li class="page-item">
                <input type="hidden" id="keyPagetv" value="${page}" />
                <button class="btn btn-dark" id="nextTvshow">
                NEXT PAGE
                </button>
                </li>
                </ul>
                </nav>
                </div>
                <div style="float:right;">Page : ${page}</div>

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
                <button class="btn btn-dark" id="prevTvshow">
                PREV PAGE 
                </button>
                </li> &nbsp;
                <li class="page-item">
                <input type="hidden" id="keyPagetv" value="${page}" />
                <button class="btn btn-dark" id="nextTvshow">
                NEXT PAGE
                </button>
                </li>
                </ul>
                </nav>
                </div>
                <div style="float:right;">Page : ${page}</div>

                `;
            }
        }

        this.shadowDOM.querySelector("#nextTvshow").addEventListener("click", this._clickNextTv);
        this.shadowDOM.querySelector("#prevTvshow").addEventListener("click", this._clickPrevTv);

    }
}

customElements.define("paginationtvshow-bar", PaginationtvshowBar);