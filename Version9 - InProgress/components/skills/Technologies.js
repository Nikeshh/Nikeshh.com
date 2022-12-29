import Technology from "./Technology.js";

const Technologies = ({ tabControl }) => {
    return (
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-9">
                        <p>TECHNOLOGIES</p>
                    </div>
                    <div class="col-3 ms-auto d-flex justify-content-end gap-2">
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsTechnologiesCarousel"}
                            role="button" data-bs-slide="prev">
                            <i class="fa fa-arrow-left"></i>
                        </a>
                        <a class="btn btn-primary mb-3" href={"#" + tabControl + "skillsTechnologiesCarousel"}
                            role="button" data-bs-slide="next">
                            <i class="fa fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div id={tabControl + "skillsTechnologiesCarousel"} class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <Technology />
                                <Technology />
                                <Technology />
                                <Technology />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Technology />
                                <Technology />
                                <Technology />
                                <Technology />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">
                                <Technology />
                                <Technology />
                                <Technology />
                                <Technology />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;