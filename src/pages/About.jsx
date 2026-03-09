import { Target, Eye, Users, Award, Shield, TrendingUp } from 'lucide-react';

function About() {
  const team = [
    {
      name: 'Abebe Kebede',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    },
    {
      name: 'Sara Mekonnen',
      role: 'Sales Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    },
    {
      name: 'Dawit Tesfaye',
      role: 'Service Manager',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships through honest dealings and transparent processes.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every vehicle meets our rigorous quality standards before reaching our showroom.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We constantly improve our services to serve you better.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">About EthioCars</h1>
            <p className="text-xl text-gray-200">Driving Ethiopia Forward Since 2010</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-4">
              Founded in 2010, EthioCars began with a simple vision: to provide Ethiopians with access to quality vehicles at fair prices. What started as a small showroom in Addis Ababa has grown into one of the country's most trusted automotive dealers.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              Over the years, we've helped thousands of customers find their perfect vehicle, whether it's a family car, a business vehicle, or a rugged SUV for adventure. Our commitment to quality, transparency, and customer service has made us a household name in Ethiopian automotive retail.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we partner with the world's leading automotive manufacturers to bring you a diverse range of vehicles that are built to handle Ethiopian roads and climate conditions.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg"
              alt="Our showroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Target className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To provide Ethiopians with access to quality vehicles through transparent, fair, and customer-focused service. We strive to make vehicle ownership accessible and enjoyable for everyone.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Eye className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To be Ethiopia's most trusted automotive partner, setting the standard for excellence in vehicle sales and customer service across the nation.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Meet Our Team</h2>
          <p className="text-gray-600 text-lg text-center mb-12">
            Experienced professionals dedicated to your satisfaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
