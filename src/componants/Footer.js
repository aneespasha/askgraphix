import React from 'react';
import '../styles/Footer.css';
import iconSet from "../selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export default function Footer(props) {
  return (
    <div className="footer-basic">
        <footer>
            <div className="social">
                <a href="/"><IcomoonReact iconSet={iconSet} color="#333" size={20} icon="facebook" /></a>
                <a href="/"><IcomoonReact iconSet={iconSet} color="#333" size={20} icon="twitter" /></a>
                <a href="/"><IcomoonReact iconSet={iconSet} color="#333" size={20} icon="instagram" /></a>
                <a href="/"><IcomoonReact iconSet={iconSet} color="#333" size={20} icon="linkedin" /></a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><a href="/">About</a></li>
                <li className="list-inline-item"><a href="/">Terms</a></li>
                <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2022</p>
        </footer>
    </div>
  );
}

