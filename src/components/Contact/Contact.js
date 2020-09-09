import React from 'react';

const Contact = () => {
    return (
        <ul className="contact-icone">
            <li className="contact-item twitter">
                <a href="https://twitter.com/login?lang=vi"><i className="fa fa-twitter"></i></a>
            </li>
            <li className="contact-item">
                <a href="https://www.google.com.vn/?hl=vi"><i className="fa fa-google"></i></a>
            </li>
            <li className="contact-item">
                <a href="https://www.instagram.com/?hl=vi"><i className="fa fa-instagram"></i></a>
            </li>
            <li className="contact-item">
                <a href="https://www.google.com/search?q=facebook&oq=facebook&aqs=chrome..69i57j35i39j0l3j69i60l3.497j0j4&sourceid=chrome&ie=UTF-8"><i className="fa fa-facebook"></i></a>
            </li>
            <li className="contact-item">
                <a href="https://www.youtube.com/?gl=VN"><i className="fa fa-youtube"></i></a>
            </li>
        </ul>
    );
}

export default Contact;