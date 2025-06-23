import { createBucketClient } from '@cosmicjs/sdk';
import { Listing, Category, Host, Location, Booking, SearchFilters } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all active listings
export async function getListings(filters?: SearchFilters): Promise<Listing[]> {
  try {
    let query: Record<string, any> = { 
      type: 'listings',
      'metadata.listing_status.key': 'active'
    };

    // Apply filters
    if (filters?.category) {
      query['metadata.category'] = filters.category;
    }
    if (filters?.location) {
      query['metadata.location'] = filters.location;
    }
    if (filters?.instantBook) {
      query['metadata.instant_book'] = true;
    }
    if (filters?.petFriendly) {
      query['metadata.pet_friendly'] = true;
    }

    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings');
  }
}

// Fetch a single listing by slug
export async function getListing(slug: string): Promise<Listing | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'listings',
        slug
      })
      .depth(1);
    
    return response.object as Listing;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch listing');
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch categories');
  }
}

// Fetch all locations
export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Location[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch locations');
  }
}

// Fetch featured locations
export async function getFeaturedLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'locations',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.objects as Location[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured locations');
  }
}

// Fetch listings by category
export async function getListingsByCategory(categoryId: string): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'listings',
        'metadata.category': categoryId,
        'metadata.listing_status.key': 'active'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings by category');
  }
}

// Fetch listings by location
export async function getListingsByLocation(locationId: string): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'listings',
        'metadata.location': locationId,
        'metadata.listing_status.key': 'active'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Listing[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch listings by location');
  }
}

// Create a new booking
export async function createBooking(bookingData: {
  listingId: string;
  guestName: string;
  guestEmail: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  numberOfGuests: number;
  totalPrice: number;
  specialRequests?: string;
}): Promise<Booking> {
  try {
    const bookingId = `SWM-${Date.now()}`;
    
    const response = await cosmic.objects.insertOne({
      type: 'bookings',
      title: `Pool Booking - ${bookingData.guestName}`,
      metadata: {
        booking_id: bookingId,
        listing: bookingData.listingId,
        guest_name: bookingData.guestName,
        guest_email: bookingData.guestEmail,
        booking_date: bookingData.bookingDate,
        start_time: bookingData.startTime,
        end_time: bookingData.endTime,
        number_of_guests: bookingData.numberOfGuests,
        total_price: bookingData.totalPrice,
        booking_status: { key: 'pending', value: 'Pending' },
        special_requests: bookingData.specialRequests || ''
      }
    });
    
    return response.object as Booking;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw new Error('Failed to create booking');
  }
}

// Search listings with text query
export async function searchListings(query: string): Promise<Listing[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'listings',
        'metadata.listing_status.key': 'active'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Filter results based on search query
    const listings = response.objects as Listing[];
    const filteredListings = listings.filter(listing => {
      const searchText = query.toLowerCase();
      return (
        listing.title.toLowerCase().includes(searchText) ||
        listing.metadata?.title?.toLowerCase().includes(searchText) ||
        listing.metadata?.description?.toLowerCase().includes(searchText) ||
        listing.metadata?.location?.metadata?.city?.toLowerCase().includes(searchText) ||
        listing.metadata?.category?.metadata?.name?.toLowerCase().includes(searchText)
      );
    });
    
    return filteredListings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to search listings');
  }
}