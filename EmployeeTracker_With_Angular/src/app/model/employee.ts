export interface Employee{
    id: number,
    name: number,
    status: string,
    department: string,
    mobileno: number,
    emailid: string,
    createdBy: string,
    createdDate: number,
    updatedBy: string,
    updatedDate: number,
    salary: number,
    country:{
        cid:number,
        cname: string
    }

}