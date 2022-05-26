import React from 'react';
import { Form } from 'react-bootstrap';
import "./ExtraSection.css"
const ExtraSection = () => {
    return (
        <section class="newsletter">

    <h3>subscribe us for latest updates</h3>

    <Form action="">
        <input class="box" type="email" placeholder="enter your email"/>
        <input type="submit" value="subscribe" className="btn btn-primary"/>
    </Form>
</section>
    );
};

export default ExtraSection;