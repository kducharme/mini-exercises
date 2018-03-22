 const locations = [
        { city: 'Bankok', country: 'Thailand', region: 'Southeast Asia', visited: true, hours: 24},
        { city: 'Paris', country: 'France', region: 'Europe', visited: true, hours: 8},
        { city: 'Denver', country: 'United States', region: 'North America', visited: false, hours: 2},
        { city: 'Chiang Mai', country: 'Thailand', region: 'Southeast Asia', visited: true, hours: 26},
        { city: 'Abu Dhabi', country: 'UAE', region: 'Middle East', visited: true, hours: 14},
        { city: 'Phuket', country: 'Thailand', region: 'Southeast Asia', visited: true, hours: 23},
        { city: 'Helsinki', country: 'Finland', region: 'Europe', visited: false, hours: 14}
      ];

      // 1. Only show countries in Thailand
      const countries = locations.filter(place => place.country === 'Thailand');
      console.table(countries)

      // Show countries that we have not visited
      const visited = locations.filter(place => place.visited == false);
      console.table(visited)

      // Show countries within 5 hours
      const distance = locations.filter(place => place.hours <= 20);
      console.table(distance)

      // Print out all of the location details on one line
      const fullLocation = locations.map(place => `City: ${place.city} / Country: ${place.country} / Region: ${place.region}`)
      console.table(fullLocation)

      // Sort by clostest distance to home
      const travelClose = locations.sort((a,b) => a.hours > b.hours ? 1 : -1);
      console.table(travelClose);

      // Total hours to visit all
      const totalHours = locations.reduce((distance, place) => {
        return distance + place.hours
      }, 0);
      console.log(totalHours)

      // Sort places A-Z
    const list = locations.sort((a, b) => a.city > b.city ? 1 : -1);
    console.table(list)
