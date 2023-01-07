import image from '../../assets/images/65.jpg'
import AnchorButton from '../../components/buttons/AnchorButton';

function Blogs() {
  return (
    <>
      <div className="banner2">
        <div className="px-md-5 text-center w-50">
          <h1 className="font-barlow1 fw fs56">Blogs</h1>
          <p className="font-barlow text-gray fs16">Some Text About Blogs.</p>
        </div>
      </div>
      <div className="containe px-md-5">
        <div className="row px-md-5 my-3 py-md-5 bg-light">
          <div className="col-lg-6 col-md-12 col-12">
            <img src={image} className='w-100' alt="" />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="shade">
              <h1 className="font-barlow1 fw-bold fs22">Mobile Repairing Oreintation Class</h1>
              <p className="font-barlow text-gray fs12">
                Dear Applicants of Mobile Repairing!
                Congratulations!
                Your Orientation Class will be held on Thursday, 1st December 2022 at 10 am at the Saylani
                Gulshan Campus. Please come according to the mentioned time.
              </p>
              <AnchorButton link=''>Read More</AnchorButton>
            </div>
          </div>
        </div>
        <div className="row px-md-5 my-3 py-md-5 bg-light">
          <div className="col-lg-6 col-md-12 col-12">
            <img src={image} className='w-100' alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
            <div className="shade">
              <h1 className="font-barlow1 fw-bold fs22">Mobile Repairing Oreintation Class</h1>
              <p className="font-barlow text-gray fs12">
                Dear Applicants of Mobile Repairing!
                Congratulations!
                Your Orientation Class will be held on Thursday, 1st December 2022 at 10 am at the Saylani
                Gulshan Campus. Please come according to the mentioned time.
              </p>
              <AnchorButton link=''>Read More</AnchorButton>
            </div>
          </div>

        </div>
        <div className="row px-md-5 my-3 py-md-5 bg-light">
          <div className="col-lg-6 col-md-12 col-12">
            <img src={image} className='w-100' alt="" />
          </div>
          <div className="col-lg-6 col-md-12  col-12 d-flex align-items-center">
            <div className="shade">
              <h1 className="font-barlow1 fw-bold fs22">Mobile Repairing Oreintation Class</h1>
              <p className="font-barlow text-gray fs12">
                Dear Applicants of Mobile Repairing!
                Congratulations!
                Your Orientation Class will be held on Thursday, 1st December 2022 at 10 am at the Saylani
                Gulshan Campus. Please come according to the mentioned time.
              </p>
              <AnchorButton link=''>Read More</AnchorButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;