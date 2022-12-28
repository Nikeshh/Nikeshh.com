const Testimonial = ({ testimonial, name, description, pic }) => {
    return (
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
            <div class="col-10 col-sm-8 col-lg-6">
                <img src={ pic == "men" ? "./assets/images/testimonial_men.png" : "./assets/images/testimonial_female.png"}
                    class="d-block mx-lg-auto img-fluid img-thumbnail rounded-circle w-50"
                    alt="Testimonial Image" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6 d-flex flex-column justify-content-center">
                <p class="lead fst-italic">"{testimonial}"</p>
                <h4>{name}</h4>
                <p class="fw-light">{description}</p>
            </div>
        </div>
    );
};

export default Testimonial;