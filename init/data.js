const sampleListings = [
{
  title: "Luxury Beach Villa in Goa",
  description: "Discover a unique stay at this luxury beach villa located in Goa, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [73.8278, 15.4989],
  },
  category: "Beaches",
},

{
  title: "Snow Dome Escape in Manali",
  description: "Discover a unique stay at this snow dome escape located in Manali, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 937,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.2182, 32.2562],
  },
  category: "Domes",
},

{
  title: "Forest Hideaway Cabin in Mussoorie",
  description: "Discover a unique stay at this forest hideaway cabin located in Mussoorie, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1074,
  location: "Mussoorie",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.1327, 30.4858],
  },
  category: "Forests",
},

{
  title: "Royal Heritage Palace in Jaipur",
  description: "Discover a unique stay at this royal heritage palace located in Jaipur, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 1211,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.8743, 26.9514],
  },
  category: "Castles",
},

{
  title: "Infinity Pool Retreat in Bali",
  description: "Discover a unique stay at this infinity pool retreat located in Bali, Indonesia. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  price: 1348,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [115.2049, -8.3575],
  },
  category: "Amazing Pools",
},

{
  title: "Luxury Houseboat in Alleppey",
  description: "Discover a unique stay at this luxury houseboat located in Alleppey, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1485,
  location: "Alleppey",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.3838, 9.5631],
  },
  category: "Houseboats",
},

{
  title: "Organic Farm Stay in Coorg",
  description: "Discover a unique stay at this organic farm stay located in Coorg, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1622,
  location: "Coorg",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.8809, 12.4155],
  },
  category: "Farms",
},

{
  title: "Lakeside Cottage in Nainital",
  description: "Discover a unique stay at this lakeside cottage located in Nainital, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 1759,
  location: "Nainital",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [79.4621, 29.4713],
  },
  category: "Lakefront",
},

{
  title: "Modern City Apartment in Mumbai",
  description: "Discover a unique stay at this modern city apartment located in Mumbai, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 1896,
  location: "Mumbai",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [72.9097, 19.08],
  },
  category: "Apartments",
},

{
  title: "Mountain Chalet in Shimla",
  description: "Discover a unique stay at this mountain chalet located in Shimla, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 2033,
  location: "Shimla",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.2344, 31.1218],
  },
  category: "Mountains",
},

{
  title: "Luxury Desert Camp in Jaisalmer",
  description: "Discover a unique stay at this luxury desert camp located in Jaisalmer, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 2170,
  location: "Jaisalmer",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [70.9983, 26.9457],
  },
  category: "Camping",
},

{
  title: "Arctic Glass Igloo in Rovaniemi",
  description: "Discover a unique stay at this arctic glass igloo located in Rovaniemi, Finland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 2307,
  location: "Rovaniemi",
  country: "Finland",
  geometry: {
    type: "Point",
    coordinates: [25.7484, 66.5469],
  },
  category: "Arctic",
},

{
  title: "Countryside Stone Cottage in Cotswolds",
  description: "Discover a unique stay at this countryside stone cottage located in Cotswolds, United Kingdom. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
  },
  price: 2444,
  location: "Cotswolds",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-1.7953, 51.889],
  },
  category: "Countryside",
},

{
  title: "Trending Sky Villa in Phuket",
  description: "Discover a unique stay at this trending sky villa located in Phuket, Thailand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 2581,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [98.4151, 7.9494],
  },
  category: "Trending",
},

{
  title: "Oceanfront Beach House in Dubai",
  description: "Discover a unique stay at this oceanfront beach house located in Dubai, United Arab Emirates. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2718,
  location: "Dubai",
  country: "United Arab Emirates",
  geometry: {
    type: "Point",
    coordinates: [55.2768, 25.2868],
  },
  category: "Beaches",
},

{
  title: "Desert Dome Retreat in Santorini",
  description: "Discover a unique stay at this desert dome retreat located in Santorini, Greece. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 2855,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [25.4965, 36.4882],
  },
  category: "Domes",
},

{
  title: "Glass-Walled Forest Retreat in Kyoto",
  description: "Discover a unique stay at this glass-walled forest retreat located in Kyoto, Japan. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  },
  price: 2992,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.8321, 35.0196],
  },
  category: "Forests",
},

