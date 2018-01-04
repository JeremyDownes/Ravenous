const apiKey = 'hX39GctNPaUyZ-nM1_YtpKaARNb0ssVAlDDy2VW_D0QLh14k-MW4JYk380rF9etHJpJzsPejPCqQ9qVIh0kZw-RPPha1_xRwVuEMpqysYjENDMjImbDMIsCrAZ02WnYx';

export const Yelp = {

search (term,location,sortBy) {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,	
		{
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response=> response.json()).then(jsonResponse=> {
				if(jsonResponse.businesses) {
					return jsonResponse.businesses.map(business=> {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1 + "\n" + business.location.address2,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
						}
					});
				}
			});
		}
	}

	export default Yelp;
