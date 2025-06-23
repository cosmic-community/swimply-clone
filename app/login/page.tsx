'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'

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

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
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
    console.log('Login submitted:', formData)
    // Redirect to dashboard or previous page
    window.location.href = '/'
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
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
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Social Login */}
        <div className="bg-white rounded-2xl p-6 shadow-card">
          <div className="space-y-3">
            {socialProviders.map((provider) => (
              <button
                key={provider.name}
                onClick={() => handleSocialLogin(provider.name)}
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
              <span className="px-2 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-card space-y-6">
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
                placeholder="Enter your email"
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
                placeholder="Enter your password"
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

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn btn-primary py-3 text-lg flex items-center justify-center"
          >
            Sign in
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </form>

        {/* Demo Accounts */}
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <h3 className="text-sm font-semibold text-blue-900 mb-3">
            Demo Accounts (for testing)
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-700">Guest Account:</span>
              <span className="text-blue-600 font-mono">guest@demo.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-700">Host Account:</span>
              <span className="text-blue-600 font-mono">host@demo.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-700">Password:</span>
              <span className="text-blue-600 font-mono">demo123</span>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            🔒 Your information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  )
}