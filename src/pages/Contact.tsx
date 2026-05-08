import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'Redeemer\'s University, Ede, Osun State, Nigeria',
    subtext: 'Located in a serene environment conducive for learning',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+234 704 448 2305',
    subtext: 'Monday - Friday, 8:00 AM - 5:00 PM',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@run.edu.ng',
    subtext: 'We\'ll respond within 24 hours',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Mon - Fri: 8:00 AM - 5:00 PM',
    subtext: 'Weekends: Closed',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/DJI_0702-scaled.jpg"
            alt="Contact Us"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a365d]" />
        </motion.div>
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label">Get in Touch</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Contact Us
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              We'd love to hear from you. Reach out to us for any inquiries or assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#c9a227]/20"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a365d] flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Send Message</span>
              <h2 className="text-2xl font-serif font-semibold mt-3 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for contacting us. We'll respond shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academic">Academic Matter</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Map — real Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Location</span>
              <h2 className="text-2xl font-serif font-semibold mt-3 mb-6">Find Us</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2!2d4.45!3d7.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039598b0cad0001%3A0x72a6e1b3e4d3c76e!2sRedeemer&#39;s%20University!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Redeemer's University Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Departments</span>
            <h2 className="text-2xl font-serif font-semibold mt-3 mb-4">Department Contacts</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { title: 'Admissions Office', email: 'admissions@run.edu.ng', phone: '+234 704 448 2306' },
              { title: 'Student Affairs', email: 'studentaffairs@run.edu.ng', phone: '+234 704 448 2307' },
              { title: 'Bursary', email: 'bursary@run.edu.ng', phone: '+234 704 448 2308' },
            ].map((dept, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#f8fafc] rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#c9a227]/20"
              >
                <h3 className="text-lg font-semibold mb-3">{dept.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{dept.email}</p>
                <p className="text-gray-600 text-sm">{dept.phone}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
