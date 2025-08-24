'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
  service: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', phone: '', message: '', service: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <h3 className="text-2xl font-semibold text-primary-purple mb-6">Send Us a Message</h3>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you for your inquiry! We'll contact you within 24 hours.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          There was an error submitting your form. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
            className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company Name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
          />
        </div>
        <select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all"
        >
          <option value="">Select Service of Interest</option>
          <option value="feasibility">Feasibility/Bankability Studies</option>
          <option value="incentive">Incentive Advisory</option>
          <option value="strategy">Project Strategy</option>
          <option value="epc">EPC Introductions</option>
          <option value="vendor">Vendor Evaluations</option>
          <option value="risk">Risk Mitigation</option>
          <option value="other">Other</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          placeholder="Tell us about your project or challenge..."
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-orange focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-orange text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail className="h-5 w-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  )
}