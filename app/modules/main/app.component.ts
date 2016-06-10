import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from "@angular/router-deprecated";
import {SubContentComponent} from "../subcontent/sub-content.component";

@Component({
    selector: "body",
    template: `
        <h2>Application Title</h2>
        <p>some random text here</p>
        <nav>
            <a [routerLink]='["SubContent"]'>Sub Content</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: "/subcontent/...",
        name: "SubContent",
        component: SubContentComponent
    }
])

export /**
 * AppComponent
 */
    class AppComponent {

}
