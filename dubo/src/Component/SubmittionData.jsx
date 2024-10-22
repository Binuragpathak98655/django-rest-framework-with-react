import "./submitionData.css";

const SubmittionData = () => {
  return (
    <>
      <div>
        <a href="/">
          <button className="contact-btn">Go To Form</button>
        </a>
      </div>
      <h1>Submition Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Sandeep</td>
            <td>sandeep@gmail.com</td>
            <td>i want to connect react and laravel</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SubmittionData;
