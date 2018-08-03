import { Component, OnInit, Input } from '@angular/core';
import { Institution } from '../models/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {
  @Input() institutions: Institution[];

  constructor() { }

  ngOnInit() {
  }

  childrenCanEdit(institution: Institution): number {
    return this.getEditCount(institution);
  }

  childrenCanView(institution: Institution): number {
    return this.getViewCount(institution);
  }

  getEditCount(institution: Institution): number {
    let count = 0;
    if (institution.childInstitutions) {
      institution.childInstitutions.forEach(element => {
        if (element.canEdit) {
          count++;
        }
        count = count + this.getEditCount(element);
      });
    }
    return count;
  }

  getViewCount(institution: Institution): number {
    let count = 0;
    if (institution.childInstitutions) {
      institution.childInstitutions.forEach(element => {
        if (element.canView) {
          count++;
        }
        count = count + this.getViewCount(element);
      });
    }
    return count;
  }

  changeEdit(institution: Institution) {
    institution.canEdit = !institution.canEdit;
    if (window.confirm('Do you want this to affect all children')) {
      this.setEdit(institution.canEdit, institution.childInstitutions);
      if (institution.canEdit) {
        institution.canView = false;
        this.setView(false, institution.childInstitutions);
      }
    } else {
      if (institution.canEdit) {
        institution.canView = false;
      }
    }
  }

  changeView(institution: Institution) {
    institution.canView = !institution.canView;
    if (institution.canView) {
      institution.canEdit = false;
    }
  }

  showHideChildren(institution: Institution): void {
    institution.isChildrenVisible = !institution.isChildrenVisible;
  }

  setEdit(canEdit: boolean, institution: Institution[]): void {
    institution.forEach(i => {
      i.canEdit = canEdit;
      this.setEdit(canEdit, i.childInstitutions);
    });
  }

  setView(canView: boolean, institution: Institution[]): void {
    institution.forEach(i => {
      i.canView = canView;
      this.setView(canView, i.childInstitutions);
    });
  }

}
