import { ProjectService } from './../../services/Project.service';
import { CompanyService } from './../../services/Company.service';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProjectsResolver implements Resolve<any> {

  constructor(private projectService: ProjectService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.projectService.getAll();
  }

}
