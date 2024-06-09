import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Message</label>
            <textarea className="w-full mt-2 p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
