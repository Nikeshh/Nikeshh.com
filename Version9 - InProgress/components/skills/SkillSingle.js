import { skillsAndServices } from '../data/data.js';

const SkillSingle = () => {
    
    const [skill, setSkill] = React.useState({});

    React.useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

        var urlValues = getUrlValues();
        var category = urlValues["category"];
        var subcategory = urlValues["subcategory"];
        var learnMore = urlValues["learn-more"];
        var datas = skillsAndServices[category][subcategory];
        for (var i=0; i < datas.length; i++) {
            if(datas[i]["learn-more"] == learnMore) {
                setSkill(datas[i]);
            }
        }
    }, []);

    function getUrlValues() { 
        var vars = {}; 
        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) { 
           vars[key] = value; 
        });
        return vars;
    }

    return (
        <div class="blog-content">
            <div class="left-content">
                <img src="./assets/images/blog1.png" alt="" class="img-fluid content-image" />
                <div class="title">
                <h1>{skill["name"]}</h1>
                </div>
                <div class="meta-details">
                    <span class="author-details">
                        <i class="bi bi-person"></i>
                        <a href="#">DeepLobe</a>
                    </span>
                    <span class="time-details">
                        <i class="bi bi-clock-history"></i>
                        <a href="#">December 9, 2021</a>
                    </span>
                </div>
                <div class="content">
                    {skill["content"]}
                </div>
                <div class="tags">
                    <span class="tag">Learning</span>
                    <span class="tag">AI</span>
                    <span class="tag">Computer Vision</span>
                </div>
                <ul class="social-icons">
                    <li class="share-via">
                        <p>Share via</p>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
                <div class="comments">
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                    <div class="user-comment">
                        <img src="./assets/images/avatar.png" alt="" class="img-fluid comment-image" />
                        <div class="comment-details">
                            <p class="comment">This is a amazing skill</p>
                            <p class="details">Nikeshh Vijayabaskaran <span class="timestamp">February 28, 2023 At 4:15 am</span></p>
                        </div>
                    </div>
                </div>
                <div class="leave-a-comment">
                    <p class="title">Leave A Comment</p>
                    <form>
                        <div class="form-group">
                            <textarea class="form-control" id="yourComment" rows="4" placeholder="Your comment"></textarea>
                        </div>
                        <div class="user-details">
                            <div class="form-group">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Comment</button>
                    </form>
                </div>
            </div>
            <div class="right-content">
                <div class="recent-posts">
                    <p class="title">Similar Skills</p>
                    <a href="#"><p class="post">Redux</p></a>
                    <a href="#"><p class="post">NextJS</p></a>
                    <a href="#"><p class="post">ExpressJS</p></a>
                    <a href="#"><p class="post">NodeJS</p></a>
                    <a href="#"><p class="post">HTML5</p></a>
                </div>
                <div class="promotion">
                    <p class="title">Download Free Ebook</p>
                    <img src="./assets/images/blog3.png" alt="" class="img-fluid promotion-image" />
                </div>
                <div class="business-contact">
                    <p class="title">Get custom ML Models for your business</p>
                    <p class="subtitle">Fill in your details below for a free consultation call.</p>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="fullName" placeholder="Full Name" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="emailAddress" placeholder="Please enter your email" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" id="mobile" placeholder="Mobile" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <SkillSingle />,
    document.getElementById('skill_single')
);