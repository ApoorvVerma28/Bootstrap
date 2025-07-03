import Layout from '../../Layout/Layout';
import './Home.css';
import { FaRegCheckCircle } from "react-icons/fa";
const Home = () => {
  return (
    <Layout>
      <section className='container-fluid mt-5 py-lg-5 py-sm-4 py-3'>
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="bannerContent">
                <h1 className='text-start '>Full Stack Web Development <br /> <span > Mentorship Program </span> </h1>
                <p>Join the best full stack developer course online and accelerate your career as a skilled web developer. Learn from the top industry mentors and launch your career in Full Stack Web Development.</p>
                <ul>
                  <li><FaRegCheckCircle /> Guided by the Geeks</li>
                  <li><FaRegCheckCircle /> Project-Driven Curriculum</li>
                  <li><FaRegCheckCircle /> Hybrid Dissemination</li>
                </ul>
                <button type="submit" className="btn btn-primary px-4 mb-4">Book Demo  </button>
              </div>
            </div>
            <div className="col-lg-5">
              <form action="" className='bannerForm shadow-lg ' >
                <h3>Book Your Free Class Now!</h3>
                <p>2 days of free damo classes without paying in advance!</p>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" id="exampleInputText" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">+91</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    aria-describedby="addon-wrapping"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2 mx-auto">Registration Now</button>
              </form>
            </div>

          </div>
        </div>

        <div className='container homeRow bg-white  shadow-lg'>
          <div className="row row-cols-lg-5 row-cols-md-2 row-cols-sm-2 row-cols-1  p-5">
        <div className="col colItem text-center">Web Development</div>
        <div className="col colItem text-center">Digital Marketing</div>
        <div className="col colItem text-center">Cyber Security</div>
        <div className="col colItem text-center">Data Analytics</div>
        <div className="col colItem text-center">Cyber Security</div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home