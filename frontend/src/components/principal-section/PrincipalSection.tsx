import "./principal-section.css"

const principalSection = () => {
  return (
    <section className="section1-container">
      <div className="section1-content">
        <h2 className="main-title">Book a Nurse, easy and fast</h2>
        <br/>
        <h6>
        After registering on Happy Nurse, we will arrange a nurse for you.</h6>
        <p><a className="linkToLogin" href="/Login">Click Here </a>to login and choose a Nurse</p>
      </div>
    </section>
  );
};

export default principalSection;
