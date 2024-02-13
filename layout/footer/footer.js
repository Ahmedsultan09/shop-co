import React from "react";
import Logo from "../../ui/icons/shop-logo";
import SocialMediaIcon from "../../ui/icons/social-media-icon";

function Footer() {
  return (
    <footer className="w-full h-full flex lg:flex-row md:flex-col sm:flex-col vs:flex-col py-4 border-b border-gray-300 mb-2 ">
      <aside className="lg:w-1/4 md:w-full sm:w-full vs:w-full px-3 h-full py-4 gap-3 flex flex-col justify-center items-center lg:items-start">
        <Logo />
        <p className="w-full h-2/4 opacity-80 text-center lg:text-start">
          We have products that satisfies your needs, which you will be proud to
          have!
        </p>
        <div className="w-full h-1/4 flex flex-row lg:justify-start justify-center">
          {" "}
          <SocialMediaIcon x={true} />
          <SocialMediaIcon instgram={true} />
          <SocialMediaIcon gitHub={true} />
          <SocialMediaIcon faceBook={true} />
        </div>
      </aside>
      <aside className="lg:w-3/4 md:w-full sm:w-full vs:w-full h-full flex flex-row flex-wrap items-center justify-around">
        <div className="lg:w-1/4 md:w-1/2 sm:w-full vs:w-full py-2 lg:py-0 h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl font-bold text-center">COMPANY</h3>
          <div className="text-xl opacity-80">About</div>
          <div className="text-xl opacity-80">Features</div>
          <div className="text-xl opacity-80">Work</div>
          <div className="text-xl opacity-80">Careers</div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full vs:w-full py-2 lg:py-0 h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl font-bold text-center">HELP</h3>
          <div className="text-xl opacity-80">Customer Support</div>
          <div className="text-xl opacity-80">Delivery Details</div>
          <div className="text-xl opacity-80">Terms & Conditions</div>
          <div className="text-xl opacity-80">Privacy Policy</div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full vs:w-full py-2 lg:py-0 h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl font-bold text-center">FAQ</h3>
          <div className="text-xl opacity-80">Account</div>
          <div className="text-xl opacity-80">Manage Delivery</div>
          <div className="text-xl opacity-80">Orders</div>
          <div className="text-xl opacity-80">Payments</div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 sm:w-full vs:w-full py-2 lg:py-0 h-full flex flex-col gap-2 justify-center items-center">
          <h3 className="text-2xl font-bold text-center">RESOURCES</h3>
          <div className="text-xl opacity-80">Free eBooks</div>
          <div className="text-xl opacity-80">Development Tutorial</div>
          <div className="text-xl opacity-80">How to - Blog</div>
          <div className="text-xl opacity-80">Youtube Playlist</div>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
