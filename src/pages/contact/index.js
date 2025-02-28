import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
// import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  // const [formData, setFormdata] = useState({
  //   email: "",
  //   name: "",
  //   message: "",
  //   loading: false,
  //   show: false,
  //   alertmessage: "",
  //   variant: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormdata({ loading: true });

  //   const templateParams = {
  //     from_name: formData.email,
  //     user_name: formData.name,
  //     to_name: contactConfig.YOUR_EMAIL,
  //     message: formData.message,
  //   };

  //   emailjs
  //     .send(
  //       contactConfig.YOUR_SERVICE_ID,
  //       contactConfig.YOUR_TEMPLATE_ID,
  //       templateParams,
  //       contactConfig.YOUR_USER_ID
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setFormdata({
  //           loading: false,
  //           alertmessage: "SUCCESS! ,Thankyou for your messege",
  //           variant: "success",
  //           show: true,
  //         });
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setFormdata({
  //           alertmessage: `Faild to send!,${error.text}`,
  //           variant: "danger",
  //           show: true,
  //         });
  //         document.getElementsByClassName("co_alert")[0].scrollIntoView();
  //       }
  //     );
  // };

  // const handleChange = (e) => {
  //   setFormdata({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        Please DM me on one of my socials! I would love to talk about cool ideas for science, education, art, philosophy, or whatever! 
      </Container>
      {/* <div className={formData.loading ? "loading-bar" : "d-none"}></div> */}
    </HelmetProvider>
  );
};
