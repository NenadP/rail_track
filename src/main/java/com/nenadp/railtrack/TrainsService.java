package com.nenadp.railtrack;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TrainsService {

	String currentTrains;
	
	public String getCurrentTrains() {
		final String URI = "http://api.irishrail.ie/realtime/realtime.asmx/getCurrentTrainsXML";
	    RestTemplate restTemplate = new RestTemplate();
	    return restTemplate.getForObject(URI, String.class);
	}
}
