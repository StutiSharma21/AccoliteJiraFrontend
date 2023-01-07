import { Project } from "./project";
// export interface Jira {
//     "jiraId": number,
//     "projectName": String,
//     "jiraStatus": String,
//     "jiraTitle": String,
//     "jiraDescription": String,
//     "jiraAssignee": String,
//     "jiraReporter": String,
//     "jiraType": String,
//     "jiraSprint": String,
//     "jiraepic": number,
//     "jiraprojects":Project[]
//     "active": boolean
// }

// export interface Jira {
//         "jiraId": number,
//         "projectName": String,
//         "jiraStatus": String,
//         "jiraTitle": String,
//         "jiraDescription": String,
//         "jiraAssignee": String,
//         "jiraReporter": String,
//         "jiraType": String,
//         "jiraSprint": String,
//         "jiraepic": number,
//         "projectId": number,
//         "projectDescription":String,
//         "projectLabel": String,
//         "timestamp":Date,
//         "active": boolean
// }


export interface Jira {
        "jiraId": number,
        "projectName": String,
        "jiraStatus": String,
        "jiraTitle": String,
        "jiraDescription": String,
        "jiraAssignee": String,
        "jiraReporter": String,
        "jiraType": String,
        "jiraSprint": String,
        "jiraepic": number,
        "projectId": number,
        "projectDescription":String,
        "projectLabel": String,
        "timestamp":Date,
        "active": boolean
    }