package com.main.ecommerce.exceptions;

public class CrudOperationException extends RuntimeException{
    public CrudOperationException(String message){
        super(message);
    }
}
