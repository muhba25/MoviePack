class SearchtvshowBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get valueKey() {
        return this.shadowDOM.querySelector("#keyElementTV").value;
    }

    render() {
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
        <div class="input-group">
                <input type="text" id="keyElementTV" placeholder="Search Tv Show">
                <div class="input-group-append">
                  <button class="btn btn-secondary" id="searchButtonElementTV" type="button">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
               
`;

        this.shadowDOM.querySelector("#searchButtonElementTV").addEventListener("click", this._clickEvent);
    }
}

customElements.define("searchtvshow-bar", SearchtvshowBar);