{
  title: "Historic Castle Suite in Reykjavik",
  description: "Discover a unique stay at this historic castle suite located in Reykjavik, Iceland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 3129,
  location: "Reykjavik",
  country: "Iceland",
  geometry: {
    type: "Point",
    coordinates: [-21.7347, 64.1475],
  },
  category: "Castles",
},

{
  title: "Poolside Luxury Villa in Queenstown",
  description: "Discover a unique stay at this poolside luxury villa located in Queenstown, New Zealand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 3266,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [168.6846, -44.9972],
  },
  category: "Amazing Pools",
},

{
  title: "Floating River House in Cape Town",
  description: "Discover a unique stay at this floating river house located in Cape Town, South Africa. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
  },
  price: 3403,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [18.4751, -33.8779],
  },
  category: "Houseboats",
},

{
  title: "Rustic Farmhouse Retreat in Marrakech",
  description: "Discover a unique stay at this rustic farmhouse retreat located in Marrakech, Morocco. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3540,
  location: "Marrakech",
  country: "Morocco",
  geometry: {
    type: "Point",
    coordinates: [-7.9011, 31.6895],
  },
  category: "Farms",
},

{
  title: "Lakefront Cabin Retreat in Lake Como",
  description: "Discover a unique stay at this lakefront cabin retreat located in Lake Como, Italy. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
  },
  price: 3677,
  location: "Lake Como",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [9.2662, 46.0596],
  },
  category: "Lakefront",
},

{
  title: "Downtown Loft Apartment in Aspen",
  description: "Discover a unique stay at this downtown loft apartment located in Aspen, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3814,
  location: "Aspen",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-106.7795, 39.2771],
  },
  category: "Apartments",
},

{
  title: "Himalayan Mountain Retreat in Malibu",
  description: "Discover a unique stay at this himalayan mountain retreat located in Malibu, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3951,
  location: "Malibu",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-118.7128, 34.1249],
  },
  category: "Mountains",
},

{
  title: "Glamping Under the Stars in New York City",
  description: "Discover a unique stay at this glamping under the stars located in New York City, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4088,
  location: "New York City",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-73.8897, 40.7604],
  },
  category: "Camping",
},

{
  title: "Northern Lights Igloo in Banff",
  description: "Discover a unique stay at this northern lights igloo located in Banff, Canada. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 4225,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-115.5458, 51.2034],
  },
  category: "Arctic",
},

{
  title: "Rural Countryside Retreat in Swiss Alps",
  description: "Discover a unique stay at this rural countryside retreat located in Swiss Alps, Switzerland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4362,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [7.7126, 46.5963],
  },
  category: "Countryside",
},

{
  title: "Most-Booked Luxury Stay in Provence",
  description: "Discover a unique stay at this most-booked luxury stay located in Provence, France. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 4499,
  location: "Provence",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [5.5304, 43.9862],
  },
  category: "Trending",
},

{
  title: "Seaside Bungalow in Tulum",
  description: "Discover a unique stay at this seaside bungalow located in Tulum, Mexico. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  price: 4636,
  location: "Tulum",
  country: "Mexico",
  geometry: {
    type: "Point",
    coordinates: [-87.4533, 20.2754],
  },
  category: "Beaches",
},

{
  title: "Geodesic Dome Getaway in Sedona",
  description: "Discover a unique stay at this geodesic dome getaway located in Sedona, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4773,
  location: "Sedona",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-111.72, 34.9467],
  },
  category: "Domes",
},

{
  title: "Pine Forest Cottage in Zanzibar",
  description: "Discover a unique stay at this pine forest cottage located in Zanzibar, Tanzania. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 4910,
  location: "Zanzibar",
  country: "Tanzania",
  geometry: {
    type: "Point",
    coordinates: [39.2696, -6.0759],
  },
  category: "Forests",
},

{
  title: "Restored Fortress Villa in Amalfi Coast",
  description: "Discover a unique stay at this restored fortress villa located in Amalfi Coast, Italy. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 5047,
  location: "Amalfi Coast",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [14.7016, 40.637],
  },
  category: "Castles",
},

{
  title: "Rooftop Infinity Pool Suite in Bora Bora",
  description: "Discover a unique stay at this rooftop infinity pool suite located in Bora Bora, French Polynesia. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5184,
  location: "Bora Bora",
  country: "French Polynesia",
  geometry: {
    type: "Point",
    coordinates: [-151.7135, -16.4844],
  },
  category: "Amazing Pools",
},

