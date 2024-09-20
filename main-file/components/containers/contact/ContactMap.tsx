const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5791753638114!2d-77.51390332543359!3d37.659096518817286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b13e2dc9577e79%3A0x871cab1031a2ad2d!2sSteuben%20Dr%2C%20Glen%20Allen%2C%20VA%2023060%2C%20USA!5e0!3m2!1sen!2s!4v1725695002017!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
