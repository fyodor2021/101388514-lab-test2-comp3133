export class MissionModel {
    patchSmall: string
    name: string
    launchYear: string
    details: string
    constructor(patchSmall:string,name:string, launchYear:string, details:string){
        this.patchSmall = patchSmall,
        this.name = name
        this.launchYear = launchYear
        this.details = details
    }
}
