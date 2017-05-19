package com.nenadp.railtrack;

public class Trains {
	
    private final long id;
    private final String content;

    public Trains(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
