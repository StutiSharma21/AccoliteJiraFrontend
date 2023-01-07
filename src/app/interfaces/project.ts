import { Employee } from "./employee"
export interface Project {
    isActive:boolean,
    employees:Employee[],
    projectDescription:String,
    projectId:number,
    projectLabel:String
}