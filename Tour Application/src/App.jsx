import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import City from "./components/City";

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    name: "Paris",
    price: 1200,
    description:
      "Paris, the capital of France, is globally celebrated for its timeless beauty, artistic heritage, and romantic atmosphere. Known as the City of Light, Paris offers an unmatched blend of history, culture, and modern elegance. The city is home to world-famous landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, each representing centuries of architectural brilliance and cultural evolution. Visitors can stroll along the Seine River, explore charming neighborhoods like Montmartre, or shop along the luxurious Champs-Élysées. Paris is also a culinary paradise, offering everything from fresh croissants in cozy bakeries to gourmet dining experiences in Michelin-starred restaurants. Art lovers will appreciate its museums and galleries, while fashion enthusiasts can indulge in high-end boutiques. Whether you're enjoying a sunset view from a riverside café or exploring hidden streets, Paris delivers a magical and unforgettable experience that blends romance, history, and sophistication.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    name: "New York",
    price: 1500,
    description:
      "New York City is one of the most vibrant and influential cities in the world, often referred to as The Big Apple. Located in the United States, it serves as a global hub for finance, culture, entertainment, and innovation. The city is divided into five boroughs, each offering unique attractions and experiences. Manhattan features iconic landmarks such as Times Square, Central Park, and the Empire State Building, while Brooklyn is known for its artistic culture and scenic waterfront views. Visitors can experience world-class Broadway shows, explore diverse cuisines from around the globe, and visit renowned museums like the Metropolitan Museum of Art. The city's skyline is breathtaking, especially at night when it lights up with energy. New York is also known for its fast-paced lifestyle, diverse population, and endless opportunities for exploration. Whether you're shopping, dining, or sightseeing, the city offers an unforgettable urban adventure.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    name: "Tokyo",
    price: 1400,
    description:
      "Tokyo, the capital of Japan, is a fascinating blend of tradition and cutting-edge modernity. Known for its towering skyscrapers, neon-lit streets, and advanced technology, the city also preserves its cultural roots through historic temples and serene gardens. Visitors can explore famous districts like Shibuya and Shinjuku, known for their vibrant nightlife and shopping scenes, or visit traditional sites such as the Meiji Shrine and Asakusa Temple. Tokyo is also a paradise for food lovers, offering everything from street food to Michelin-starred dining experiences. The city's efficient public transport system makes it easy to explore its diverse neighborhoods. Seasonal attractions like cherry blossoms in spring and colorful foliage in autumn add to its charm. Tokyo's unique ability to seamlessly merge the past with the future makes it one of the most exciting destinations in the world.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    name: "London",
    price: 1300,
    description:
      "London, the capital of the United Kingdom, is a historic and cosmopolitan city known for its rich heritage, iconic landmarks, and cultural diversity. The city boasts famous attractions such as the Tower of London, Buckingham Palace, and Big Ben. Visitors can explore world-class museums like the British Museum and Tate Modern, many of which offer free entry. London is also known for its vibrant theater scene in the West End, offering a variety of performances. The River Thames runs through the city, providing scenic views and river cruises. Neighborhoods like Camden, Soho, and Notting Hill each offer unique experiences, from street markets to nightlife. London’s culinary scene is incredibly diverse, reflecting its multicultural population. Whether you're exploring historic sites, enjoying afternoon tea, or shopping in Oxford Street, London offers a perfect mix of tradition and modernity.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    name: "Dubai",
    price: 1100,
    description:
      "Dubai is a dazzling city in the United Arab Emirates known for its luxury lifestyle, futuristic architecture, and vibrant entertainment scene. Home to the world’s tallest building, the Burj Khalifa, Dubai offers breathtaking skyline views and world-class attractions. Visitors can shop in massive malls like Dubai Mall or explore traditional souks for gold and spices. The city also offers unique experiences such as desert safaris, dune bashing, and camel rides. Dubai’s beaches, luxury resorts, and fine dining options make it a popular destination for travelers seeking both relaxation and adventure. The city is also known for its cultural diversity and hospitality. From modern attractions to traditional heritage sites like Al Fahidi Historical District, Dubai offers a unique blend of innovation and tradition.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    name: "Sydney",
    price: 1600,
    description:
      "Sydney is one of Australia’s most iconic cities, known for its stunning harbor, beautiful beaches, and vibrant lifestyle. The Sydney Opera House and Harbour Bridge are among the most recognizable landmarks in the world. Visitors can relax on famous beaches like Bondi Beach or explore coastal walks with breathtaking ocean views. The city offers a wide range of cultural experiences, including museums, galleries, and live performances. Sydney’s food scene is diverse and influenced by its multicultural population, offering fresh seafood and international cuisine. Outdoor activities such as surfing, sailing, and hiking are popular among locals and tourists alike. With its sunny climate and laid-back atmosphere, Sydney provides a perfect balance of urban excitement and natural beauty.",
  },
  {
    id: 7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWYgV9CfZv89N6uRL-obC8L4XEAPgBJ4yMg&s",
    name: "Rome",
    price: 1250,
    description:
      "Rome, the capital of Italy, is a city steeped in history, art, and culture. Known as the Eternal City, it is home to ancient landmarks such as the Colosseum, Roman Forum, and Pantheon. Visitors can explore centuries of history while walking through its cobbled streets. Vatican City, located within Rome, is a major attraction featuring St. Peter’s Basilica and the Sistine Chapel. Rome is also famous for its delicious cuisine, including pasta, pizza, and gelato. The city's lively piazzas, fountains like the Trevi Fountain, and charming neighborhoods create a magical atmosphere. Whether you're interested in history, art, or food, Rome offers an unforgettable journey through time.",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVECaxih1G4Q4eW_NONDgFtNVn3h6A1YJwUA&s",
    name: "Barcelona",
    price: 1150,
    description:
      "Barcelona is a vibrant city in Spain known for its unique architecture, Mediterranean beaches, and lively culture. The city is famous for the works of Antoni Gaudí, including the Sagrada Família and Park Güell. Visitors can stroll along La Rambla, explore Gothic Quarter streets, or relax on the beach. Barcelona is also known for its delicious cuisine, including tapas and seafood dishes. The city hosts numerous festivals and events throughout the year, showcasing its rich traditions. Its combination of art, history, and coastal beauty makes Barcelona a must-visit destination.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
    name: "Singapore",
    price: 1000,
    description:
      "Singapore is a modern city-state known for its cleanliness, efficiency, and innovation. It offers a mix of futuristic attractions and cultural heritage. Visitors can explore Gardens by the Bay, Marina Bay Sands, and Sentosa Island. The city is also a food paradise, offering a wide range of cuisines at hawker centers and fine dining restaurants. Singapore’s multicultural population is reflected in its neighborhoods like Chinatown, Little India, and Kampong Glam. With its safe environment and advanced infrastructure, Singapore provides a seamless travel experience.",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365",
    name: "Bangkok",
    price: 900,
    description:
      "Bangkok, the capital of Thailand, is known for its vibrant street life, ornate temples, and bustling markets. The city features iconic attractions such as the Grand Palace and Wat Arun. Visitors can enjoy delicious street food, explore floating markets, and experience lively nightlife. Bangkok offers a mix of traditional culture and modern entertainment. Its friendly locals and affordability make it a popular destination for travelers.",
  },

  {
    id: 11,
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    name: "Istanbul",
    price: 950,
    description:
      "Istanbul is a mesmerizing city in Turkey that uniquely bridges two continents, Europe and Asia, making it one of the most culturally diverse destinations in the world. With a history that spans thousands of years, it has been the capital of multiple empires, including the Byzantine and Ottoman Empires. The city is filled with architectural wonders such as the Hagia Sophia, Blue Mosque, and Topkapi Palace, each reflecting its rich historical heritage. Visitors can wander through the bustling Grand Bazaar, one of the oldest and largest covered markets in the world, offering everything from spices to handcrafted goods. The Bosphorus Strait divides the city and offers scenic boat cruises with breathtaking views of the skyline. Istanbul is also a paradise for food lovers, featuring delicious dishes like kebabs, baklava, and Turkish tea. The city’s vibrant neighborhoods, lively cafes, and welcoming locals create an unforgettable travel experience that combines history, culture, and modern life.",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    name: "Cape Town",
    price: 1050,
    description:
      "Cape Town, located in South Africa, is one of the most scenic cities in the world, known for its breathtaking landscapes and diverse attractions. Dominated by the iconic Table Mountain, the city offers panoramic views that attract nature lovers and adventure seekers alike. Visitors can take a cable car ride to the top or hike through scenic trails. Cape Town is also famous for its stunning beaches such as Camps Bay and Clifton, where visitors can relax or enjoy water sports. The city has a rich cultural history, with sites like Robben Island, where Nelson Mandela was imprisoned, offering deep historical insights. The V&A Waterfront is a popular destination for shopping, dining, and entertainment. Cape Town’s culinary scene is vibrant, featuring fresh seafood and local wines from nearby vineyards. Whether exploring nature, history, or urban attractions, Cape Town provides a unique and unforgettable travel experience.",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    name: "Amsterdam",
    price: 1200,
    description:
      "Amsterdam, the capital of the Netherlands, is a charming city known for its picturesque canals, historic architecture, and vibrant cultural scene. The city’s canal system, a UNESCO World Heritage Site, offers scenic boat tours and beautiful views at every turn. Visitors can explore world-renowned museums such as the Rijksmuseum and the Van Gogh Museum, showcasing masterpieces of art and history. Amsterdam is also famous for its cycling culture, with bikes being the primary mode of transportation for locals. The city features lively neighborhoods like Jordaan, filled with cafes, boutiques, and art galleries. Its diverse culinary scene offers everything from traditional Dutch dishes to international cuisine. Amsterdam’s relaxed atmosphere, combined with its rich history and artistic heritage, makes it a popular destination for travelers seeking both culture and leisure.",
  },
  {
    id: 14,
    image:
      "https://www.shutterstock.com/image-photo/museum-island-bridge-over-river-600nw-2506377217.jpg",
    name: "Berlin",
    price: 1100,
    description:
      "Berlin, the capital of Germany, is a city known for its dynamic history, modern culture, and vibrant arts scene. It has played a significant role in world history, particularly during World War II and the Cold War, with landmarks like the Berlin Wall and Brandenburg Gate symbolizing its past. Today, Berlin is a thriving metropolis known for its creativity and innovation. Visitors can explore world-class museums on Museum Island, enjoy diverse culinary experiences, and experience its famous nightlife. The city is also known for its street art, music festivals, and cultural diversity. Berlin’s unique blend of history and modernity makes it a fascinating destination for travelers looking to explore both the past and the present.",
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d",
    name: "Moscow",
    price: 1300,
    description:
      "Moscow, the capital of Russia, is a city of grandeur, history, and cultural richness. Known for its iconic landmarks such as the Kremlin, Red Square, and St. Basil’s Cathedral, Moscow showcases stunning architecture and deep historical roots. The city is also home to world-class theaters like the Bolshoi Theatre, offering exceptional ballet and opera performances. Visitors can explore museums, parks, and historic streets that reflect centuries of Russian heritage. Moscow’s metro system is famous for its beautifully designed stations, often considered works of art. The city also offers a vibrant dining and nightlife scene, blending traditional Russian cuisine with modern influences. Moscow’s unique charm lies in its ability to combine tradition with contemporary life.",
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    name: "Los Angeles",
    price: 1400,
    description:
      "Los Angeles, located in California, USA, is a global center for entertainment, creativity, and lifestyle. Known as the entertainment capital of the world, it is home to Hollywood, where the film and television industry thrives. Visitors can explore famous attractions such as the Hollywood Walk of Fame, Universal Studios, and Griffith Observatory. The city offers beautiful beaches like Santa Monica and Venice Beach, where visitors can relax or enjoy outdoor activities. Los Angeles is also known for its diverse neighborhoods, each offering unique cultural experiences and cuisines. From luxury shopping in Beverly Hills to art galleries in downtown LA, the city offers something for everyone. Its sunny weather and laid-back lifestyle make it a popular destination year-round.",
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
    name: "Toronto",
    price: 1250,
    description:
      "Toronto, the largest city in Canada, is known for its diversity, modern skyline, and cultural attractions. The city is home to the iconic CN Tower, offering stunning views of the surrounding area. Visitors can explore neighborhoods like Kensington Market and Distillery District, each offering unique experiences. Toronto is also a cultural hub, with numerous museums, galleries, and theaters. Its multicultural population is reflected in its food scene, offering cuisines from around the world. The city hosts various festivals and events throughout the year, making it lively and engaging. With its friendly atmosphere and vibrant lifestyle, Toronto is a must-visit destination.",
  },
  {
    id: 18,
    image:
      "https://media.istockphoto.com/id/464629385/photo/seoul-skyline.jpg?s=612x612&w=0&k=20&c=Wo9LYxk6L9z0VORPkMxjubMcAZfWAJtRJWVfiJR8jmw=",
    name: "Seoul",
    price: 1150,
    description:
      "Seoul, the capital of South Korea, is a dynamic city that blends tradition with cutting-edge technology. Visitors can explore historic palaces such as Gyeongbokgung and Changdeokgung, as well as modern attractions like skyscrapers and shopping districts. The city is known for its vibrant street food culture, offering dishes like kimchi, tteokbokki, and Korean barbecue. Seoul’s nightlife is lively, with entertainment districts like Hongdae and Gangnam offering music, clubs, and cafes. The city also features beautiful parks and mountains for outdoor activities. Its unique mix of old and new makes Seoul a fascinating destination.",
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Rio de Janeiro",
    price: 1000,
    description:
      "Rio de Janeiro, located in Brazil, is famous for its stunning natural beauty, vibrant culture, and festive atmosphere. The city is home to iconic landmarks such as Christ the Redeemer and Sugarloaf Mountain, offering breathtaking views. Rio is also known for its world-famous Carnival, featuring colorful parades, music, and dance. Visitors can relax on beautiful beaches like Copacabana and Ipanema or explore lush rainforests nearby. The city’s lively spirit, music, and cuisine create an unforgettable experience for travelers.",
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    name: "Delhi",
    price: 800,
    description:
      "Delhi, the capital of India, is a city rich in history, culture, and diversity. It offers a blend of ancient heritage and modern development, with landmarks such as the Red Fort, India Gate, and Qutub Minar. Visitors can explore bustling markets like Chandni Chowk, offering a wide range of goods and street food. Delhi’s cuisine is famous for its flavors, including dishes like chaat, butter chicken, and parathas. The city is also home to museums, gardens, and cultural centers. With its vibrant energy and historical significance, Delhi provides a unique and immersive travel experience.",
  },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <City data={data} />
    </div>
  );
};

export default App;
