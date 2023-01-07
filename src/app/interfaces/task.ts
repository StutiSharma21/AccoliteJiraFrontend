import { Epic } from "./epic";

export interface Task {    
    taskId:number;
    taskTitle:String;
    taskAssignee:String;
    taskReportee:String;
    taskType:String;
    taskPhase:String;
    taskPriority:number;
    taskPoints:number;
    descriptionGoal:String;
    descriptionAction:String;
    descriptionResult:String;
    epicId:number;
}