{
  title: "Backwater Houseboat Stay in Ladakh",
  description: "Discover a unique stay at this backwater houseboat stay located in Ladakh, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 5321,
  location: "Ladakh",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.6341, 34.1816],
  },
  category: "Houseboats",
},

{
  title: "Vineyard Farmhouse Stay in Udaipur",
  description: "Discover a unique stay at this vineyard farmhouse stay located in Udaipur, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 5458,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [73.7985, 24.6274],
  },
  category: "Farms",
},

{
  title: "Serene Lake House in Rishikesh",
  description: "Discover a unique stay at this serene lake house located in Rishikesh, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 5595,
  location: "Rishikesh",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.2826, 30.1419],
  },
  category: "Lakefront",
},

{
  title: "Stylish Urban Apartment in Darjeeling",
  description: "Discover a unique stay at this stylish urban apartment located in Darjeeling, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
  },
  price: 5732,
  location: "Darjeeling",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [88.3076, 27.109],
  },
  category: "Apartments",
},

{
  title: "Alpine A-Frame Cabin in Munnar",
  description: "Discover a unique stay at this alpine a-frame cabin located in Munnar, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 5869,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.1325, 10.1699],
  },
  category: "Mountains",
},

{
  title: "Wilderness Camping Retreat in Andaman Islands",
  description: "Discover a unique stay at this wilderness camping retreat located in Andaman Islands, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 6006,
  location: "Andaman Islands",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [92.6606, 11.8341],
  },
  category: "Camping",
},

{
  title: "Frozen Tundra Cabin in Prague",
  description: "Discover a unique stay at this frozen tundra cabin located in Prague, Czech Republic. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 6143,
  location: "Prague",
  country: "Czech Republic",
  geometry: {
    type: "Point",
    coordinates: [14.4688, 50.0825],
  },
  category: "Arctic",
},

{
  title: "Pastoral Cottage Escape in Edinburgh",
  description: "Discover a unique stay at this pastoral cottage escape located in Edinburgh, United Kingdom. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  },
  price: 6280,
  location: "Edinburgh",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-3.1283, 55.9733],
  },
  category: "Countryside",
},

{
  title: "Popular Getaway Villa in Vienna",
  description: "Discover a unique stay at this popular getaway villa located in Vienna, Austria. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 6417,
  location: "Vienna",
  country: "Austria",
  geometry: {
    type: "Point",
    coordinates: [16.4628, 48.2412],
  },
  category: "Trending",
},

{
  title: "Beachside Paradise Villa in Bruges",
  description: "Discover a unique stay at this beachside paradise villa located in Bruges, Belgium. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 6554,
  location: "Bruges",
  country: "Belgium",
  geometry: {
    type: "Point",
    coordinates: [3.2427, 51.2553],
  },
  category: "Beaches",
},

{
  title: "Starlit Dome Cabin in Copenhagen",
  description: "Discover a unique stay at this starlit dome cabin located in Copenhagen, Denmark. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
  },
  price: 891,
  location: "Copenhagen",
  country: "Denmark",
  geometry: {
    type: "Point",
    coordinates: [12.6153, 55.7351],
  },
  category: "Domes",
},

{
  title: "Woodland Escape Cabin in Lisbon",
  description: "Discover a unique stay at this woodland escape cabin located in Lisbon, Portugal. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1028,
  location: "Lisbon",
  country: "Portugal",
  geometry: {
    type: "Point",
    coordinates: [-9.0633, 38.7943],
  },
  category: "Forests",
},

{
  title: "Medieval Castle Retreat in Barcelona",
  description: "Discover a unique stay at this medieval castle retreat located in Barcelona, Spain. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
  },
  price: 1165,
  location: "Barcelona",
  country: "Spain",
  geometry: {
    type: "Point",
    coordinates: [2.1784, 41.4701],
  },
  category: "Castles",
},

{
  title: "Cliffside Pool Villa in Amsterdam",
  description: "Discover a unique stay at this cliffside pool villa located in Amsterdam, Netherlands. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1302,
  location: "Amsterdam",
  country: "Netherlands",
  geometry: {
    type: "Point",
    coordinates: [4.9381, 52.4656],
  },
  category: "Amazing Pools",
},

