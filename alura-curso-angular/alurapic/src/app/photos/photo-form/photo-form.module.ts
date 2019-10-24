import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { PhotoModule } from "../photo.module";
import { ImmediateClickModule } from "../../shared/directives/immediate-click/immediate-click.module";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
   CommonModule,
   ReactiveFormsModule,
   VMessageModule,
   RouterModule,
   PhotoModule,
   ImmediateClickModule
  ]
})
export class PhotoFormModule {}
