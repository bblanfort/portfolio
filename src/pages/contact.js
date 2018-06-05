import React from 'react';

const ContactPage = () => (
    <div>
        <h1>Contact Us</h1>
        <p>
            Tell us what you think
        </p>
        <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input name="name" placeholder="Your Name" type="text"/>
            <button>Send</button>
        </form>

    </div>
)

export default ContactPage;