{
  title: "Premium Canal Houseboat in Vancouver",
  description: "Discover a unique stay at this premium canal houseboat located in Vancouver, Canada. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1439,
  location: "Vancouver",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-123.0586, 49.2937],
  },
  category: "Houseboats",
},

{
  title: "Countryside Farm Cottage in Kyoto Countryside",
  description: "Discover a unique stay at this countryside farm cottage located in Kyoto Countryside, Japan. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1576,
  location: "Kyoto Countryside",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.7681, 35.0113],
  },
  category: "Farms",
},

{
  title: "Waterfront Lake Villa in Goa",
  description: "Discover a unique stay at this waterfront lake villa located in Goa, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 1713,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [73.8488, 15.5359],
  },
  category: "Lakefront",
},

{
  title: "Skyline View Apartment in Manali",
  description: "Discover a unique stay at this skyline view apartment located in Manali, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1850,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.2392, 32.2932],
  },
  category: "Apartments",
},

{
  title: "Highland Mountain Lodge in Mussoorie",
  description: "Discover a unique stay at this highland mountain lodge located in Mussoorie, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 1987,
  location: "Mussoorie",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.1537, 30.5228],
  },
  category: "Mountains",
},

{
  title: "Riverside Camping Lodge in Jaipur",
  description: "Discover a unique stay at this riverside camping lodge located in Jaipur, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  price: 2124,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.7953, 26.9884],
  },
  category: "Camping",
},

{
  title: "Polar Ice Retreat in Bali",
  description: "Discover a unique stay at this polar ice retreat located in Bali, Indonesia. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2261,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [115.2259, -8.3205],
  },
  category: "Arctic",
},

{
  title: "Green Valley Countryside Home in Alleppey",
  description: "Discover a unique stay at this green valley countryside home located in Alleppey, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 2398,
  location: "Alleppey",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.4048, 9.5001],
  },
  category: "Countryside",
},

{
  title: "Trending Skyline Retreat in Coorg",
  description: "Discover a unique stay at this trending skyline retreat located in Coorg, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 2535,
  location: "Coorg",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.9019, 12.3525],
  },
  category: "Trending",
},

{
  title: "Luxury Beach Villa in Nainital",
  description: "Discover a unique stay at this luxury beach villa located in Nainital, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 2672,
  location: "Nainital",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [79.4831, 29.4083],
  },
  category: "Beaches",
},

{
  title: "Snow Dome Escape in Mumbai",
  description: "Discover a unique stay at this snow dome escape located in Mumbai, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 2809,
  location: "Mumbai",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [72.9307, 19.117],
  },
  category: "Domes",
},

{
  title: "Forest Hideaway Cabin in Shimla",
  description: "Discover a unique stay at this forest hideaway cabin located in Shimla, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 2946,
  location: "Shimla",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.2554, 31.1588],
  },
  category: "Forests",
},

{
  title: "Royal Heritage Palace in Jaisalmer",
  description: "Discover a unique stay at this royal heritage palace located in Jaisalmer, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 3083,
  location: "Jaisalmer",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [70.9193, 26.9827],
  },
  category: "Castles",
},

{
  title: "Infinity Pool Retreat in Rovaniemi",
  description: "Discover a unique stay at this infinity pool retreat located in Rovaniemi, Finland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
  },
  price: 3220,
  location: "Rovaniemi",
  country: "Finland",
  geometry: {
    type: "Point",
    coordinates: [25.7694, 66.5839],
  },
  category: "Amazing Pools",
},

{
  title: "Luxury Houseboat in Cotswolds",
  description: "Discover a unique stay at this luxury houseboat located in Cotswolds, United Kingdom. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 3357,
  location: "Cotswolds",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-1.7743, 51.926],
  },
  category: "Houseboats",
},

{
  title: "Organic Farm Stay in Phuket",
  description: "Discover a unique stay at this organic farm stay located in Phuket, Thailand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 3494,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [98.4361, 7.8864],
  },
  category: "Farms",
},

{
  title: "Lakeside Cottage in Dubai",
  description: "Discover a unique stay at this lakeside cottage located in Dubai, United Arab Emirates. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 3631,
  location: "Dubai",
  country: "United Arab Emirates",
  geometry: {
    type: "Point",
    coordinates: [55.2978, 25.2238],
  },
  category: "Lakefront",
},

