package com.pioners.model;

import sun.security.util.Password;

public class User {
    private String rut;
    private boolean disponibility;
    private  String rol;
    private int id_adm=1;// Diferenciacion de ids colaborador y administrador
    private int id_col=2;
    private String aptitudesextra;
    private String fullName;
    private String email;
    private Password pasword;

    public User() {
    }

    public User(String rut, boolean disponibility, String rol, String aptitudesextra,int id_adm,int id_col, String fullName, String email, Password pasword) {
        this.rut = rut;
        this.disponibility = disponibility;
        this.rol = rol;
        this.aptitudesextra = aptitudesextra;
        this.fullName = fullName;
        this.email = email;
        this.pasword = pasword;
    }

    public int getId_adm() {
        return id_adm;
    }

    public void setId_adm(int id_adm) {
        this.id_adm = id_adm;
    }

    public int getId_col() {
        return id_col;
    }

    public void setId_col(int id_col) {
        this.id_col = id_col;
    }

    public String getRut() {
        return rut;
    }

    public void setRut(String rut) {
        this.rut = rut;
    }

    public boolean isDisponibility() {
        return disponibility;
    }

    public void setDisponibility(boolean disponibility) {
        this.disponibility = disponibility;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public String getAptitudesextra() {
        return aptitudesextra;
    }

    public void setAptitudesextra(String aptitudesextra) {
        this.aptitudesextra = aptitudesextra;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Password getPasword() {
        return pasword;
    }

    public void setPasword(Password pasword) {
        this.pasword = pasword;
    }
}
