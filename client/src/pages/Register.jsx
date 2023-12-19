import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import{toast} from 'react-toastify';


const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState(''); // Add fullname state
  const [phone, setPhone] = useState(''); // Add phone state

  const handleSubmit= async(e)=> {
          e.preventDefault();
          try {
            const res = await axios.post('/api/v1/auth/register', {
              fullname,
              email,
              password,
              phone
            });
            if (res && res.data.success) {
              alert(res.data && res.data.message);
              navigate("/login");
            } else {
              alert(res.data.message);
            }
          } catch (error) {
            console.log(error);
            alert("Successfull");
            setEmail('')
            setPassword('')
            navigate("/");
          }
        };
    
    

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Full Name">Full Name</label>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  type="string"
                  value={fullname}
                  className="form-control"
                  id="name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Phone">Phone Number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="Number"
                  value={phone}
                  className="form-control"
                  id="number"
                  placeholder="12345467891"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
