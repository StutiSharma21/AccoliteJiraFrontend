import { Employee } from "./employee";
import { Project } from "./project";

export interface Jira {
    //"jiraId": number,
    "projectName": String,
    "jiraStatus": String,
    "jiraTitle": String,
    "jiraDescription": String,
    "jiraAssignee": String,
    "jiraReporter": String,
    "jiraType": String,
    //"jiraSprint": String,
    "jiraepic": Jira,
    "jiraprojects": Project,
    "employee":Employee,
    "jiraPriority": number
}
