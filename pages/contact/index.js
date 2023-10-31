import ContactForm from "@/components/contact/contact-form.component";
import { Fragment } from "react";
import Head from "next/head";
function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>title</title>
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage;