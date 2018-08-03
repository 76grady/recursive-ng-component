import { Component } from '@angular/core';
import { Institution } from './models/institution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  institutions: Institution[] = [
    {
      institutionId: 1,
      parentInstitutionId: null,
      institutionName: 'Kentucky Department of Education',
      canEdit: true,
      canView: false,
      isChildrenVisible: true,
      childInstitutions: [ {
        institutionId: 2,
        parentInstitutionId: 1,
        institutionName: 'Grady County Schools',
        canEdit: true,
        canView: false,
        isChildrenVisible: true,
        childInstitutions: [
          {
            institutionId: 6,
            parentInstitutionId: 2,
            institutionName: 'Grady High Schools',
            canEdit: true,
            canView: false,
            isChildrenVisible: true,
            childInstitutions: [
              {
                institutionId: 9,
                parentInstitutionId: 6,
                institutionName: 'Cool High Schools',
                canEdit: true,
                canView: false,
                isChildrenVisible: true,
                childInstitutions: [
                  {
                    institutionId: 11,
                    parentInstitutionId: 9,
                    institutionName: 'Alpha High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                  {
                    institutionId: 12,
                    parentInstitutionId: 9,
                    institutionName: 'Beta High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                  {
                    institutionId: 13,
                    parentInstitutionId: 9,
                    institutionName: 'Gamma High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                ]
              },
              {
                institutionId: 10,
                parentInstitutionId: 6,
                institutionName: 'Not Cool High Schools',
                canEdit: true,
                canView: false,
                isChildrenVisible: true,
                childInstitutions: [
                  {
                    institutionId: 14,
                    parentInstitutionId: 10,
                    institutionName: 'Zeta High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                  {
                    institutionId: 15,
                    parentInstitutionId: 10,
                    institutionName: 'Omega High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                  {
                    institutionId: 16,
                    parentInstitutionId: 10,
                    institutionName: 'Redneck High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  },
                  {
                    institutionId: 17,
                    parentInstitutionId: 10,
                    institutionName: 'Gangsta High School',
                    canEdit: true,
                    canView: false,
                    isChildrenVisible: true,
                    childInstitutions: [
                    ]
                  }
                ]
              },
            ]
          },
          {
            institutionId: 7,
            parentInstitutionId: 2,
            institutionName: 'Grady Middle Schools',
            canEdit: true,
            canView: false,
            isChildrenVisible: true,
            childInstitutions: [
            ]
          },
          {
            institutionId: 8,
            parentInstitutionId: 2,
            institutionName: 'Grady Elementary Schools',
            canEdit: true,
            canView: false,
            isChildrenVisible: true,
            childInstitutions: [
            ]
          }
        ]
      },
      {
        institutionId: 4,
        parentInstitutionId: 1,
        institutionName: 'Simpson County Schools',
        canEdit: true,
        canView: false,
        isChildrenVisible: true,
        childInstitutions: [
        ]
      },
      {
        institutionId: 5,
        parentInstitutionId: 1,
        institutionName: 'County Schools',
        canEdit: true,
        canView: false,
        isChildrenVisible: true,
        childInstitutions: [
        ]
      }
      ]
    }
  ];
}
