import './Navbar.css';

// Division of Navbar
// -Navbar
//     -Navbar__left

//     -Navbar__right
//         -Product
//         -Download
//         -Pricing

// IMP For Navbar__right, flex-direction is row-REVERSE 
//So all the links Should be From Right side


function Navbar(){
    return (<div className="Navbar"> 
    <div className="Navbar__left">
        YourChallenge
    </div>
    <div className="Navbar__right">
        <a>Pricing</a> 
        <a>Download</a>
       <a  className="Navbar__rightProduct" >Product</a>
    </div>
    </div>);
}

export default Navbar;