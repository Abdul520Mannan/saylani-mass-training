import FormButton from "../../components/buttons/FormButton";

function VerifyCertificate() {
  return (
    <>
      <div className="container p-5">
        <form className="row mb-3 justify-content-center text-center">
          <label htmlFor="inputEmail3" className="form-label">Enter Id Card or CNIC Number</label>
          <div className="col-md-6 py-3">
            <input type="text" placeholder="Id Card or CNIC Number" className="form-control" id="inputEmail3" />
          </div>
          <div className="col-12 text-center">
            <FormButton type="submit">Search</FormButton>
          </div>
        </form>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id Number</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Course Name</th>
              <th scope="col">Course Batch</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>KH102125489</td>
              <td>Abdul Mannan</td>
              <td>abdul520mannan@gmial.com</td>
              <td>03132080193</td>
              <td>Web & Mobile App Development</td>
              <td>Betch - 8</td>
              <td>2022 - 2023</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>KH102125489</td>
              <td>Abdul Mannan</td>
              <td>abdul520mannan@gmial.com</td>
              <td>03132080193</td>
              <td>Web & Mobile App Development</td>
              <td>Betch - 8</td>
              <td>2022 - 2023</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>KH102125489</td>
              <td>Abdul Mannan</td>
              <td>abdul520mannan@gmial.com</td>
              <td>03132080193</td>
              <td>Web & Mobile App Development</td>
              <td>Betch - 8</td>
              <td>2022 - 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default VerifyCertificate;