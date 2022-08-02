namespace Employe{

  export interface Employee{
    name: string;
    salary: number;
    bonus: number;
  }

  export const employees: Employee[] = [];
}
export default Employe;
