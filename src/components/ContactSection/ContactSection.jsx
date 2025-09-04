import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Required = () => <span className="ml-1 text-red-600">*</span>;

const ToggleButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-bold transition shadow ${
      active ? 'ring-2 ring-[#b89c6b]' : ''
    }`}
    style={{ backgroundColor: active ? '#b89c6b' : '#e6ebf3', color: '#714819' }}
    type="button"
  >
    {children}
  </button>
);

const ContactSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialTab = useMemo(() => {
    if (location.pathname.includes('register-student')) return 'student';
    if (location.pathname.includes('register-faculty')) return 'faculty';
    return 'contact';
  }, [location.pathname]);

  const [tab, setTab] = useState(initialTab);
  useEffect(() => setTab(initialTab), [initialTab]);

  const goTab = (next) => {
    setTab(next);
    if (next === 'contact') navigate('/contact', { replace: false });
    if (next === 'student') navigate('/contact/register-student', { replace: false });
    if (next === 'faculty') navigate('/contact/register-faculty', { replace: false });
  };

  return (
    <section className="w-full" style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
      {/* Page Title banner (simple) */}
      <div className="w-full h-56 md:h-72 relative overflow-hidden">
        <img
          src="https://img.freepik.com/free-photo/people-working-call-center_23-2149288188.jpg?w=1200"
          alt="Contact banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-3">Contact Us</h1>
          {/* Top contact info moved here as requested */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-white/90 text-sm md:text-base">
            <div className="flex items-center gap-2"><Phone className="w-5 h-5" /> <span>+91 79970 40959</span> <span className="hidden sm:inline">• Mon to Fri: 9.30am to 6.30pm</span></div>
            <div className="flex items-center gap-2"><Mail className="w-5 h-5" /> <span>hello@peptides.co.in</span> <span className="hidden sm:inline">• Mail Us For More Information</span></div>
          </div>
        </div>
      </div>

      {/* Header + Buttons */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Have a question to ask us?</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          We value your inquiries and feedback. Fill out the form or choose a registration option.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ToggleButton active={tab === 'contact'} onClick={() => goTab('contact')}>Contact</ToggleButton>
          <ToggleButton active={tab === 'student'} onClick={() => goTab('student')}>Student Registration</ToggleButton>
          <ToggleButton active={tab === 'faculty'} onClick={() => goTab('faculty')}>Faculty Registration</ToggleButton>
        </div>
      </div>

      {/* Forms Area only (left info panel removed) */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {tab === 'contact' && (
          <div id="contact-form" className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-4">Let's Get Started!</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Your Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-semibold">Your E-Mail<Required /></label>
                <input required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-semibold">Mobile<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Enter your 10-digit mobile number" />
              </div>
              <div>
                <label className="text-sm font-semibold">Company/Organization</label>
                <input className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Organization (optional)" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Subject<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Subject" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Your Message<Required /></label>
                <textarea required rows={5} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Type your message..." />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-6 py-3 rounded-lg font-bold" style={{ backgroundColor: '#b89c6b', color: '#714819' }}>Send Message</button>
              </div>
            </form>
          </div>
        )}

        {tab === 'student' && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-6">To become a Member at Peptides Knowledge Park</h3>

            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Scan & Pay</h4>
              <img
                src="https://placehold.co/400x400/E5E7EB/4B5563?text=QR+Code"
                alt="Payment QR Code"
                className="mx-auto w-64 md:w-80 rounded-lg shadow"
              />
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Please scan the QR to complete payment. After successful transaction, kindly upload the payment
                receipt below to confirm your Registration.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label className="text-sm font-semibold">First Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Last Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Mobile<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label className="text-sm font-semibold">E‑Mail<Required /></label>
                <input required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Gender<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address & Location */}
              <div className="md:col-span-2 mt-2 font-bold">Address & Location</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Address<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">State<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Country<Required /></label>
                <input required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              {/* Academic/Professional Details */}
              <div className="md:col-span-2 mt-2 font-bold">Academic/Professional Details</div>
              <div>
                <label className="text-sm font-semibold">College/Industry<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Course<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Area of Interest<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Services<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>Academic Assist</option>
                  <option>Corporate Astute</option>
                  <option>Career Saga</option>
                </select>
              </div>

              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-2 font-bold">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">How you know about us<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select an option</option>
                  <option>Social Media</option>
                  <option>Friend/Colleague</option>
                  <option>Online Search</option>
                  <option>Advertisement</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Comment<Required /></label>
                <textarea required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              {/* Payment Details */}
              <div className="md:col-span-2 mt-2 font-bold">Payment Details</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Upload payment screenshot to confirm Registration<Required /></label>
                <input required type="file" accept=".jpg,.jpeg,.png" className="w-full mt-1" />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-6 py-3 rounded-lg font-bold" style={{ backgroundColor: '#b89c6b', color: '#714819' }}>Submit Registration</button>
              </div>
            </form>
          </div>
        )}

        {tab === 'faculty' && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-6">Registration for Faculty Members at Peptides Knowledge Park</h3>

            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Scan & Pay</h4>
              <img
                src="https://placehold.co/400x400/E5E7EB/4B5563?text=QR+Code"
                alt="Payment QR Code"
                className="mx-auto w-64 md:w-80 rounded-lg shadow"
              />
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Please scan the QR to complete payment. After successful transaction, kindly upload the payment
                receipt below to confirm your Registration.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label className="text-sm font-semibold">First Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Last Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Mobile<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label className="text-sm font-semibold">E‑Mail<Required /></label>
                <input required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Gender<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Address & Location */}
              <div className="md:col-span-2 mt-2 font-bold">Address & Location</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Address<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">State<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold">Country<Required /></label>
                <input required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              {/* Professional Details */}
              <div className="md:col-span-2 mt-2 font-bold">Professional Details</div>
              <div>
                <label className="text-sm font-semibold">College/University Name<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Department<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Designation<Required /></label>
                <input required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label className="text-sm font-semibold">Services<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>Academic Assist</option>
                  <option>Corporate Astute</option>
                  <option>Career Saga</option>
                </select>
              </div>

              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-2 font-bold">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">How you know about us<Required /></label>
                <select required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select an option</option>
                  <option>Social Media</option>
                  <option>Friend/Colleague</option>
                  <option>Online Search</option>
                  <option>Advertisement</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Comment<Required /></label>
                <textarea required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              {/* Payment Details */}
              <div className="md:col-span-2 mt-2 font-bold">Payment Details</div>
              <div className="md:col-span-2">
                <label className="text-sm font-semibold">Upload payment screenshot to confirm Registration<Required /></label>
                <input required type="file" accept=".jpg,.jpeg,.png" className="w-full mt-1" />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button type="submit" className="px-6 py-3 rounded-lg font-bold" style={{ backgroundColor: '#b89c6b', color: '#714819' }}>Submit Registration</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
