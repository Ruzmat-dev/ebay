import React from 'react'
import "./style.scss"

const Footer = () => {
  return (
    <div>
        <hr />
        <div className="footer container">
            <div className="footer_wrapper">
                <div className="footer_menu_wrapper">
                    <ul>
                        <li>About eBay</li>
                        <li>Announcements</li>
                        <li>Community</li>
                        <li>Security Center</li>
                        <li>Seller Center</li>
                        <li>Policies</li>
                        <li>Affiliates</li>
                        <li>Help & Contact</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div className="footer_footer_wrapper">
                    <ul>
                        <p className='footer_copyright'>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                        <li>Accessibility,</li>
                        <li>User Agreement,</li>
                        <li>Privacy,</li>
                        <li>Payments Terms of Use,</li>
                        <li>Cookies,</li>
                        <li>Your Privacy Choices, and</li>
                        <li>AdChoice</li>
                        <li>@</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer