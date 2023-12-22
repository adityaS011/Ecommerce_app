
import React, { useState } from 'react';
import { Footer, Navbar } from '../components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState(''); // Add fullname state
  const [phone, setPhone] = useState(''); // Add phone state
  const navigate = useNavigate();
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
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  value={fullname}
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Phone No.</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  value={phone}
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  onSubmit={handleSubmit}
                >
                  Send
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

export default ContactPage;
