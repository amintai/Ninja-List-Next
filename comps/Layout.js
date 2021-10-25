import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({children}) => {
    return ( 
        <div className='content'>
            <Navbar />
                {children}
                {/* it containes all the children pages inside layout in _app.js */}

            <Footer />
        </div>
     );
}
 
export default Layout;