import { NgModule } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [MatSidenavModule, MatButtonModule],
    exports: [MatSidenavModule, MatButtonModule],
    declarations: []
})
export class MaterialModule {}