{
  title: "Modern City Apartment in Santorini",
  description: "Discover a unique stay at this modern city apartment located in Santorini, Greece. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  },
  price: 3768,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [25.5175, 36.4252],
  },
  category: "Apartments",
},

{
  title: "Mountain Chalet in Kyoto",
  description: "Discover a unique stay at this mountain chalet located in Kyoto, Japan. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 3905,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.8531, 35.0566],
  },
  category: "Mountains",
},

{
  title: "Luxury Desert Camp in Reykjavik",
  description: "Discover a unique stay at this luxury desert camp located in Reykjavik, Iceland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 4042,
  location: "Reykjavik",
  country: "Iceland",
  geometry: {
    type: "Point",
    coordinates: [-21.8137, 64.1845],
  },
  category: "Camping",
},

{
  title: "Arctic Glass Igloo in Queenstown",
  description: "Discover a unique stay at this arctic glass igloo located in Queenstown, New Zealand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
  },
  price: 4179,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [168.7056, -44.9602],
  },
  category: "Arctic",
},

{
  title: "Countryside Stone Cottage in Cape Town",
  description: "Discover a unique stay at this countryside stone cottage located in Cape Town, South Africa. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4316,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [18.4961, -33.8409],
  },
  category: "Countryside",
},

{
  title: "Trending Sky Villa in Marrakech",
  description: "Discover a unique stay at this trending sky villa located in Marrakech, Morocco. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
  },
  price: 4453,
  location: "Marrakech",
  country: "Morocco",
  geometry: {
    type: "Point",
    coordinates: [-7.9801, 31.7265],
  },
  category: "Trending",
},

{
  title: "Oceanfront Beach House in Lake Como",
  description: "Discover a unique stay at this oceanfront beach house located in Lake Como, Italy. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
  },
  price: 4590,
  location: "Lake Como",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [9.2872, 45.9966],
  },
  category: "Beaches",
},

{
  title: "Desert Dome Retreat in Aspen",
  description: "Discover a unique stay at this desert dome retreat located in Aspen, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
  },
  price: 4727,
  location: "Aspen",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-106.7585, 39.2141],
  },
  category: "Domes",
},

{
  title: "Glass-Walled Forest Retreat in Malibu",
  description: "Discover a unique stay at this glass-walled forest retreat located in Malibu, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 4864,
  location: "Malibu",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-118.6918, 34.0619],
  },
  category: "Forests",
},

{
  title: "Historic Castle Suite in New York City",
  description: "Discover a unique stay at this historic castle suite located in New York City, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 5001,
  location: "New York City",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-73.9687, 40.7974],
  },
  category: "Castles",
},

{
  title: "Poolside Luxury Villa in Banff",
  description: "Discover a unique stay at this poolside luxury villa located in Banff, Canada. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 5138,
  location: "Banff",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-115.5248, 51.2404],
  },
  category: "Amazing Pools",
},

{
  title: "Floating River House in Swiss Alps",
  description: "Discover a unique stay at this floating river house located in Swiss Alps, Switzerland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 5275,
  location: "Swiss Alps",
  country: "Switzerland",
  geometry: {
    type: "Point",
    coordinates: [7.7336, 46.6333],
  },
  category: "Houseboats",
},

{
  title: "Rustic Farmhouse Retreat in Provence",
  description: "Discover a unique stay at this rustic farmhouse retreat located in Provence, France. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  price: 5412,
  location: "Provence",
  country: "France",
  geometry: {
    type: "Point",
    coordinates: [5.4514, 44.0232],
  },
  category: "Farms",
},

{
  title: "Lakefront Cabin Retreat in Tulum",
  description: "Discover a unique stay at this lakefront cabin retreat located in Tulum, Mexico. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5549,
  location: "Tulum",
  country: "Mexico",
  geometry: {
    type: "Point",
    coordinates: [-87.4323, 20.2124],
  },
  category: "Lakefront",
},

{
  title: "Downtown Loft Apartment in Sedona",
  description: "Discover a unique stay at this downtown loft apartment located in Sedona, United States. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 5686,
  location: "Sedona",
  country: "United States",
  geometry: {
    type: "Point",
    coordinates: [-111.699, 34.8837],
  },
  category: "Apartments",
},

