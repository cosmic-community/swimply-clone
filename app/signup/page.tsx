'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin } from 'lucide-react'

const socialProviders = [
  {
    name: 'Google',
    icon: '🔍',
    color: 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
  },
  {
    name: 'Facebook',
    icon: '📘',
    color: 'bg-blue-600 text-white hover:bg-blue-700'
  },
  {
    name: 'Apple',
    icon: '🍎',
    color: 'bg-black text-white hover:bg-gray-900'
  }
]

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState<'guest' | 'host'>('guest')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    agreeToMarketing: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { userType, ...formData })
    // Redirect to verification or dashboard
    window.location.href = userType === 'host' ? '/host' : '/listings'
  }

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`)
    // Handle social authentication
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Swimply Clone
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join thousands of people discovering amazing venues
          </p>
        </div>

        {/* User Type Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              I want to...
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('guest')}
                className={`relative rounded-xl p-4 text-left transition-all ${
                  userType === 'guest'
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="text-2xl mb-2">🏊</div>
                <div className="font-semibold text-gray-900">Book venues</div>
                <div className="text-sm text-gray-600">Find and rent spaces</div>
                {userType === 'guest' && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full" />
                )}
              </button>
              
              <button
                type="button"
                onClick={() => setUserType('host')}
                className={`relative rounded-xl p-4 text-left transition-all ${
                  userType === 'host'
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                }`}
              >
                <div className="text-2xl mb-2">🏡</div>
                <div className="font-semibold text-gray-900">List my venue</div>
                <div className="text-sm text-gray-600">Earn money hosting</div>
                {userType === 'host' && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Sign Up */}
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <div className="space-y-3">
            {socialProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => handleSocialSignUp(provider.name)}
                className={`w-full flex items-center justify-center px-4 py-3 rounded-lg border transition-colors ${provider.color}`}
              >
                <span className="mr-3 text-lg">{provider.icon}</span>
                Continue with {provider.name}
              </button>
            ))}
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-card space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input pl-10"
                  placeholder="John"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input pl-10"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="input pl-10"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="input pl-10"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="input pl-10 pr-10"
                placeholder="Create a strong password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input pl-10 pr-10"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-700">
                I agree to the{' '}
                <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="flex items-start">
              <input
                id="agreeToMarketing"
                name="agreeToMarketing"
                type="checkbox"
                checked={formData.agreeToMarketing}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="agreeToMarketing" className="ml-3 text-sm text-gray-700">
                Send me updates about new venues and special offers
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn btn-primary py-3 text-lg"
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-500 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}