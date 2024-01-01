import React from 'react'
import Portrait from '../assets/images/Portrait-1.jpg'
import { Link } from 'react-router-dom'

const ConsultingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      {/* Introduction Section */}
      <div className="text-center py-12"> {/* Increased padding */}
        <h1 className="text-4xl font-bold text-blue-600"> {/* Added text color */}
          Ryan Hein - Software Engineering Consultant
        </h1>
        <p className="text-lg mt-4 text-gray-600"> {/* Added text color and adjusted font size */}
          With a remarkable journey spanning over two decades in software engineering, I've led numerous successful projects across diverse domains.
        </p>
      </div>

      {/* Areas of Expertise Section with Portrait */}
      <div className="flex flex-col md:flex-row items-center py-6">
        <div>
          <h2 className="text-3xl font-bold">Areas of Expertise</h2>
          <img
            src={Portrait}
            alt="Ryan Hein"
            className="rounded-lg shadow-lg max-h-96 mb-4 md:mb-0 ml-8 mb-8"
            style={{ maxHeight: '400px', float: 'right' }}
          />
          <p className="mt-4">
            My expertise encompasses a wide range of skills vital in today's
            technology landscape. It includes advanced programming languages
            such as Java, Python, and JavaScript, as well as full-stack
            development with an emphasis on scalable and efficient solutions. I
            excel in cloud computing services, specializing in AWS and Azure, to
            ensure robust and secure infrastructure. Additionally, my work in AI
            and Machine Learning empowers businesses with cutting-edge
            technology for a competitive advantage.
          </p>
          <p className="mt-4">
            Kubernetes is one of my primary focuses, enabling organizations to
            efficiently manage and scale their containerized applications. I
            have hands-on experience in Kubernetes deployment, maintenance, and
            optimization, ensuring seamless container orchestration for your
            projects.
          </p>
          <p className="mt-4">
            Another area of expertise is DevOps practices, where I streamline
            development pipelines, implement CI/CD processes, and automate
            infrastructure provisioning. By fostering a culture of collaboration
            and automation, I drive increased efficiency and faster
            time-to-market for your projects.
          </p>
          <p className="mt-4">
            As a seasoned leader in Agile methodologies, I excel in streamlining
            project delivery timelines and enhancing team productivity. My
            approach involves close collaboration with clients and stakeholders,
            ensuring that project deliverables are well-aligned with business
            objectives and client expectations.
          </p>
          <p className="mt-4">
            My role is not just to advise but to actively contribute to the
            success of your projects. Whether you're a startup or an established
            enterprise, my services are designed to catalyze growth and drive
            innovation, ensuring that your business stays ahead in the
            ever-evolving digital landscape.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-6">
        <h2 className="text-3xl font-bold">Consulting Services</h2>
        <p className="mt-4">
          With over two decades in the software engineering field, I bring a
          comprehensive skill set to the table. My experience ranges from
          advanced programming languages like Java, Python, and JavaScript to
          full-stack development. I have a proven track record of creating
          robust and secure infrastructure with cloud computing services such as
          AWS and Azure.
        </p>
        <p className="mt-4">
          I am a seasoned leader in Agile methodologies, specializing in
          streamlining project delivery timelines and enhancing team
          productivity. My collaborative approach with clients and stakeholders
          ensures that project deliverables are well-aligned with business
          objectives and client expectations.
        </p>
        <p className="mt-4">
          My expertise also extends to AI and Machine Learning, enabling
          businesses to leverage cutting-edge technology for a competitive
          advantage. Whether it's developing custom software solutions,
          conducting system audits for performance optimization, or providing
          strategic project management, my services are tailored to meet the
          unique needs of each client.
        </p>
        <p className="mt-4">
          My role is not just to advise but to actively contribute to the
          success of your projects. Whether you're a startup or an established
          enterprise, my services are designed to catalyze growth and drive
          innovation, ensuring that your business stays ahead in the
          ever-evolving digital landscape.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <div className="flex space-x-4">
          {/* Basic Plan */}
          <div className="pricing-card p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold">Basic</h3>
            <p>Perfect for small projects and teams looking for guidance...</p>
            <p className="font-bold">$1,000/month</p>
          </div>
          {/* Standard Plan */}
          <div className="pricing-card p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold">Standard</h3>
            <p>
              Ideal for mid-sized projects requiring more in-depth
              involvement...
            </p>
            <p className="font-bold">$2,500/month</p>
          </div>
          {/* Premium Plan */}
          <div className="pricing-card p-4 border rounded-lg shadow-lg">
            <h3 className="font-bold">Premium</h3>
            <p>Comprehensive support for large scale projects and teams...</p>
            <p className="font-bold">$5,000/month</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 mb-8">
        <p className="text-lg text-gray-600 mb-8">
          Ready to supercharge your projects with my expertise?
        </p>
        <Link to="/contact" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default ConsultingPage
