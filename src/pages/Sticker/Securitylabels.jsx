import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Custom/images/logo.png';
import searchIcon from '../Custom/images/search.png';
import Footer from '../../components/Footer';
const Securitylabels = () => {
    return (
        <>
          
            <div className="main_headers">
        <div className="main_data">
          <div className="main_header">
            <div className="header">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                  <div className="main_header_com">
                    <Link to="/">
                      <img
                        alt=""
                        loading="lazy"
                        width="114"
                        height="85"
                        decoding="async"
                        data-nimg="1"
                        className="logo"
                        src={Logo}
                        style={{ color: "transparent" }}
                      />
                    </Link>
                    <button
                      aria-controls="navbarScroll"
                      type="button"
                      aria-label="Toggle navigation"
                      className="navbar-toggler collapsed"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarScroll">
                      <div
                        className="m-auto my-2 my-lg-0 false navbar-nav navbar-nav-scroll"
                        style={{ maxHeight: "100px" }}
                      >
                        <Link
                          className=" "
                          to="/Custom"
                          style={{ color: "black" }}
                        >
                          Custom Packaging
                        </Link>
                        <Link
                          className=" "
                          to="/Sticker"
                          style={{ color: "black" }}
                        >
                          Stickers &amp; Labels
                        </Link>
                        <Link
                          className=" "
                          to="/About"
                          style={{ color: "black" }}
                        >
                          About
                        </Link>
                        <Link
                          className=" "
                          to="/Career"
                          style={{ color: "black" }}
                        >
                          Careers
                        </Link>
                        <Link
                          className=" "
                          to="/Contacts"
                          style={{ color: "black" }}
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                    <div className="search_fields false">
                      <div className="search_icon">
                        <img
                          alt="search"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          data-nimg="1"
                          src={searchIcon}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <Link to="tel: 923103330109">
                        <button
                          type="button"
                          className="call_us btn btn-primary"
                          style={{ backgroundColor: "black", color: "white" }}
                        >
                          Contact Us
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="hide">
              <div className="hover_search">
                <div className="container">
                  <div className="search_item">
                    <input
                      type="text"
                      placeholder="Search your product"
                      value=""
                    />
                    <div
                      className="srach_data"
                      style={{ display: "flex" }}
                    ></div>
                    <img
                      alt="search"
                      loading="lazy"
                      width="55"
                      height="55"
                      decoding="async"
                      data-nimg="1"
                      src="/images/blackarrow.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="responsive_header index1">
            <div className="topbar">
              <div className="logo">
                <Link to="/">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="64"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="/images/logoblack.png"
                    style={{ color: "transparent" }}
                  />
                </Link>
              </div>
              <div className="icons">
                <div>
                  <img
                    alt="search"
                    loading="lazy"
                    width="27"
                    height="27"
                    decoding="async"
                    data-nimg="1"
                    src="/images/search.png"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div>
                  <img
                    alt="menu"
                    loading="lazy"
                    width="27"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="/images/icons/menu.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hide_res">
          <div className="hover_search2">
            <div className="container">
              <div className="search_item">
                <input type="text" placeholder="Search your product" value="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hide_res2">
          <div className="topbar topbar3">
            <div className="logo"></div>
            <div className="icons">
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="hover_search3">
            <div className="search_item">
              <div className="container">
                <input type="text" placeholder="Search your product" />
                <img
                  alt="search"
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  data-nimg="1"
                  src="/images/blackarrow.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_navigation hidden">
          <div>
            <div className="topbar topbar3">
              <div className="logo">
                <Link to="/">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="64"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="/images/B_logo.png"
                    style={{ color: "transparent" }}
                  />
                </Link>
              </div>
              <div className="icons">
                <div>
                  <img
                    alt="menu"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="/images/icons/cross.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
            <div className="menu">
              <div>
                <h4>
                  Need Help{" "}
                  <span>
                    <img
                      alt=""
                      loading="lazy"
                      width="10"
                      height="10"
                      decoding="async"
                      data-nimg="1"
                      src="/images/icons/question.svg"
                      style={{ color: "transparent" }}
                    />
                  </span>
                </h4>
                <hr />
                <ul>
                  <Link className="non_active" to="/Custom">
                    <div>Custom Packaging</div>
                  </Link>
                  <Link className="non_active" to="/Sticker">
                    <div>Stickers &amp; Labels</div>
                  </Link>
                  <Link className="non_active" to="/About">
                    <div>About</div>
                  </Link>
                  <Link className="non_active" to="/career">
                    <div>Careers</div>
                  </Link>
                  <Link className="non_active" to="/contacts">
                    <div>Contact</div>
                  </Link>
                </ul>
                <hr />
              </div>
              <div className="Quick_links">
                <h4>Quick Links</h4>
                <div>
                  <div className="Links">
                    <h3>Packaging</h3>
                    <h3>Stickers</h3>
                  </div>
                </div>
              </div>
              <div className="social_links">
                <div className="social_icons">
                  <Link to="/[id]">
                    <div className="icons_fb">
                      <img
                        alt="fb_icon"
                        loading="lazy"
                        width="9.28"
                        height="17.24"
                        decoding="async"
                        data-nimg="1"
                        src="/images/icons/fb.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </Link>
                  <Link to="/[id]">
                    <div className="icons_insta">
                      <img
                        alt="insta_icon"
                        loading="lazy"
                        width="14.43"
                        height="14.43"
                        decoding="async"
                        data-nimg="1"
                        src="/images/icons/insta.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </Link>
                  <Link to="/[id]">
                    <div className="icons_linked">
                      <img
                        alt="linkedIn_icon"
                        loading="lazy"
                        width="12.84"
                        height="12.84"
                        decoding="async"
                        data-nimg="1"
                        src="/images/icons/linked.png"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                <div className="main_mailer_Banner">
                    <div className="mailer" style={{height: 'auto'}}>
                        <div>
                            <div className="mailer_image_placeholder" style={{height: 'auto'}}>
                            </div>
                            <img className="mailer_image  show" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/Security%20Label.webp?alt=media&token=dab8aa7a-d094-4fc5-a055-33c1dbc0577e" alt="Advertising Boxes" />
                        </div>
                    </div>
                    <div className="main_small_mailer" style={{cursor: 'pointer'}}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/Security%20Label.png?alt=media&token=2ae214dd-f0e5-4208-af38-be1e52594d8c" width="68" height="68" alt="Advertising Boxes" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/Security%20Labels%201.png?alt=media&token=f9c7b7fc-27ea-47c5-951a-0466267f100d" width="68" height="68" alt="Advertising Boxes" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/Security%20Labels.png?alt=media&token=e0723fd8-b537-444f-98c4-a0ac532b0b73" width="68" height="68" alt="Advertising Boxes" />
                    </div>
                    <div className="main_small_detail">
                        <div data-nosnippet="true" className="mail_box">
                            <h2>
                                Security Labels</h2>
                            <div className="value_description">
                                <p>
                                </p>
                                <div>
                                    <div className="value_description">
                                        <div className="size heading">
                                            <div className="">
                                                <p className="heading">
                                                    Size:</p>
                                            </div>
                                            <div>
                                                <p>
                                                    All Custom Sizes, Shapes, and Card Thickness</p>
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div>
                                                <p className="heading">
                                                    Color:</p>
                                            </div>
                                            <div>
                                                <p>
                                                    PMS (Pantone Matching System), CMYK Printing Process</p>
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div>
                                                <p className="heading">
                                                    Material: </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Bleach Board, Art Board, Grey Back Board, Card Board</p>
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div>
                                                <p className="heading">
                                                    Finishing: </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Soft Touch lamination, Gloss UV, Matte UV, Drip OFF, Soft Lamination, Spot-UV, Hot Foiling, Embossing</p>
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div>
                                                <p className="heading">
                                                    Extra Finishing: </p>
                                            </div>
                                            <div>
                                                <p>
                                                    Deep Embossing, 3D Printing, Micro Laser Embossing, Glitter Finishing</p>
                                            </div>
                                        </div>
                                        <div className="size">
                                            <div>
                                                <p className="heading">
                                                    Options:</p>
                                            </div>
                                            <div>
                                                <p>
                                                    Custom Window Cut Out, Gold/Silver Foiling</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Link to="/quote?category=packaging&amp;product=advertising-boxes">
                                <button type="button" className="btn btn-primary">
                                    Get a free quote</button>
                            </Link> */}
                        </div>
                    </div>
                </div>
                <div className="main_mailer_unboxx">
                    <div className="adjust_wid">
                        <div className="mailer_head_para">
                            <p className="mailer_para1">
                                <h1>Security Labels</h1>
                            </p>
                            <div style={{display: 'flex', justifyContent: 'MozContextProperties', marginTop: '20px'}}>
                            </div>
                        </div>
                        <div class="main_foldandflap">
                            <img class="fold_flap" src="https://firebasestorage.googleapis.com/v0/b/biotech-c9081.appspot.com/o/product-detail_image%2FAugust_2023%2FMATERIAL.webpMon%20Aug%2028%202023%2017%3A47%3A33%20GMT%2B0500%20(Pakistan%20Standard%20Time)?alt=media&amp;token=5a318be5-c697-4b00-9ff0-b0a72f2fcbf0" layout="fill" objectfit="cover" objectposition="center"/>
                            </div>
                        <div className="main_specs " style={{paddingBottom: '100px'}}>
                            <h3>
                            </h3>
                            <p>
                            </p>
                            <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                                <p>
                                </p>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                
           <Footer/>
        </>

    );
};
export default Securitylabels;