import  { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phno: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/21362938/2k98lk5/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <div className="text-green-500 text-2xl font-bold">Social Impulse</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-green-500 text-xl">Home</a>
          <a href="#services" className="text-white hover:text-green-500 text-xl">Services</a>
          <a href="#about" className="text-white hover:text-green-500 text-xl">About</a>
        </div>
        <a href="#form" className="text-white hover:text-green-500">
          <button className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400">
            Contact Us
          </button>
        </a>
      </nav>

      {/* Hero Section */}
      <div id="home" className="pt-8 px-6">
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
      </div>

      {/* Services Section */}
      <div id="services" className="pt-6 pb-20">
        <div className="container mx-auto p-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-green-500">Our Services</h2>
          <p className="text-xl text-center mb-8 text-gray-300">
            Elevate your brand with our comprehensive digital marketing solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-green-500">Social Media Marketing</h3>
              <p className="text-gray-300 mb-4">Strategic social media campaigns that engage your audience and drive meaningful interactions.</p>
              <ul className="list-disc pl-4 text-gray-400">
                <li>Content Strategy</li>
                <li>Community Management</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-green-500">SEO Optimization</h3>
              <p className="text-gray-300 mb-4">Data-driven SEO strategies to improve your search rankings and organic visibility.</p>
              <ul className="list-disc pl-4 text-gray-400">
                <li>Keyword Research</li>
                <li>On-Page Optimization</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
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

      {/* About Section */}
      <div id="about" className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-500 pb-8">About</h2>
        <p className="text-gray-300 text-lg text-center">
          Social Impulse is a dynamic digital marketing agency driven by innovation and results. We help businesses transform their online presence and achieve remarkable growth.
        </p>
      </div>

      {/* Contact Section */}
      <div id="form" className="py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
            <p className="text-gray-300">
              Ready to transform your digital presence? Contact us today for a free consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="phno"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Mobile number"
              className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="city"
              value={formData.message}
              onChange={handleChange}
              placeholder="city"
              rows={4}
              className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button className="w-full bg-green-500 text-black py-4 rounded-lg hover:bg-green-400">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-2 text-center text-gray-400">
        <p>© 2025 Social Impulse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
