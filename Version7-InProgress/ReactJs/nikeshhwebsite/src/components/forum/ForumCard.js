import React from "react";

const ForumCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div>
                    <h3>C++ Thread Scheduling</h3>
                    <p>Accounting</p>
                </div>
                <div className="author">
                    <i className="fa fa-person"></i>
                    <div>
                        <p>David Lee</p>
                        <p>4 min ago</p>
                    </div>
                </div>
                <div className="forum-content">
                    <p>
                        Hi Mates,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis condimentum erat, nec rutrum diam. Etiam at quam imperdiet, facilisis quam eu, ullamcorper leo. Donec 
                        vehicula vestibulum molestie. Proin sed urna quis nisl elementum dapibus ac id ante. Donec condimentum faucibus sapien, eget ultrices tortor semper vitae. Maecenas ex magna,
                        iaculis ut risus vel, luctus faucibus urna. Integer a pulvinar risus.

                        Ut maximus ante vitae massa lacinia efficitur. Nullam euismod viverra massa at convallis. Morbi molestie libero velit. Maecenas pretium rhoncus velit, ut tincidunt urna venenatis sed. 
                        Morbi at risus placerat, lacinia felis maximus, porttitor mauris. Suspendisse quis risus diam. Etiam iaculis justo in magna ultrices, et congue magna lacinia. Praesent tempus ut nunc 
                        molestie posuere. Cras ac tortor ut nulla scelerisque bibendum.
                    </p>
                </div>
                <div className="row">
                    <i className="fa fa-save"></i>
                    <button>Comment</button>
                </div>
            </div>
        </div>
    );
}

export default ForumCard;