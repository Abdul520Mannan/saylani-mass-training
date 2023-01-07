import logo from '../assets/images/logo.png';

function Footer() {
    return (<footer className='container mt-5'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-12'>
                <div className='footer-logo'>
                    <img src={logo} width="200px" />
                    <p>Saylani Welfare Trust is a name that needs no introduction today</p>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
                <h4 className='footer-link-title'>Community</h4>
                <ul className='footer-link'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Courses</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-12'>
                <h4 className='footer-link-title'>Links</h4>
                <ul className='footer-link'>
                    <li>Membership</li>
                    <li>Our team</li>
                    <li>Privacy Policy</li>
                    <li>Terms of services</li>
                </ul>
            </div>
        </div>
    </footer>);
}

export default Footer;