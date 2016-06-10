import {Component} from "@angular/core";
import {RouteParams, Router, ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
import {SubContentComponent2} from "./sub-content2.component";
import {EmptyComponent} from "./emptyContent";

@Component({
    selector: "sub-content",
    template: "<h3>sub content from sub content :) </h3><br/> <nav>" +
            "<a [routerLink]='[\"SubContent2\"]'>Sub Route</a>" +
            "</nav><br/><router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: "/content2/",
        name: "SubContent2",
        component: SubContentComponent2
    },
    {
        path: "/",
        name: "SubContentRoot",
        component: EmptyComponent,
        useAsDefault: true
    }
])

export /**
 * SubContentComponent
 */
    class SubContentComponent {
    constructor(private router: Router) {

    }
}