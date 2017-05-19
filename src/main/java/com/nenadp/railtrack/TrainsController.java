package com.nenadp.railtrack;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TrainsController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/trains")
    public Trains trains(@RequestParam(value="name", defaultValue="World") String name) {
        return new Trains(counter.incrementAndGet(),
                            String.format(template, name));
    }
}