// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Category interface
export interface Category extends CosmicObject {
  type_slug: 'categories';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
  };
}

// Host interface
export interface Host extends CosmicObject {
  type_slug: 'hosts';
  metadata: {
    name?: string;
    email?: string;
    phone?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    verified?: boolean;
    join_date?: string;
    response_rate?: number;
  };
}

// Location interface
export interface Location extends CosmicObject {
  type_slug: 'locations';
  metadata: {
    city?: string;
    state?: string;
    country?: string;
    featured?: boolean;
  };
}

// Listing interface
export interface Listing extends CosmicObject {
  type_slug: 'listings';
  metadata: {
    title?: string;
    description?: string;
    category?: Category;
    host?: Host;
    location?: Location;
    address?: string;
    price_per_hour?: number;
    max_guests?: number;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    amenities?: string[];
    house_rules?: string;
    instant_book?: boolean;
    pet_friendly?: boolean;
    listing_status?: {
      key: string;
      value: string;
    };
  };
}

// Booking interface
export interface Booking extends CosmicObject {
  type_slug: 'bookings';
  metadata: {
    booking_id?: string;
    listing?: Listing;
    guest_name?: string;
    guest_email?: string;
    booking_date?: string;
    start_time?: string;
    end_time?: string;
    number_of_guests?: number;
    total_price?: number;
    booking_status?: {
      key: string;
      value: string;
    };
    special_requests?: string;
  };
}

// Type literals for select-dropdown values
export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type ListingStatus = 'active' | 'inactive' | 'pending';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Search and filter types
export interface SearchFilters {
  category?: string;
  location?: string;
  date?: string;
  guests?: number;
  priceMin?: number;
  priceMax?: number;
  amenities?: string[];
  instantBook?: boolean;
  petFriendly?: boolean;
}

// Booking form data
export interface BookingFormData {
  guestName: string;
  guestEmail: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  numberOfGuests: number;
  specialRequests?: string;
}

// Type guards
export function isListing(obj: CosmicObject): obj is Listing {
  return obj.type_slug === 'listings';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type_slug === 'categories';
}

export function isHost(obj: CosmicObject): obj is Host {
  return obj.type_slug === 'hosts';
}

export function isLocation(obj: CosmicObject): obj is Location {
  return obj.type_slug === 'locations';
}

export function isBooking(obj: CosmicObject): obj is Booking {
  return obj.type_slug === 'bookings';
}