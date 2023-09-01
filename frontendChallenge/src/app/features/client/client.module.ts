import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { FormClientComponent } from "./components/form-client/form-client.component";
import { ListClientComponent } from "./components/list-client/list-client.component";



@NgModule({
    declarations: [
        ListClientComponent,
        FormClientComponent,
    ],
    exports: [
        ListClientComponent,
        FormClientComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
    ]
})
export class ClientModule {}