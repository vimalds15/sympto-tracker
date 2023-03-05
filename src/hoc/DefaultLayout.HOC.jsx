import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const DefaultLayoutHOC = () => {
    
    return (props) => {
        return (
            <>
                <Navbar />
                <Footer />
            </>
        )
    }
}

export default DefaultLayoutHOC;
