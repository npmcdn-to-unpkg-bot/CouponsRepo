import {Component} from '@angular/core';
import {RouteParams, Router} from '@angular/router-deprecated';

@Component({
    selector: 'sub-content',
    template: `
        <h3>sub content from sub content :) </h3>
    `
})

export /**
 * SubContentComponent
 */
class SubContentComponent {
    constructor(private router:Router){
        
    }
}