{
  title: "Himalayan Mountain Retreat in Zanzibar",
  description: "Discover a unique stay at this himalayan mountain retreat located in Zanzibar, Tanzania. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 5823,
  location: "Zanzibar",
  country: "Tanzania",
  geometry: {
    type: "Point",
    coordinates: [39.2906, -6.1389],
  },
  category: "Mountains",
},

{
  title: "Glamping Under the Stars in Amalfi Coast",
  description: "Discover a unique stay at this glamping under the stars located in Amalfi Coast, Italy. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 5960,
  location: "Amalfi Coast",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [14.6226, 40.674],
  },
  category: "Camping",
},

{
  title: "Northern Lights Igloo in Bora Bora",
  description: "Discover a unique stay at this northern lights igloo located in Bora Bora, French Polynesia. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 6097,
  location: "Bora Bora",
  country: "French Polynesia",
  geometry: {
    type: "Point",
    coordinates: [-151.6925, -16.4474],
  },
  category: "Arctic",
},

{
  title: "Rural Countryside Retreat in Ladakh",
  description: "Discover a unique stay at this rural countryside retreat located in Ladakh, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 6234,
  location: "Ladakh",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.6551, 34.2186],
  },
  category: "Countryside",
},

{
  title: "Most-Booked Luxury Stay in Udaipur",
  description: "Discover a unique stay at this most-booked luxury stay located in Udaipur, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 6371,
  location: "Udaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [73.7195, 24.6644],
  },
  category: "Trending",
},

{
  title: "Seaside Bungalow in Rishikesh",
  description: "Discover a unique stay at this seaside bungalow located in Rishikesh, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
  },
  price: 6508,
  location: "Rishikesh",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.3036, 30.1789],
  },
  category: "Beaches",
},

{
  title: "Geodesic Dome Getaway in Darjeeling",
  description: "Discover a unique stay at this geodesic dome getaway located in Darjeeling, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 845,
  location: "Darjeeling",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [88.3286, 27.046],
  },
  category: "Domes",
},

{
  title: "Pine Forest Cottage in Munnar",
  description: "Discover a unique stay at this pine forest cottage located in Munnar, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 982,
  location: "Munnar",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.1535, 10.1069],
  },
  category: "Forests",
},

{
  title: "Restored Fortress Villa in Andaman Islands",
  description: "Discover a unique stay at this restored fortress villa located in Andaman Islands, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 1119,
  location: "Andaman Islands",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [92.6816, 11.7711],
  },
  category: "Castles",
},

{
  title: "Rooftop Infinity Pool Suite in Prague",
  description: "Discover a unique stay at this rooftop infinity pool suite located in Prague, Czech Republic. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  },
  price: 1256,
  location: "Prague",
  country: "Czech Republic",
  geometry: {
    type: "Point",
    coordinates: [14.4898, 50.1195],
  },
  category: "Amazing Pools",
},

{
  title: "Backwater Houseboat Stay in Edinburgh",
  description: "Discover a unique stay at this backwater houseboat stay located in Edinburgh, United Kingdom. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 1393,
  location: "Edinburgh",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-3.1073, 56.0103],
  },
  category: "Houseboats",
},

{
  title: "Vineyard Farmhouse Stay in Vienna",
  description: "Discover a unique stay at this vineyard farmhouse stay located in Vienna, Austria. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 1530,
  location: "Vienna",
  country: "Austria",
  geometry: {
    type: "Point",
    coordinates: [16.3838, 48.2782],
  },
  category: "Farms",
},

{
  title: "Serene Lake House in Bruges",
  description: "Discover a unique stay at this serene lake house located in Bruges, Belgium. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
  },
  price: 1667,
  location: "Bruges",
  country: "Belgium",
  geometry: {
    type: "Point",
    coordinates: [3.2637, 51.2923],
  },
  category: "Lakefront",
},

{
  title: "Stylish Urban Apartment in Copenhagen",
  description: "Discover a unique stay at this stylish urban apartment located in Copenhagen, Denmark. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1804,
  location: "Copenhagen",
  country: "Denmark",
  geometry: {
    type: "Point",
    coordinates: [12.6363, 55.7721],
  },
  category: "Apartments",
},

