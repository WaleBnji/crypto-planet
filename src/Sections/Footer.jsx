// import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 pb-[10rem]'>
      <h1>Crypto Planet</h1>
      <div className="grid grid-cols-2">
        <div>
          <h1>Exchange</h1>
          <ul>
            <a href=''>
              <li>Exchange</li>
            </a>
            <a href=''>
              <li>Margin Trading</li>
            </a>
            <a href=''>
              <li>Derivative Trading</li>
            </a>
            <a href=''>
              <li>Supercharger</li>
            </a>
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul>
            <a href=''>
              <li>Request form</li>
            </a>
            <a href=''>
              <li>Contact support</li>
            </a>
            <a href=''>
              <li>FAQ</li>
            </a>
            <a href=''>
              <li>Security</li>
            </a>
          </ul>
        </div>
        <div>
          <h1>Company</h1>
          <ul>
            <a href=''>
              <li>ABout us</li>
            </a>
            <a href=''>
              <li>Careers</li>
            </a>
            <a href=''>
              <li>Security</li>
            </a>
            <a href=''>
              <li>News</li>
            </a>
          </ul>
        </div>
        <div>
          <h1>Resources</h1>
          <ul>
            <a href=''>
              <li>Downloads</li>
            </a>
            <a href=''>
              <li>Desktop Application</li>
            </a>
            <a href=''>
              <li>Buy crypto</li>
            </a>
            <a href=''>
              <li>Referral</li>
            </a>
          </ul>
        </div>
       
      </div>
      <div className="my-6">
      <h2>Newsletter</h2>
        <form action="post" className="space-x-2">
            <input type="email" name="email" id="email" className="bg-black text-white outline outline-1" placeholder="Enter your email"/>
            <button type="submit" className="btn px-2 py-[0.5rem] w-[15%] rounded-md">Send</button>
        </form>

      </div>
      <div>
        <h1>We accept the following payment system</h1>
        <div className="fc space-x-16 px-6">
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
        </div>
        <p>&copy; 2022 dynamic. All rights reserved</p>
        <div>
            <ul className="fcc space-x-16 ">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
