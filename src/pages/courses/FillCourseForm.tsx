import { useParams } from "react-router-dom";
import FormButton from "../../components/buttons/FormButton";

function FillCourseForm() {
    let params = useParams();
    console.log(params);
    return (
        <>
            <div className="container p-5 ">
                <h1 className="text-center">Courses Title</h1>
                <form className="row g-3 pt-3 px-5">
                    <div className="col-md-6">
                        <label htmlFor="inputFirstName4" className="form-label">First name</label>
                        <input type="text" id="inputFirstName4" className="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLastName4" className="form-label">Last name</label>
                        <input type="text" id="inputLastName4" className="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone4" className="form-label">Phone Number</label>
                        <input type="phone" className="form-control" id="inputPhone4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Agree with Terms and Conditions
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <FormButton type="submit" >Submit</FormButton>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FillCourseForm;