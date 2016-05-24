import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './modules/main/app.component';

bootstrap(AppComponent).then(
    ()=>console.info('app bootstrapped'),
    (error) =>{
        console.info('Not bootstrap, Error details:' + error);
    }
);