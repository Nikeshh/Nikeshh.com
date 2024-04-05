var Testimonial = function Testimonial(_ref) {
    var testimonial = _ref.testimonial,
        name = _ref.name,
        description = _ref.description,
        pic = _ref.pic;

    return React.createElement(
        "div",
        { "class": "row flex-lg-row-reverse align-items-center g-5 py-2" },
        React.createElement(
            "div",
            { "class": "col-10 col-sm-8 col-lg-6" },
            React.createElement("img", { src: pic == "men" ? "./assets/images/testimonial_men.png" : "./assets/images/testimonial_female.png",
                "class": "d-block mx-lg-auto img-fluid img-thumbnail rounded-circle w-50",
                alt: "Testimonial Image", width: "700", height: "500", loading: "lazy" })
        ),
        React.createElement(
            "div",
            { "class": "col-lg-6 d-flex flex-column justify-content-center" },
            React.createElement(
                "p",
                { "class": "lead fst-italic" },
                "\"",
                testimonial,
                "\""
            ),
            React.createElement(
                "h4",
                null,
                name
            ),
            React.createElement(
                "p",
                { "class": "fw-light" },
                description
            )
        )
    );
};

export default Testimonial;