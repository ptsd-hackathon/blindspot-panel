import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {LoginComponent} from './login.component';
import {UserService} from '../../@core/mock/users.service';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    UserService
  ],
})
export class LoginModule {
}