{
  title: "Alpine A-Frame Cabin in Lisbon",
  description: "Discover a unique stay at this alpine a-frame cabin located in Lisbon, Portugal. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
  },
  price: 1941,
  location: "Lisbon",
  country: "Portugal",
  geometry: {
    type: "Point",
    coordinates: [-9.0423, 38.7313],
  },
  category: "Mountains",
},

{
  title: "Wilderness Camping Retreat in Barcelona",
  description: "Discover a unique stay at this wilderness camping retreat located in Barcelona, Spain. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
  },
  price: 2078,
  location: "Barcelona",
  country: "Spain",
  geometry: {
    type: "Point",
    coordinates: [2.1994, 41.4071],
  },
  category: "Camping",
},

{
  title: "Frozen Tundra Cabin in Amsterdam",
  description: "Discover a unique stay at this frozen tundra cabin located in Amsterdam, Netherlands. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
  },
  price: 2215,
  location: "Amsterdam",
  country: "Netherlands",
  geometry: {
    type: "Point",
    coordinates: [4.9591, 52.4026],
  },
  category: "Arctic",
},

{
  title: "Pastoral Cottage Escape in Vancouver",
  description: "Discover a unique stay at this pastoral cottage escape located in Vancouver, Canada. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 2352,
  location: "Vancouver",
  country: "Canada",
  geometry: {
    type: "Point",
    coordinates: [-123.0376, 49.3307],
  },
  category: "Countryside",
},

{
  title: "Popular Getaway Villa in Kyoto Countryside",
  description: "Discover a unique stay at this popular getaway villa located in Kyoto Countryside, Japan. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 2489,
  location: "Kyoto Countryside",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.6891, 35.0483],
  },
  category: "Trending",
},

{
  title: "Beachside Paradise Villa in Goa",
  description: "Discover a unique stay at this beachside paradise villa located in Goa, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2626,
  location: "Goa",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [73.8698, 15.5729],
  },
  category: "Beaches",
},

{
  title: "Starlit Dome Cabin in Manali",
  description: "Discover a unique stay at this starlit dome cabin located in Manali, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
  },
  price: 2763,
  location: "Manali",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.2602, 32.3302],
  },
  category: "Domes",
},

{
  title: "Woodland Escape Cabin in Mussoorie",
  description: "Discover a unique stay at this woodland escape cabin located in Mussoorie, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=60",
  },
  price: 2900,
  location: "Mussoorie",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [78.0747, 30.4598],
  },
  category: "Forests",
},

{
  title: "Medieval Castle Retreat in Jaipur",
  description: "Discover a unique stay at this medieval castle retreat located in Jaipur, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 3037,
  location: "Jaipur",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.8163, 26.9254],
  },
  category: "Castles",
},

{
  title: "Cliffside Pool Villa in Bali",
  description: "Discover a unique stay at this cliffside pool villa located in Bali, Indonesia. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 3174,
  location: "Bali",
  country: "Indonesia",
  geometry: {
    type: "Point",
    coordinates: [115.2469, -8.3835],
  },
  category: "Amazing Pools",
},

{
  title: "Premium Canal Houseboat in Alleppey",
  description: "Discover a unique stay at this premium canal houseboat located in Alleppey, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
  },
  price: 3311,
  location: "Alleppey",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [76.4258, 9.5371],
  },
  category: "Houseboats",
},

{
  title: "Countryside Farm Cottage in Coorg",
  description: "Discover a unique stay at this countryside farm cottage located in Coorg, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 3448,
  location: "Coorg",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [75.8229, 12.3895],
  },
  category: "Farms",
},

{
  title: "Waterfront Lake Villa in Nainital",
  description: "Discover a unique stay at this waterfront lake villa located in Nainital, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 3585,
  location: "Nainital",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [79.5041, 29.4453],
  },
  category: "Lakefront",
},

{
  title: "Skyline View Apartment in Mumbai",
  description: "Discover a unique stay at this skyline view apartment located in Mumbai, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 3722,
  location: "Mumbai",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [72.9517, 19.154],
  },
  category: "Apartments",
},

{
  title: "Highland Mountain Lodge in Shimla",
  description: "Discover a unique stay at this highland mountain lodge located in Shimla, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 3859,
  location: "Shimla",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [77.1764, 31.1958],
  },
  category: "Mountains",
},

