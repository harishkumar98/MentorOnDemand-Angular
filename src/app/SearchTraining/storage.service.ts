import { Injectable } from '@angular/core';

import { Mentor } from '../models/mentor.model';
import {Training} from '../models/training.model';
@Injectable()
export class StorageService {

    public scope: Mentor[];
    public tscope: Training[];


    constructor() {
    }

    public getScope(){
        return this.scope;
    }

    public setScope(scope) {
        this.scope = scope;
    }

    public getTScope(){
        return this.tscope;
    }

    public setTScope(tscope) {
        this.tscope = tscope;
    }
}