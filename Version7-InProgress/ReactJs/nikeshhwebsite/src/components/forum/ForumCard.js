import React from "react";

const ForumCard = () => {
    return (
        <div className="card p-3">
            <div className="card-body">
                <div className="row my-4">
                    <div className="col-9">
                        <h3 style={{ fontWeight: '700' }}>C++ Thread Scheduling</h3>
                        <div className="row">
                            <div className="col-sm-3 col-md-1">
                                <img src={"/assets/images/avatar.png"} alt="Avatar" />
                            </div>
                            <div className="col-sm-6 col-md-4 d-flex flex-column justify-content-center p-3" style={{ lineHeight: '1px' }}>
                                <p>David Lee</p>
                                <p>4 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <p><span className="tag_marker"></span>Accounting</p>
                    </div>
                </div>
                <div className="row my-4">
                    <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Hi Mates,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis condimentum erat, nec rutrum diam. Etiam at quam imperdiet, facilisis quam eu, ullamcorper leo. Donec 
                        vehicula vestibulum molestie. Proin sed urna quis nisl elementum dapibus ac id ante. Donec condimentum faucibus sapien, eget ultrices tortor semper vitae. Maecenas ex magna,
                        iaculis ut risus vel, luctus faucibus urna. Integer a pulvinar risus.

                        Ut maximus ante vitae massa lacinia efficitur. Nullam euismod viverra massa at convallis. Morbi molestie libero velit. Maecenas pretium rhoncus velit, ut tincidunt urna venenatis sed. 
                        Morbi at risus placerat, lacinia felis maximus, porttitor mauris. Suspendisse quis risus diam. Etiam iaculis justo in magna ultrices, et congue magna lacinia. Praesent tempus ut nunc 
                        molestie posuere. Cras ac tortor ut nulla scelerisque bibendum.
                    </p>
                </div>
                <div className="row my-4">
                    <div className="col-4">
                        <i className="fa fa-save fa-2xl" style={{ display: 'inline-block', marginRight: '10px' }}></i>
                        <button style={{ borderRadius: '5px', padding: '10px' }} className="my-2">Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumCard;