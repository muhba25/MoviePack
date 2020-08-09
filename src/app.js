import "regenerator-runtime";

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {$,jQuery} from 'jquery';
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/fonts/Monserrat.css";
import "./assets/fonts/Kaushan.css";
import "./assets/fonts/Droid.css";
import "./assets/fonts/Roboto.css";
import "./assets/css/agency.css";
import {$,jQuery} from './assets/vendor/jquery/jquery.js';



import main from "./script/view/main.js";
import "./script/component/footer-bar.js";



document.addEventListener("DOMContentLoaded", main);