import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from '@nx-component-lib/components';

@Component({
  standalone: true,
  imports: [RouterModule, ComponentsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-component-lib';
}
