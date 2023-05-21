const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content sticky top-[100vh] bg-gradient-to-l from-indigo-500 to-indigo-000 rounded-lg text-yellow-900 text-sm font-semibold">
        <div>
        <img className='rounded-lg' src="https://i.ibb.co/mGcZ88J/image.png" alt="" />
          <p>Educational Toy Market.<br/>Providing reliable tech since 2023</p>
          <br />
          <p>copyright © </p>
        </div> 
        <div>
          <span className="footer-title font-bold">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;