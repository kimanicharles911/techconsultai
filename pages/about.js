import Layout from '../components/Layout';
import TeamMember from '../components/TeamMember';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTarget, FiGlobe } from 'react-icons/fi';
import { fadeIn, fadeInUp, staggerContainer, listItem } from '../utils/animations';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: "Charles Kimani",
      role: "Lead Engineer & Director",
      bio: "An experienced Software Engineer in Fintech Payments (B2B/C2B)| Banking | Telecommunications | Enterprise Integrations | ERP | Load Balancing | Databases | Change Management | Service Availability | Incident Management",
      linkedin: "https://www.linkedin.com/in/kimanicharles/",
      twitter: "https://twitter.com"
    },
    {
      name: "Mfadhili Gitau",
      role: "Lead Engineer",
      bio: "A seasoned software engineer with extensive experience across banking, fintech, and telecommunications industries. ",
      linkedin: "https://www.linkedin.com/in/mfadhili-gitau-0867472a2/"
    },
    {
      name: "Timothy Mutegi",
      role: "Lead Engineer",
      bio: "An experienced engineer in developing cloud-native solutions and AWS, having successfully delivered test automation platforms and distributed systems leveraging various AWS services. ",
      linkedin: "https://www.linkedin.com/in/timothy-mutegi/",
      twitter: "https://twitter.com"
    },
    {
      name: "Joshua Baru",
      role: "Lead AI & Data Science",
      bio: "An accomplished AI engineer and researcher whose work bridges the gap between theoretical machine learning and practical AI applications.",
      linkedin: "https://www.linkedin.com/in/joshua-baru/"
    },
  ];

  const values = [
    {
      icon: <FiAward className="text-primary text-3xl" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations."
    },
    {
      icon: <FiUsers className="text-primary text-3xl" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients, fostering partnerships that drive mutual success."
    },
    {
      icon: <FiTarget className="text-primary text-3xl" />,
      title: "Innovation",
      description: "We embrace innovation, constantly exploring new technologies and approaches to solve complex problems."
    },
    {
      icon: <FiGlobe className="text-primary text-3xl" />,
      title: "Impact",
      description: "We aim to create positive, lasting impact for our clients, their customers, and the broader community."
    }
  ];

  const stats = [
    { number: "1+", label: "Clients Served" },
    { number: "1+", label: "Projects Completed" },
    { number: "0", label: "Industry Awards" },
    { number: "5+", label: "Team Members" }
  ];

  return (
    <Layout 
      title="About Us" 
      description="Learn more about TechConsultAI.ke and our mission to empower businesses with innovative technology and AI solutions."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About <span className="text-accent">TechConsultAI.ke</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-200 mb-8"
            >
              Empowering businesses across Africa with innovative technology solutions and AI-driven transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" id="story">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2025, TechConsultAI.ke was born from a vision to bridge the technology gap facing businesses in Kenya and across Africa. Charles Kimani, having worked in the tech industry embarked on making technology and AI accessible to local businesses.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small consultancy has grown into a full-service technology and AI solutions provider, helping businesses of all sizes navigate the complex digital landscape and leverage technology for growth and innovation.
              </p>
              <p className="text-gray-700">
                Today, our team of experts works across multiple industries, bringing world-class technical expertise and local market knowledge to every project. We're proud to have played a role in the digital transformation of many leading businesses in East Africa.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50" id="values">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from how we work with clients to how we develop our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section" id="team">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together experience from leading global technology companies and deep local market knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                linkedin={member.linkedin}
                twitter={member.twitter}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 mb-6">
              Interested in joining our team? We're always looking for talented individuals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3"
              >
                Join Our Team
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business leverage technology and AI to achieve your goals.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}