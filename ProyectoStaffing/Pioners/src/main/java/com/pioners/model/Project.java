package com.pioners.model;

public class Project {
    //mis var de proyectos
    User user = new User();
    private String name;
    private String dateInicio;
    private  String dateFin;
    private long presupuesto;
    private String description;

    public Project() {
    }

    public Project(String name, String dateInicio, String dateFin,  long presupuesto, String description) {
        this.name = name;
        this.dateInicio = dateInicio;
        this.dateFin = dateFin;

        this.presupuesto = presupuesto;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateInicio() {
        return dateInicio;
    }

    public void setDateInicio(String dateInicio) {
        this.dateInicio = dateInicio;
    }

    public String getDateFin() {
        return dateFin;
    }

    public void setDateFin(String dateFin) {
        this.dateFin = dateFin;
    }



    public long getPresupuesto() {
        return presupuesto;
    }

    public void setPresupuesto(long presupuesto) {
        this.presupuesto = presupuesto;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
