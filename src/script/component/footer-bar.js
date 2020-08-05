class FooterBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
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
		  <!-- Footer -->
		  <footer class="footer">
		    <div class="container">
		      <div class="row align-items-center">
		        <div class="col-md-4">
		          <span class="copyright">Copyright &copy; Muhammad Baso Adrian Ibrahim</span>
		        </div>
		        <div class="col-md-4">
		          <ul class="list-inline social-buttons">
		            <li class="list-inline-item">
		              <a target="_blank" href="https://twitter.com/Andhy_Adrianz">
		                <i class="fab fa-twitter"></i>
		              </a>
		            </li>
		            <li class="list-inline-item">
		              <a target="_blank" href="https://www.facebook.com/andhy.ba7">
		                <i class="fab fa-facebook-f"></i>
		              </a>
		            </li>
		            <li class="list-inline-item">
		              <a target="_blank" href="https://www.instagram.com/muhba25">
		                <i class="fab fa-instagram"></i>
		              </a>
		            </li>
		          </ul>
		        </div>
		        <!-- <div class="col-md-4">
		          <ul class="list-inline quicklinks">
		            <li class="list-inline-item">
		              <a href="#">Privacy Policy</a>
		            </li>
		            <li class="list-inline-item">
		              <a href="#">Terms of Use</a>
		            </li>
		          </ul>
		        </div> -->
		      </div>
		    </div>
		  </footer>

		  
        `;
    }
}

customElements.define("footer-bar", FooterBar);