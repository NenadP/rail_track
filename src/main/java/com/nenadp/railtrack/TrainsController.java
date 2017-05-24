package com.nenadp.railtrack;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrainsController {

    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/trains")
    public Train trains(@RequestParam(value="name", defaultValue="World") String name) {
    	TrainsService trainsService = new TrainsService();
    	String currentTrains = trainsService.getCurrentTrains();
        return new Train(counter.incrementAndGet(), currentTrains);
    }
}