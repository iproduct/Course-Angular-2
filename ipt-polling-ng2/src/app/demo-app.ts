import {Component, provide} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PollsComponent} from './polls/polls.component';
import {CardDemo} from './card/card-demo';
import {ButtonDemo} from './button/button-demo';
import {IconDemo} from './icon/icon-demo';
import {RadioDemo} from './radio/radio-demo';
import {SidenavDemo} from './sidenav/sidenav-demo';
import {ProgressBarDemo} from './progress-bar/progress-bar-demo';
import {ProgressCircleDemo} from './progress-circle/progress-circle-demo';
import {CheckboxDemo} from './checkbox/checkbox-demo';
import {Dir} from '../core/rtl/dir';
import {MdButton} from '../components/button/button';
import {MD_SIDENAV_DIRECTIVES} from '../components/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '../components/list/list';
import {MdIcon} from '../components/icon/icon';
import {MdToolbar} from '../components/toolbar/toolbar';
import {PortalDemo} from './portal/portal-demo';
import {ToolbarDemo} from './toolbar/toolbar-demo';
import {OverlayDemo} from './overlay/overlay-demo';
import {ListDemo} from './list/list-demo';
import {InputDemo} from './input/input-demo';
import {LiveAnnouncerDemo} from './live-announcer/live-announcer-demo';
import {GesturesDemo} from './gestures/gestures-demo';
import {GridListDemo} from './grid-list/grid-list-demo';
import {TabGroupDemo} from './tab-group/tab-group-demo';
import {LoggerService} from './shared/logger.service';
import {HTTP_PROVIDERS, XHRBackend}    from '@angular/http';
// in-memory web api imports
// import {InMemoryBackendService, SEED_DATA}
// from 'a2-in-memory-web-api/core';
import {PollsMockupData} from './polls/shared/polls-mockup-data';
import {PollsService, PollsMockupService} from './polls/shared/index';


@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Angular Material 2!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home { }

@Component({
  selector: 'demo-app',
  providers: [
    HTTP_PROVIDERS,
    // in-memory web api providers
    // provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    // provide(SEED_DATA, { useClass: PollsMockupData }), // in-mem server data
    provide(PollsService, { useClass: PollsMockupService }), LoggerService],
  templateUrl: 'app/demo-app.html',
  styleUrls: ['app/demo-app.css'],
  directives: [
    ROUTER_DIRECTIVES,
    Dir,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar,
  ],
  pipes: []
})
@Routes([
  new Route({ path: '/', component: HomeComponent }),
  new Route({ path: '/home', component: HomeComponent }),
  new Route({ path: '/polls', component: PollsComponent }),
  new Route({ path: '/button', component: ButtonDemo }),
  new Route({ path: '/card', component: CardDemo }),
  new Route({ path: '/radio', component: RadioDemo }),
  new Route({ path: '/sidenav', component: SidenavDemo }),
  new Route({ path: '/progress-circle', component: ProgressCircleDemo }),
  new Route({ path: '/progress-bar', component: ProgressBarDemo }),
  new Route({ path: '/portal', component: PortalDemo }),
  new Route({ path: '/overlay', component: OverlayDemo }),
  new Route({ path: '/checkbox', component: CheckboxDemo }),
  new Route({ path: '/input', component: InputDemo }),
  new Route({ path: '/toolbar', component: ToolbarDemo }),
  new Route({ path: '/icon', component: IconDemo }),
  new Route({ path: '/list', component: ListDemo }),
  new Route({ path: '/live-announcer', component: LiveAnnouncerDemo }),
  new Route({ path: '/gestures', component: GesturesDemo }),
  new Route({ path: '/grid-list', component: GridListDemo }),
  new Route({ path: '/tab-group', component: TabGroupDemo })
])
export class DemoApp { }
