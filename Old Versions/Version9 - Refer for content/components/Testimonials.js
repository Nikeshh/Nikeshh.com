import Testimonial from './testimonials/Testimonial.js';

const Testimonials = () => {
    var data =  [
        {
            "testimonial": "Had the opportunity to work with Nikesh in Temenos. Friendly and approachable. Was astonished they way in which he managed to resolve issues which i faced during an implementation with lightning speed . His knowledge on the area he is working is commendable . He would surely be an asset in which ever organisation he is in",
            "name": "Santhosh C S",
            "description": "Technical Approval Manager at Temenos",
            "pic": "men"
        },
        {
            "testimonial": "He has shown a very keen interest to learn more and to share his knowledge with the rest of his colleagues. He has been at the forefront in all aspects relating to his work. He is very dynamic and a cool person to work with.",
            "name": "Ponmanikandan Boothalingam",
            "description": "Specialist at Temenos",
            "pic": "men"
        },
        {
            "testimonial": "A dynamic enthusiastic person who is always eager to learn new things and explore a lot from them. His innovative approaches to solving problems are always good. Nice to work with you.",
            "name": "Felix Xavier F",
            "description": "Principal Product Engineer at Temenos",
            "pic": "men"
        },
        {
            "testimonial": "I highly recommend him for front end development and wish him all the best in his endeavors",
            "name": "Kavitha Venkatachalam",
            "description": "Associate Professor at SRM Institute of Science & Technology",
            "pic": "female"
        }
    ]

    return (
        <div id="testimonialCarousel" class="carousel slide p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <Testimonial testimonial={data[0]["testimonial"]} name={data[0]["name"]} description={data[0]["description"]} pic={data[0]["pic"]} />
                </div>
                {
                    data.map((testimonial, index) => {
                        if(index != 0) {
                            return (
                                <div className="carousel-item">
                                    <Testimonial testimonial={testimonial["testimonial"]} name={testimonial["name"]} description={testimonial["description"]} pic={testimonial["pic"]} />
                                </div>
                            );
                        }
                    })
                }
            </div>
            <div class="d-grid gap-2 d-md-flex mb-4 mb-lg-3 ms-auto">
                <a href="#testimonialCarousel" role="button" data-bs-slide="prev"
                    class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"><i
                        class="fa-regular fa-circle-left"></i></a>
                <a href="#testimonialCarousel" role="button" data-bs-slide="next"
                    class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"><i
                        class="fa-regular fa-circle-right"></i></a>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Testimonials />,
    document.getElementById('testimonials_container')
);