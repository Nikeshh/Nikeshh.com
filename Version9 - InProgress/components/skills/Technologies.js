import Technology from "./Technology.js";

const Technologies = ({ tabControl, data=[] }) => {

    const createCarouselItems = () => {
        var carouselRow = [];
        const numberOfFours = data.length / 4;
        for(var i=0; i < numberOfFours; i++) {
            var carouselItems = [];
            for(var j=0; j<4; j++) {
                if(data.length == 0) {
                    break;
                }
                var technology = data.shift();
                carouselItems.push(<Technology data={ technology } />);
            }
            if(i == 0) {
                carouselRow.push(<div class="carousel-item active"><div class="row">{ carouselItems }</div></div>)
            } else {
                carouselRow.push(<div class="carousel-item"><div class="row">{ carouselItems }</div></div>)
            }
        }
        return carouselRow;
    }

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
                        { createCarouselItems() }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;