import React from 'react';
import { Form } from 'react-bootstrap';
import "./ContactSection.css"

const ContactSection = () => {
    return (
        <div>
        <section class="contact" id="contact">

    <h1 class="heading"> <span>contact</span> us </h1>

    <Form action="">

        <div class="inputBox">
            <input type="text" placeholder="name"/>
            <input type="email" placeholder="email"/>
        </div>

        <div class="inputBox">
            <input type="number" placeholder="number"/>
            <input type="text" placeholder="subject"/>
        </div>

        <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>

        <input type="submit" value="send message"  className="btn btn-primary"/>

    </Form>

</section>
            
        </div>
    );
};

export default ContactSection;