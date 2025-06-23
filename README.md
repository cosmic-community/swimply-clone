<!-- README_START -->
# Swimply Clone

A beautiful and functional clone of Swimply.com - the marketplace for renting private pools, courts, and recreational spaces by the hour. Built with Next.js 15, TypeScript, and Tailwind CSS, powered by Cosmic CMS for content management.

## Features

- 🏊 Browse private pools, tennis courts, and basketball courts
- 🔍 Advanced search and filtering by location, category, and amenities
- 📅 Real-time booking system with availability checking
- 💰 Dynamic pricing and instant booking capabilities
- 🏡 Host profiles with verification badges and ratings
- 📱 Fully responsive design optimized for all devices
- 🎨 Beautiful UI matching Swimply's design language
- ⚡ Server-side rendering for optimal performance
- 🔒 TypeScript for type safety and better development experience

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=swimply-code-production)

## Original Prompt

This application was built based on the following request:

> Build a clone of https://swimply.com/

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic CMS
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the cloned bucket

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd swimply-clone
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to see the application.

## Cosmic SDK Examples

### Fetching Listings
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all active listings with related data
const listings = await cosmic.objects
  .find({ type: 'listings', 'metadata.listing_status.key': 'active' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get listings by category
const poolListings = await cosmic.objects
  .find({ type: 'listings', 'metadata.category': categoryId })
  .depth(1)
```

### Creating Bookings
```typescript
// Create a new booking
const booking = await cosmic.objects.insertOne({
  type: 'bookings',
  title: `Pool Booking - ${guestName}`,
  metadata: {
    booking_id: generateBookingId(),
    listing: listingId,
    guest_name: guestName,
    guest_email: guestEmail,
    booking_date: selectedDate,
    start_time: startTime,
    end_time: endTime,
    number_of_guests: guestCount,
    total_price: totalPrice,
    booking_status: { key: 'pending', value: 'Pending' }
  }
})
```

## Cosmic CMS Integration

This application integrates with Cosmic CMS to manage:

- **Listings**: Pool and court rentals with detailed metadata
- **Categories**: Pool, tennis court, and basketball court categories
- **Hosts**: Host profiles with verification and ratings
- **Locations**: Geographic locations for listings
- **Bookings**: Reservation management system

All content is managed through the Cosmic dashboard, allowing for easy updates without code changes.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set environment variables in Netlify dashboard

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json bun.lockb ./
RUN npm install -g bun && bun install
COPY . .
RUN bun run build
EXPOSE 3000
CMD ["bun", "start"]
```

For production deployment, ensure all environment variables are properly configured in your hosting platform.
<!-- README_END -->