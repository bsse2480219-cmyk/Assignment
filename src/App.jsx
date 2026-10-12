import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">Student Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Settings
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Add Student</a></li>
                  <li><a className="dropdown-item" href="#">Remove Student</a></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">

        <nav aria-label="breadcrumb" className="px-4 py-3 rounded">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#">.breadcrumb</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">breadcrumb-item</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Students</a>
            </li>
            <li className="breadcrumb-item active text-white" aria-current="page">
              Directory
            </li>
          </ol>
        </nav>

        <h2 className="pt-3">
          Page Header
          <button className="st-btn btn btn-primary float-end">Add New Student</button>
        </h2>

        <hr />

        <div className='d-flex mx-5 gap-2'>
          <div className="card mx-2" style={{ width: '15rem' }}>
            <img src="data:image/jpeg;base64,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" className="card-img-top" alt="Hello"></img>
            <div className="card-body">
              <h5 className="card-title">
                Jane Dow
              </h5>
              <p className="card-text">
                <ul className='list-unstyled'>
                  <li>ID:101</li>
                  <li>Major: Computer Science</li>
                  <li>Year: 2</li>
                  <li>GPA: 3.8</li>
                </ul></p>
              <button type="button" class="btn btn-outline-primary mx-1">View Profile</button>
              <button type="button" class="btn btn-outline-danger my-1">Delete</button>
              <button type="button" class="btn btn-outline-danger">.btn-outline-danger</button>
            </div>
          </div>

          <div className="card mx-2" style={{ width: '15rem' }}>
            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="Hello"></img>
            <div className="card-body">
              <h5 className="card-title">
                Jane Dow
              </h5>
              <p className="card-text">
                <ul className='list-unstyled'>
                  <li>ID:101</li>
                  <li>Major: Computer Science</li>
                  <li>Year: 2</li>
                  <li>GPA: 3.8</li>
                </ul></p>
              <button type="button" class="btn btn-outline-primary mx-1">View Profile</button>
              <button type="button" class="btn btn-outline-danger my-1">Delete</button>
              <button type="button" class="btn btn-outline-danger">.btn-outline-danger</button>
            </div>
          </div>

          <div className="card mx-2" style={{ width: '15rem' }}>
            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="Hello"></img>
            <div className="card-body">
              <h5 className="card-title">
                Jane Dow
              </h5>
              <p className="card-text">
                <ul className='list-unstyled'>
                  <li>ID:101</li>
                  <li>Major: Computer Science</li>
                  <li>Year: 2</li>
                  <li>GPA: 3.8</li>
                </ul></p>

              <button type="button" class="btn btn-outline-primary mx-1">View Profile</button>
              <button type="button" class="btn btn-outline-danger my-1">Delete</button>
              <button type="button" class="btn btn-outline-danger">.btn-outline-danger</button>
            </div>
          </div>

          <div className="card mx-2" style={{ width: '15rem' }}>
            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="Hello"></img>
            <div className="card-body">
              <h5 className="card-title">
                Jane Dow
              </h5>
              <p className="card-text">
                <ul className='list-unstyled'>
                  <li>ID:101</li>
                  <li>Major: Computer Science</li>
                  <li>Year: 2</li>
                  <li>GPA: 3.8</li>
                </ul></p>

              <button type="button" class="btn btn-outline-primary mx-1">View Profile</button>
              <button type="button" class="btn btn-outline-danger my-1">Delete</button>
              <button type="button" class="btn btn-outline-danger">.btn-outline-danger</button>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <nav className="d-flex justify-content-center align-items-center" aria-label="Page navigation example">
            <ul className="pagination mb-0">
              <li className="page-item">
                <p className="page-link text-black" href="#">Previous</p>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item" aria-current="page">
                <a className="page-link" href="#">2</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="alert alert-primary" role="alert">
          Student records have been successfully updated.
        </div>

      </div>

      <footer className="text-center text-lg-start bg-black text-white">


        <section className="pt-1">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Home</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Computer Science</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Courses</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Reports</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} StudentPortal: <a className="text-reset" href="#">All right reserved</a>
        </div>
      </footer>
    </>
  )
}

export default App
