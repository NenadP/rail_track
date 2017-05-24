package com.nenadp.railtrack;

public class Train {
	private long id;
    private String code;
    private String status;
    private String latitude;
    private String longitude;
    private String date;
    private String message;
    private String direction;

    public Train (long id, String message) {
    	this.id = id;
    	this.message = message;
    }
    
    public Train(String code, String status, String latitude, String longitude, String date, String message, String direction) {
        this.code = code;
        this.status = status;
        this.latitude = latitude;
        this.longitude = longitude;
        this.date = date;
        this.message = message;
        this.direction = direction;
    }

    public long getId() {
        return id;
    }
    
	public void setId(int id) {
		this.id = id;
	}
	
	public String getCode() {
		return code;
	}
	
	public void setCode(String code) {
		this.code = code;
	}
	
	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
	
	public String getLatitude() {
		return latitude;
	}
	
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
	public String getLongitude() {
		return longitude;
	}
	
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getDirection() {
		return direction;
	}
	
	public void setDirection(String direction) {
		this.direction = direction;
	}
}
