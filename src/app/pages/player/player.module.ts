import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule.forChild(PlayerRotas)],
})
export class PlayerModule {}
