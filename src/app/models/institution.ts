export class Institution {
    public institutionName: string;
    public isChildrenVisible: boolean;
    public institutionId: number;
    public parentInstitutionId: number;
    public canEdit: boolean;
    public canView: boolean;
    public childInstitutions: Institution[];
}
