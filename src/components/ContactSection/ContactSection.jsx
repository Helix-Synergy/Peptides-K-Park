import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const API_URL = "http://localhost:5000"; // Replace with your live API URL

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
  const [status, setStatus] = useState({ success: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTab(initialTab);
    setStatus({ success: null, message: '' }); // Reset status on tab change
  }, [initialTab]);

  const goTab = (next) => {
    setTab(next);
    if (next === 'contact') navigate('/contact', { replace: false });
    if (next === 'student') navigate('/contact/register-student', { replace: false });
    if (next === 'faculty') navigate('/contact/register-faculty', { replace: false });
  };
  
  const handleFormSubmit = async (e, endpoint) => {
    e.preventDefault();
    const form = e.target;
    
    // Simple client-side validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setStatus({ success: null, message: '' });

    const formData = new FormData(form);

    try {
      const response = await fetch(`${API_URL}/api/${endpoint}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        form.reset();
      } else {
        setStatus({ success: false, message: data.message || 'Submission failed. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ success: false, message: 'An error occurred. Please check your network and try again.' });
    } finally {
      setIsSubmitting(false);
    }
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

      {/* Forms Area */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {status.message && (
          <div className={`p-4 mb-4 text-center rounded-lg font-bold ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {status.message}
          </div>
        )}

        {tab === 'contact' && (
          <div id="contact-form" className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-4">Let's Get Started!</h3>
            <form onSubmit={(e) => handleFormSubmit(e, 'contact')} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactName" className="text-sm font-semibold">Your Name<Required /></label>
                <input id="contactName" name="name" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-sm font-semibold">Your E-Mail<Required /></label>
                <input id="contactEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="contactMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="contactMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Enter your 10-digit mobile number" />
              </div>
              <div>
                <label htmlFor="contactCompany" className="text-sm font-semibold">Company/Organization</label>
                <input id="contactCompany" name="company" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Organization (optional)" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contactSubject" className="text-sm font-semibold">Subject<Required /></label>
                <input id="contactSubject" name="subject" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Subject" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contactMessage" className="text-sm font-semibold">Your Message<Required /></label>
                <textarea id="contactMessage" name="message" required rows={5} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Type your message..." />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
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
            <form onSubmit={(e) => handleFormSubmit(e, 'register-student')} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label htmlFor="studentFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="studentFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentLastName" className="text-sm font-semibold">Last Name<Required /></label>
                <input id="studentLastName" name="lastName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="studentMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label htmlFor="studentEmail" className="text-sm font-semibold">E‑Mail<Required /></label>
                <input id="studentEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="studentGender" className="text-sm font-semibold">Gender<Required /></label>
                <select id="studentGender" name="gender" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Address & Location */}
              <div className="md:col-span-2 mt-2 font-bold">Address & Location</div>
              <div className="md:col-span-2">
                <label htmlFor="studentAddress" className="text-sm font-semibold">Address<Required /></label>
                <input id="studentAddress" name="address" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentState" className="text-sm font-semibold">State<Required /></label>
                <select id="studentState" name="state" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
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
                <label htmlFor="studentCountry" className="text-sm font-semibold">Country<Required /></label>
                <input id="studentCountry" name="country" required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Academic/Professional Details */}
              <div className="md:col-span-2 mt-2 font-bold">Academic/Professional Details</div>
              <div>
                <label htmlFor="studentCollege" className="text-sm font-semibold">College/Industry<Required /></label>
                <input id="studentCollege" name="college" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentCourse" className="text-sm font-semibold">Course<Required /></label>
                <input id="studentCourse" name="course" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentArea" className="text-sm font-semibold">Area of Interest<Required /></label>
                <input id="studentArea" name="areaOfInterest" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentServices" className="text-sm font-semibold">Services<Required /></label>
                <select id="studentServices" name="services" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>Academic Assist</option>
                  <option>Corporate Astute</option>
                  <option>Career Saga</option>
                </select>
              </div>
              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-2 font-bold">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label htmlFor="studentHowYouKnow" className="text-sm font-semibold">How you know about us<Required /></label>
                <select id="studentHowYouKnow" name="howYouKnowAboutUs" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
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
                <label htmlFor="studentComment" className="text-sm font-semibold">Comment<Required /></label>
                <textarea id="studentComment" name="comment" required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Payment Details */}
              <div className="md:col-span-2 mt-2 font-bold">Payment Details</div>
              <div className="md:col-span-2">
                <label htmlFor="studentPayment" className="text-sm font-semibold">Upload payment screenshot to confirm Registration<Required /></label>
                <input id="studentPayment" name="paymentScreenshot" required type="file" accept=".jpg,.jpeg,.png" className="w-full mt-1" />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REGISTRATION'}
                </button>
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
            <form onSubmit={(e) => handleFormSubmit(e, 'register-faculty')} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label htmlFor="facultyFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="facultyFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyLastName" className="text-sm font-semibold">Last Name<Required /></label>
                <input id="facultyLastName" name="lastName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="facultyMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label htmlFor="facultyEmail" className="text-sm font-semibold">E‑Mail<Required /></label>
                <input id="facultyEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="facultyGender" className="text-sm font-semibold">Gender<Required /></label>
                <select id="facultyGender" name="gender" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Address & Location */}
              <div className="md:col-span-2 mt-2 font-bold">Address & Location</div>
              <div className="md:col-span-2">
                <label htmlFor="facultyAddress" className="text-sm font-semibold">Address<Required /></label>
                <input id="facultyAddress" name="address" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyState" className="text-sm font-semibold">State<Required /></label>
                <select id="facultyState" name="state" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
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
                <label htmlFor="facultyCountry" className="text-sm font-semibold">Country<Required /></label>
                <input id="facultyCountry" name="country" required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Professional Details */}
              <div className="md:col-span-2 mt-2 font-bold">Professional Details</div>
              <div>
                <label htmlFor="facultyCollege" className="text-sm font-semibold">College/University Name<Required /></label>
                <input id="facultyCollege" name="college" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyDepartment" className="text-sm font-semibold">Department<Required /></label>
                <input id="facultyDepartment" name="department" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyDesignation" className="text-sm font-semibold">Designation<Required /></label>
                <input id="facultyDesignation" name="designation" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyServices" className="text-sm font-semibold">Services<Required /></label>
                <select id="facultyServices" name="services" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>Academic Assist</option>
                  <option>Corporate Astute</option>
                  <option>Career Saga</option>
                </select>
              </div>
              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-2 font-bold">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label htmlFor="facultyHowYouKnow" className="text-sm font-semibold">How you know about us<Required /></label>
                <select id="facultyHowYouKnow" name="howYouKnowAboutUs" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
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
                <label htmlFor="facultyComment" className="text-sm font-semibold">Comment<Required /></label>
                <textarea id="facultyComment" name="comment" required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Payment Details */}
              <div className="md:col-span-2 mt-2 font-bold">Payment Details</div>
              <div className="md:col-span-2">
                <label htmlFor="facultyPayment" className="text-sm font-semibold">Upload payment screenshot to confirm Registration<Required /></label>
                <input id="facultyPayment" name="paymentScreenshot" required type="file" accept=".jpg,.jpeg,.png" className="w-full mt-1" />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REGISTRATION'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;