{
  title: "Riverside Camping Lodge in Jaisalmer",
  description: "Discover a unique stay at this riverside camping lodge located in Jaisalmer, India. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=800&q=60",
  },
  price: 3996,
  location: "Jaisalmer",
  country: "India",
  geometry: {
    type: "Point",
    coordinates: [70.9403, 26.9197],
  },
  category: "Camping",
},

{
  title: "Polar Ice Retreat in Rovaniemi",
  description: "Discover a unique stay at this polar ice retreat located in Rovaniemi, Finland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 4133,
  location: "Rovaniemi",
  country: "Finland",
  geometry: {
    type: "Point",
    coordinates: [25.7904, 66.5209],
  },
  category: "Arctic",
},

{
  title: "Green Valley Countryside Home in Cotswolds",
  description: "Discover a unique stay at this green valley countryside home located in Cotswolds, United Kingdom. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4270,
  location: "Cotswolds",
  country: "United Kingdom",
  geometry: {
    type: "Point",
    coordinates: [-1.7533, 51.863],
  },
  category: "Countryside",
},

{
  title: "Trending Skyline Retreat in Phuket",
  description: "Discover a unique stay at this trending skyline retreat located in Phuket, Thailand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  },
  price: 4407,
  location: "Phuket",
  country: "Thailand",
  geometry: {
    type: "Point",
    coordinates: [98.3571, 7.9234],
  },
  category: "Trending",
},

{
  title: "Luxury Beach Villa in Dubai",
  description: "Discover a unique stay at this luxury beach villa located in Dubai, United Arab Emirates. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
  },
  price: 4544,
  location: "Dubai",
  country: "United Arab Emirates",
  geometry: {
    type: "Point",
    coordinates: [55.3188, 25.2608],
  },
  category: "Beaches",
},

{
  title: "Snow Dome Escape in Santorini",
  description: "Discover a unique stay at this snow dome escape located in Santorini, Greece. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 4681,
  location: "Santorini",
  country: "Greece",
  geometry: {
    type: "Point",
    coordinates: [25.5385, 36.4622],
  },
  category: "Domes",
},

{
  title: "Forest Hideaway Cabin in Kyoto",
  description: "Discover a unique stay at this forest hideaway cabin located in Kyoto, Japan. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 4818,
  location: "Kyoto",
  country: "Japan",
  geometry: {
    type: "Point",
    coordinates: [135.7741, 35.0936],
  },
  category: "Forests",
},

{
  title: "Royal Heritage Palace in Reykjavik",
  description: "Discover a unique stay at this royal heritage palace located in Reykjavik, Iceland. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
  },
  price: 4955,
  location: "Reykjavik",
  country: "Iceland",
  geometry: {
    type: "Point",
    coordinates: [-21.7927, 64.2215],
  },
  category: "Castles",
},

{
  title: "Infinity Pool Retreat in Queenstown",
  description: "Discover a unique stay at this infinity pool retreat located in Queenstown, New Zealand. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 5092,
  location: "Queenstown",
  country: "New Zealand",
  geometry: {
    type: "Point",
    coordinates: [168.7266, -45.0232],
  },
  category: "Amazing Pools",
},

{
  title: "Luxury Houseboat in Cape Town",
  description: "Discover a unique stay at this luxury houseboat located in Cape Town, South Africa. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
  },
  price: 5229,
  location: "Cape Town",
  country: "South Africa",
  geometry: {
    type: "Point",
    coordinates: [18.5171, -33.9039],
  },
  category: "Houseboats",
},

{
  title: "Organic Farm Stay in Marrakech",
  description: "Discover a unique stay at this organic farm stay located in Marrakech, Morocco. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
  },
  price: 5366,
  location: "Marrakech",
  country: "Morocco",
  geometry: {
    type: "Point",
    coordinates: [-7.9591, 31.6635],
  },
  category: "Farms",
},

{
  title: "Lakeside Cottage in Lake Como",
  description: "Discover a unique stay at this lakeside cottage located in Lake Como, Italy. Perfect for travelers seeking comfort, charm, and unforgettable views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
  },
  price: 5503,
  location: "Lake Como",
  country: "Italy",
  geometry: {
    type: "Point",
    coordinates: [9.3082, 46.0336],
  },
  category: "Lakefront",
}
];

module.exports = { data: sampleListings };