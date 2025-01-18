






const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <div className="text-green-500 text-2xl font-bold">Social Impulse</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-green-500 text-xl">Home</a>
          <a href="#services" className="text-white hover:text-green-500 text-xl">Services</a>
          <a href="#about" className="text-white hover:text-green-500 text-xl">About</a>          
          {/* <a href="#testimonials" className="text-white hover:text-green-500 text-xl">Testimonials</a> */}
        </div>
        <a href="#form" className="text-white hover:text-green-500">
        <button className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400">
          Contact Us
        </button>
        </a>
        
      </nav>

      {/* Hero Section */}
      <div id="home" className="  pt-8 px-6">
        
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white">
              Transform Your<br />
              <span className="text-green-500">Digital Presence</span>
            </h1>
            <p className="text-gray-300 text-xl">
              We craft innovative digital marketing strategies that drive growth and deliver results.
            </p>
            <div className="space-x-4">
              <button className="bg-green-500 text-black px-8 py-3 rounded-full hover:bg-green-400">
                Get Started
              </button>
              <button className="border border-green-500 text-green-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-black">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-green-500 text-4xl font-bold">100+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-green-500 text-4xl font-bold">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-green-500 text-4xl font-bold">10x</div>
              <div className="text-gray-300">ROI Average</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-green-500 text-4xl font-bold">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>


      </div>





        
        <div>
    {/* services */}
    <div id="services" className="pt-6 pb-20">
    <div className="container mx-auto p-8 ">
  <h2 className="text-3xl font-bold text-center mb-4 text-green-500">Our Services</h2>
  <p className="text-xl text-center mb-8 text-gray-300">Elevate your brand with our comprehensive digital marketing solutions</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      {/* <img src="social-media-icon.png" alt="Social Media" className="mx-auto mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2 text-green-500">Social Media Marketing</h3>
      <p className="text-gray-300 mb-4">Strategic social media campaigns that engage your audience and drive meaningful interactions.</p>
      <ul className="list-disc pl-4 text-gray-400">
        <li>Content Strategy</li>
        <li>Community Management</li>
      </ul>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      {/* <img src="seo-icon.png" alt="SEO" className="mx-auto mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2 text-green-500">SEO Optimization</h3>
      <p className="text-gray-300 mb-4">Data-driven SEO strategies to improve your search rankings and organic visibility.</p>
      <ul className="list-disc pl-4 text-gray-400">
        <li>Keyword Research</li>
        <li>On-Page Optimization</li>
      </ul>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      {/* <img src="content-marketing-icon.png" alt="Content Marketing" className="mx-auto mb-4" /> */}
      <h3 className="text-xl font-semibold mb-2 text-green-500">Content Marketing</h3>
      <p className="text-gray-300 mb-4">Compelling content that tells your brand story and connects with your target audience.</p>
      <ul className="list-disc pl-4 text-gray-400">
        <li>Blog Writing</li>
        <li>Email Marketing</li>
      </ul>
    </div>
  </div>
</div>

    </div>
             
    


  </div>










        {/* About Section */}
        <div id="about" className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-500 pb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Social Impulse is a dynamic digital marketing agency driven by innovation and results. 
                With years of experience and a passion for digital excellence, we help businesses 
                transform their online presence and achieve remarkable growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-green-500 text-3xl font-bold">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-green-500 text-3xl font-bold">100+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-green-500 text-3xl font-bold">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-green-500 text-3xl font-bold">150+</div>
                  <div className="text-gray-300">Projects delivered</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-green-500 text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with innovative digital solutions that drive growth 
                  and create lasting impact in the digital landscape.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-green-500 text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading force in digital transformation, setting new standards 
                  in marketing excellence and client success.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div className="py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
              <p className="text-gray-300">
                Ready to transform your digital presence? Contact us today for a free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-800 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-gray-300"> Chandigarh </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-800 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-gray-300">info@socialimpulse.com</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-800 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-gray-300">+ 91 84273 90415</div>
                </div>
              </div>
              
            </div>

            <form id="form" className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
              ></textarea>
              <button className="w-full bg-green-500 text-black py-4 rounded-lg hover:bg-green-400">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-2 text-center text-gray-400">
            <p>© 2025 Social Impulse. All rights reserved.</p>
          </div>
    </div>
  );
};



export default App;


