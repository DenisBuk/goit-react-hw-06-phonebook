import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import css from "./Contact.module.css";

function Contact({ name, number, idx, onClick }) {
    return (
        <li className={css.Contact}>
            <p>
                {idx + 1} - {name}: { number}
                <Button onClick={onClick} text="Delete" type="button"/>
            </p>
        </li>
    );
}
 
export default Contact;

Contact.propTypes = {
    options: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        idx: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
    }),
};